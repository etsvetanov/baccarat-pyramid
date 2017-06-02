from celery import Celery

app = Celery(
    main='tasks',
    broker='redis://redis',
    backend='redis://redis',
    include=['baccarat.tasks']
)

if __name__ == '__main__':
    app.start()