import json
        
def changePassword(kelas, newPassword):
  if kelas == 'kelas 10':
    with open('config/password_kelas10.json', 'w') as pass_10:
      json.dump({'data': {'kelas 10': newPassword}}, pass_10)
  if kelas == 'kelas 11':
    with open('config/password_kelas11.json', 'w') as pass_11:
      json.dump({'data': {'kelas 11': newPassword}}, pass_11)
  
  return None
def showPassword(password):
    with open('config/password_kelas10.json', 'r') as pass_10:
        dataPassword_10 = json.load(pass_10)
        
    with open('config/password_kelas11.json', 'r') as pass_11:
      dataPassword_11 = json.load(pass_11)
    
    if password == dataPassword_10['data']['kelas 10']:
        return 'kelas 10'
    elif password == dataPassword_11['data']['kelas 11']:
        return 'kelas 11'
    else:
        return False
      
nama = {
  "nama": [
    "Chelsa",
    "Aviva",
    "Fachri",
    "Fely",
    "Tiara",
    "Nanda",
    "Renggi",
    "Nicholas",
    "Ikrar",
    "Rangga",
    "Felix",
    "Bagus",
    "Gentar",
    "Bayu",
    "Nadhin",
    "Dika",
    "Bintari",
    "Nadia",
    "Greta",
    "Putri",
    "Bagas",
    "Syahrul",
    "Azmi",
    "Fauzan"
  ],
  "kelas": [
    "X DPIB 1",
    "X DPIB 1",
    "X DPIB 2",
    "X DPIB 2",
    "X DPIB 3",
    "X DPIB 3",
    "X DPIB 3",
    "X DPIB 3",
    "X TKR 1",
    "X TKR 3",
    "X TKR 3",
    "X TBSM 1",
    "X TBSM 1",
    "X TBSM 2",
    "X TBSM 2",
    "X TBSM 2",
    "X TKJ 1",
    "X TKJ 2",
    "X TKJ 2",
    "X TKJ 3",
    "X TKJ 3",
    "X DKV 1",
    "X DKV 2",
    "X DKV 3"
  ]
}

    