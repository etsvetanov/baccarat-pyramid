from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session
from sqlalchemy.orm import sessionmaker


# TODO: remove the hardcoded connection string - use ENV variable, http://stackoverflow.com/questions/10893628/how-can-i-get-the-ini-data-in-pyramid or pass it as a task param

engine = create_engine(
    'postgresql+psycopg2://baccarat:s3cr3t@baccarat_db:5432/baccarat',
    convert_unicode=True,
    pool_recycle=3600, pool_size=10)

db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))


