import json
import re


def validate_input(event):
    # check if body exist
    if not "body" in event:
        raise(KeyError("body not present in event"))

    # check if content-type exist
    if not "headers" in event and not "content-type" in event["headers"]:
        raise(KeyError("body not present in event"))

    # check if content-type is correct
    if not event["headers"]["content-type"] == "application/json":
        raise(AssertionError("unsuported content-type"))

    # Parse Json
    parsed_body = json.loads(event['body'])

    # check if email exist
    if not "email" in parsed_body:
        raise(KeyError("no mail present in query string"))

    # check if mail is a valid mail
    if not re.search('^[a-z0-9]+[\\._]?[a-z0-9]+[@]\\w+[.]\\w{2,100}$', parsed_body['email']):
        raise(AssertionError("email is not a valid email"))

    return parsed_body
