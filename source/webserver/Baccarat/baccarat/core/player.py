from typing import Callable
from random import randint

# from random import randint
#
#
# def roll():
#     n  = randint(1, 10000)
#     if n <= 5068:  # 50.58%
#         return 'P'
#     else:  # 49.32%
#         return 'B'
#
#
# class BasePlayer:
#     def __init__(self, name):
#         self.name = name
#         self.bet = 0
#         self.choice = None
#         self.net = 0
#         self.outcome = 'L'
#
#     def make_bet(self):
#         self.bet = self.get_bet_size()
#         self.choice = self.get_bet_choice()
#         self.net -= self.bet
#
#     def update(self, outcome, reward=0):
#         self.result = outcome
#         self.net += reward
#
#     def get_bet_size(self):
#         raise NotImplementedError
#
#     def get_bet_choice(self):
#         raise NotImplementedError
#
#
# class SinglePlayer(BasePlayer):
#     def __init__(self, name, coefficient=1, base=2):
#         BasePlayer.__init__(self, name)
#
#         base_row = [1, 1, 1, 2, 2, 4, 6, 10, 16, 26]
#
#         self.row = [i * coefficient for i in base_row]
#         self.new_index = 0
#         self.index = None
#         self.double_up = False
#         self.result = 'L'
#         self.level = 1
#         self.base = base
#         self.debt = 0
#
#     def get_bet_size(self):
#         self.is_double()
#         self.index = self.new_index
#         level_multiplier = self.base ** (self.level - 1)
#
#         bet = self.row[self.index] * level_multiplier
#
#         if self.double_up:
#             bet *= 2
#
#         return bet
#
#     def get_bet_choice(self):
#         return roll()
#
#     def is_double(self):
#         if (self.new_index <= 2 or self.new_index == 4) \
#                 and self.index == self.new_index \
#                 and not self.double_up:
#             self.double_up = True
#         else:
#             self.double_up = False
#
#     def update(self, outcome, reward=0):
#         super().update(outcome, reward)
#
#         self.update_index()
#         self.update_level()
#
#     def update_index(self):
#         if self.result == 'L':
#             self.new_index += 1
#         elif self.new_index == 3 or self.new_index >= 5:
#             self.new_index -= 3
#         elif self.double_up:
#             self.new_index = 0
#
#         if self.new_index >= len(self.row):
#             self.new_index = 0
#             self.update_level(increase=True)
#
#     def update_level(self, increase=False):
#         if increase:
#             self.level += 1
#         elif self.debt >= ((sum(self.row) * (2 ** (self.level -1))) / 2):
#             self.level -= 1
#             self.debt = 0
#
#         if self.level < 1:
#             # TODO: check this condition
#             self.level = 1
#
#
#           0  1  2  3  4  5  6  7   8   9
BASE_ROW = [1, 1, 1, 2, 2, 4, 6, 10, 16, 26]


def update_double_up(index, outcome, double_up):
    bonus_indexes = (0, 1, 2, 4)

    if outcome and not double_up and index in bonus_indexes:
        return True

    return False

def update_index(index, outcome, double_up):
    bonus_indexes = (0, 1, 2, 4)
    if not outcome:
        if index == len(BASE_ROW) - 1:
            return 0  # next level
        else:
            return index + 1
    else:
        if double_up:
            return 0
        elif index in bonus_indexes:
            return index
        else:
            return index - 3 if index - 3 > 0 else 0


def update_level(index, outcome, level):
    if index == len(BASE_ROW) - 1 and not outcome:
        return level + 1

    if level > 1 and outcome and index <= 2:
        return level - 1

    return level

def update(index, outcome, double_up, level):
    index, double_up, level = update_index(index, outcome, double_up),\
                              update_double_up(index, outcome, double_up),\
                              update_level(index, outcome, level)

    return index, double_up, level


def roll():
    i = randint(0, 1)

    if i == 0:
        return 'Player'
    else:
        return 'Bank'



def single_player():
    index = 0
    double_up = False
    level = 1


    while True:
        bet_size = BASE_ROW[index] * level
        if double_up:
            bet_size *= 2

        bet_choice = 'Player'

        yield bet_size, bet_choice

        outcome = yield

        index, double_up, level = update(index, outcome, double_up, level)
        print('index, double_up, level:', index, double_up, level)

