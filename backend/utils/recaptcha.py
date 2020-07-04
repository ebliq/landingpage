import requests
import json
import sys

if "pytest" in sys.modules:
    # TEST KEY FROM GOOGLE
    secret = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
else:
    # Live-Key
    secret = "6LcceP8UAAAAAKmwKEo7PuiUtztmdKbrev5KmGFr"

url = 'https://www.google.com/recaptcha/api/siteverify'


def validate_robot(response: str):
    try:

        data = {
            "secret": secret,
            "response": response
        }
        x = requests.post(url, data=data)

        response = json.loads(x.text)
        '''
        sample response
        {'success': True, 'challenge_ts': '2020-06-21T13:50:53Z',
            'hostname': 'localhost', 'score': 0.9, 'action': 'submit'}
        {'success': False, 'error-codes': ['timeout-or-duplicate']}
        '''

        if 'score' not in response:
            response['score'] = 0.1
        if(response["success"]):
            return {"success": True, "score": response['score']}
        else:
            raise(AssertionError("your a fucking robot!"))
    except Exception as e:
        raise(e)
