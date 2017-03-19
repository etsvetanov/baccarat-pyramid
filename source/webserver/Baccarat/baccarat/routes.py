
def includeme(config):
    config.add_static_view('static', 'static', cache_max_age=1)
    config.add_route('home', '/')
    config.add_route('simulate', '/simulate')
    config.add_route('admin', '/admin')
    config.add_route('play', '/play')
    config.add_route('options', '/options')

    config.add_route('login', '/login')
    config.add_route('logout', '/logout')

    config.add_route('user_options', '/api/user_options')
    config.add_route('create_user', '/api/create_user')

