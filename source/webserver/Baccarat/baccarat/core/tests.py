import pytest

from . player import single_player
from . player import update_index
from . player import update_double_up
from . player import update_level
from . player import update
from . player import roll

@pytest.fixture
def player():
    return single_player()


def test_single_player_is_iterable(player):
    assert player == iter(player)

def test_single_player_first_bet(player):
    bet_size, bet_choice = next(player)
    assert bet_size == 1

def test_single_player_send_outcome(player):
    _ = next(player)
    _ = next(player)
    bet_size, bet_choice = player.send('win')
    # bet = next(player)
    assert bet_size == 2

def test_update_double_up():
    next_double_up = update_double_up(index=0, outcome=False, double_up=False)
    assert next_double_up is False

    next_double_up = update_double_up(index=4, outcome=True, double_up=False)
    assert next_double_up is True

    next_double_up = update_double_up(index=2, outcome=True, double_up=True)
    assert next_double_up is False


def test_update_index():
    next_index = update_index(index=0, outcome=False, double_up=False)
    assert next_index == 1

    next_index = update_index(index=9, outcome=False, double_up=False)
    assert next_index == 0

    next_index = update_index(index=4, outcome=True, double_up=True)
    assert next_index == 0

    next_index = update_index(index=4, outcome=True, double_up=False)
    assert next_index == 4

    next_index = update_index(index=5, outcome=True, double_up=False)
    assert next_index == 2

def test_update_level():
    # assert level is correctly increased
    next_level = update_level(index=9, outcome=False, level=1)
    assert next_level == 2

    # assert level is correctly decreased
    next_level = update_level(index=2, outcome=True, level=2)
    assert next_level == 1

    # assert level is not incorrectly decreased
    next_level = update_level(index=3, outcome=True, level=2)
    assert next_level == 2

    # assert level is not incorrectly increased
    next_level = update_level(index=8, outcome=False, level=3)
    assert next_level == 3


def test_update():
    index, double_up, level = update(index=3, outcome=True, double_up=False, level=2)

    assert index == 0
    assert double_up is False
    assert level == 2

def test_1000_rounds():
    g = single_player()


    for i in range(1000):
        bet_size, bet_choice = next(g)
        print('bet_size, bet_choice:', bet_size, bet_choice)
        winning_side = roll()
        g.send(winning_side == bet_choice)

