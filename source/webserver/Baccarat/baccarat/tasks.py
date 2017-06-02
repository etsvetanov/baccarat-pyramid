import celery
import redis
import time

from baccarat.models import Iteration
from .db import db_session
from .celery import app

REDIS = redis.StrictRedis(host='localhost', port=6379, db=0)
USER_TASK_PROGRESS = '{username}_task_progress'

# app = Celery('tasks', broker='redis://redis', backend='redis://redis')

@app.task(name='tasks.add')
def add(username):
    task_progress_key = USER_TASK_PROGRESS.format(username=username)
    REDIS.set(task_progress_key, '0')

    for i in range(6):
        time.sleep(1)
        print('add():', i*20)
        REDIS.set('{0}_task_progress'.format(username), i*20)

    return 10


@app.task(name='tasks.simulate')
def simulate(iterations):
    print('I AM THE TASK W {iterations}'.format(iterations=iterations))