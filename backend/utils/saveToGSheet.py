import gspread
from oauth2client.service_account import ServiceAccountCredentials
import uuid
import datetime

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name(
    'ebliq-069acab01c05.json', scope)
client = gspread.authorize(creds)

sheet = client.open('mails-landingpage').sheet1


def save_to_gsheet(email: str, score: float):
    try:
        myuuid = uuid.uuid4().__str__()
        registrationOn = datetime.datetime.now().isoformat()
        row = [myuuid, registrationOn, email, score]
        sheet.insert_row(row, 2)
        return True
    except Exception as e:
        raise(e)
