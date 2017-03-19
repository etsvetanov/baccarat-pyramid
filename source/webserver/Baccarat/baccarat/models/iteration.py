from .meta import Base
from sqlalchemy.dialects.postgresql import ENUM
from sqlalchemy.orm import relationship
from sqlalchemy import (
    Column,
    Integer,
    ForeignKey,
    BigInteger,
    String
)


class Iteration(Base):

    __tablename__ = 'iterations'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    user = relationship('User', backref='Iterations')

    iteration = Column(Integer, nullable=False, default=0)
    name = Column(String(length=10), nullable=True)
    bet = Column(BigInteger, nullable=True)
    index = Column(Integer, nullable=True)
    level = Column(Integer, nullable=True)
    net = Column(BigInteger, nullable=True)
    partner = Column(String(length=10), nullable=True)
    choice = Column(ENUM('Player', 'Bank', 'Tie', name='choice_enum'), nullable=True)
    result = Column(ENUM('Win', 'Loss', name='result_enum'), nullable=True)
    debt = Column(BigInteger, nullable=True)
