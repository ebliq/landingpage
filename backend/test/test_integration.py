# content of test_sample.py


from handler import pre_register
import json
import os
import pytest

json_data = open("./test/event.json", "r")
event = json.loads(json_data.read())

result = {'body': '{"message": "email successful added", "value": "test_integration@mail.de"}', 'statusCode': 200}


def test_integration():
    assert pre_register(event, None) == result
