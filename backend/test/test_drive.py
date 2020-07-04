from utils.saveToGSheet import save_to_gsheet
import pytest


def test_drive():
    assert save_to_gsheet('test_drive@mail.de', 0.0) == True
