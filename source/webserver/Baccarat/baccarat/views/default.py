from pyramid.view import view_config
from pyramid.exceptions import HTTPForbidden
from pyramid.response import Response
import redis

import json

from ..models import User, Iteration, Options
from baccarat import tasks

REDIS = redis.StrictRedis(host='localhost', port=6379, db=0)
USER_TASK_PROGRESS = '{username}_task_progress'



@view_config(route_name='home', renderer='../templates/home.jinja2')
@view_config(route_name='simulate', renderer='../templates/home.jinja2')
@view_config(route_name='admin', renderer='../templates/home.jinja2')
@view_config(route_name='play', renderer='../templates/home.jinja2')
@view_config(route_name='options', renderer='../templates/home.jinja2')
def home(request):
    user = request.user
    if user is None:
        raise HTTPForbidden

    return {
        'bundlejs_url': request.static_url('baccarat:static/js/app.js'),
        'vendorjs_url': request.static_url('baccarat:static/js/vendor.js'),
        'style_url': request.static_url('baccarat:static/css/app.css'),
        'normalize_url': request.static_url('baccarat:static/css/normalize.css')
    }

@view_config(route_name='user_options', renderer='json', request_method='GET')
def get_user_options(request):
    user_options = request.user.options
    options_dict = user_options.__dict__
    options_dict.pop('_sa_instance_state')

    return options_dict

@view_config(route_name='user_options', renderer='json', request_method='POST')
def set_user_options(request):
    received_options = request.json_body
    new_options = {column: received_options[column]
                   for column in Options.__table__.columns.keys()
                   if column in received_options}

    if new_options:
        request.dbsession.query(Options).filter_by(user_id=request.user.id).update(new_options)



@view_config(route_name='create_user')
def create_user(request):
    username = request.params['username']
    password = request.params['password']

    user = User(username=username, role='player')
    user.set_password(password)

    request.dbsession.add(user)

    return Response(status_code=200)


@view_config(route_name='start_simulation')
def start_simulation(request):

    print('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    username = request.user.username

    result = tasks.simulate.delay(username)

    # r.set(username, result.id)

    return Response(status_code=200)


@view_config(route_name='simulation_status', renderer='json')
def simulation_status(request):
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    username = request.user.username
    task_progress_key = '{0}_task_progress'.format(username)
    progress = r.get(task_progress_key).decode('utf-8')

    print('simulation_status, progress:', progress, type(progress))

    return {
        'percentage': progress,
    }




