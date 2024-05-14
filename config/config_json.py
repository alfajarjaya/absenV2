import json
# # from config import password_kelas11 as pk11        
# import os

# def changePassword(kelas, newPassword):
#     base_path = 'config/'
    
#     if kelas == 'kelas 10':
#         file_path = os.path.join(base_path, 'password_kelas10.json')
#         try:
#             with open(file_path, 'w') as pass_10:
#                 json.dump({'data': {'kelas 10': newPassword}}, pass_10)
#         except Exception as e:
#             return {'error': str(e)}
#     elif kelas == 'kelas 11':
#         file_path = os.path.join(base_path, 'password_kelas11.json')
#         try:
#             with open(file_path, 'w') as pass_11:
#                 json.dump({'data': {'kelas 11': newPassword}}, pass_11)
#         except Exception as e:
#             return {'error': str(e)}
  
#     return None

# # def showPassword(password):
# #     with open('config/password_kelas10.json', 'r') as pass_10:
# #         dataPassword_10 = json.load(pass_10)
        
# #     if password == dataPassword_10['data']['kelas 10']:
# #         return 'kelas 10'
# #     elif password == pk11.data['kelas 11']:
# #         return 'kelas 11'
# #     else:
# #         return False
      
with open('config/name.json', 'r') as n:
  nama = json.load(n) 
  
# changePassword('kelas 11', '111')

from config.models import Password

def showPassword(input_password):
    password_record = Password.query.filter_by(password=input_password).first()
    if password_record:
        return password_record.kelas
    return None