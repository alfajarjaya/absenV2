import json
        
def showPassword(password):
    with open('config/password.json', 'r') as passw:
        data = json.load(passw)
    
    if password == data['data']['kelas 10']:
        return 'kelas 10'
    elif password == data['data']['kelas 11']:
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

    