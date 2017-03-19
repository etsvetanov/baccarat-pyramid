from .meta import Base
from sqlalchemy.orm import relationship, backref

from sqlalchemy import (
    Column,
Integer,
    BigInteger,
    Boolean,
    ForeignKey,
)

class Options(Base):
    __tablename__ = 'user_options'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    user = relationship('User', backref=backref('options', uselist=False))

    step = Column(Integer, nullable=False, default=2)
    starting_bet = Column(BigInteger, nullable=False, default=100)
    pairs = Column(Integer, nullable=False, default=4)

    # columns
    bet_column = Column(Boolean, nullable=False, default=True)
    index_column = Column(Boolean, nullable=False, default=True)
    level_column = Column(Boolean, nullable=False, default=True)
    net_column = Column(Boolean, nullable=False, default=True)
    partner_column = Column(Boolean, nullable=False, default=True)
    choice_column = Column(Boolean, nullable=False, default=True)
    result_column = Column(Boolean, nullable=False, default=True)
    debt_column = Column(Boolean, nullable=False, default=True)

    # rows
    real_player_rows = Column(Boolean, nullable=False, default=True)
    virtual_player_rows = Column(Boolean, nullable=False, default=True)
