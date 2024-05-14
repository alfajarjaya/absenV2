import json
      
with open('config/name.json', 'r') as n:
  nama = json.load(n) 
  
from config.models import Password

def showPassword(input_password):
    password_record = Password.query.filter_by(password=input_password).first()
    if password_record:
        return password_record.kelas
    return None