import json

def changePassword(kelas, password):
    with open('config\\password.json', 'r') as passw:
        data = json.load(passw)
    
    if kelas == 'kelas 10':
        data['data']['kelas 10'] = password
    elif kelas == 'kelas 11':
        data['data']['kelas 11'] = password
    else:
        return None
    
    with open('config\\password.json', 'w') as passw:
        json.dump(data, passw)
        
def showPassword(password):
    with open('config\\password.json', 'r') as passw:
        data = json.load(passw)
    
    if password == data['data']['kelas 10']:
        return 'kelas 10'
    elif password == data['data']['kelas 11']:
        return 'kelas 11'
    else:
        return False

with open('config\\nama.json', 'r') as nama_nama:
    nama = json.load(nama_nama)