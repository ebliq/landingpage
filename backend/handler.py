import json
import boto3
import os
import uuid
import datetime
from urllib.parse import parse_qs
import re

# Custom stuff
from saveToGSheet import save_to_gsheet
from validateInput import validate_input
from recaptcha import validate_robot


def respond_bad_request(message: str):
    return {
        "statusCode": 400,
        "body": json.dumps({'message': message})
    }


def pre_register(event, context):
    try:
        # validate input
        parsed_body = validate_input(event)

        # take mail from query string
        raw_mail = parsed_body['email']
        raw_token = parsed_body['token']

        # Verify Robot
        recaptcha_response = validate_robot(raw_token)

        raw_score = recaptcha_response['score']

        # put mail into dynamodb
        save_to_gsheet(raw_mail, raw_score)

    except Exception as e:
        return respond_bad_request(repr(e))

    return {
        "statusCode": 200,
        "body": json.dumps({'message': 'email successful added', 'value': raw_mail})
    }
