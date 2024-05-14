# config/connectDB.py
from config.models import db, Password

def changePassword(kelas, newPassword):
    try:
        password_record = Password.query.filter_by(kelas=kelas).first()
        if password_record:
            password_record.password = newPassword
        else:
            new_password = Password(kelas=kelas, password=newPassword)
            db.session.add(new_password)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print(f"An error occurred: {e}")
        return {'error': str(e)}
    return None
