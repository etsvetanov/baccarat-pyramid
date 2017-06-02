# from . import player
#
#
#
# class Game:
#     def __init__(self, gamblers):
#         self.gamblers = gamblers
#         self.outcome = None
#
#     def set_outcome(self, outcome=None):
#         if outcome:
#             self.outcome = outcome
#         else:
#             self.outcome = player.roll()
#
#         self.notify_gamblers()
#
#
#     def notify_gamblers(self):
#         for gambler in self.gamblers:
#             if gambler.choice == self.outcome:
#                 amount = gambler.bet * 2
#                 gambler.update(outcome='W', reward=amount)
#             else:
#                 gambler.update(outcome='L')
#
#     def deal(self):
#         for gambler in self.gamblers:
#             gambler.make_bet()
#
#
#
# class GameFactory:
#     def __init__(self, player_num, starting_bet, base):
#         self.player_num = player_num
#         self.starting_bet = starting_bet
#         self.base = base
#
#     def create(self):
#         players = []
#
#         for i in range(self.player_num):
#             p = player.SinglePlayer(coefficient=self.starting_bet, name='P' + str(i), base=self.base)
#             players.append(p)
#
#         game = Game(gamblers=players)
#
#         return game
#
#
#
#
# if __name__ == '__main__':
#     # test
#     factory = GameFactory(player_num=10, starting_bet=1, base=2)
#     game = factory.create()
#     for i in range(100):
#         game.deal()
#         game.set_outcome()
#
#     print('Done')

# def player(strategy):
#
#     yield (bet_size, bet_choice)
#
# def game_generator(players, collector):
#     while True:
#         for player in players:
#             player.make_bet()
#
#         yield map(collector, players)
#
# g = game_generator()
# collector_generator = next(g)
# next(collector_generator)
# next(collector_generator)
# next(collector_generator)
# next(collector_generator)
# next(collector_generator)
# next(g)