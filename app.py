from flask import Flask, render_template, request, url_for, redirect, jsonify
from config import config_json, connectDB
from config.models import init_db, db, Password

app = Flask(__name__)
init_db(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu-absen-kelas-10')
def menu_kelas_10():
    return render_template('kelas-10/menu.html')

@app.route('/Login', methods=['POST', 'GET'])
def confirmPassword():
    if request.method == 'POST':
        password = request.form.get('password')
        result = config_json.showPassword(password)
        if result == 'kelas 10':
            return redirect(url_for('absen_kelas_10'))
        if result == 'kelas 11':
            return redirect(url_for('index'))
        if password == 'pasbraska':
            return redirect(url_for('change_password'))
        return render_template('pw.html', e='Kata sandi salah !')
    
    return render_template('pw.html')

@app.route('/absen-hadir-kelas-10')
def absen_kelas_10():
    return render_template('kelas-10/absen.html', name=config_json.nama['nama'], kelas=config_json.nama['kelas'])

@app.route('/ubah-password', methods=['POST'])
def ubah_password():
    if request.method == 'POST':
        data = request.json
        kelas = data.get('kelas')
        newPw = data.get('newPassword')
        
        if kelas and newPw:
            result = connectDB.changePassword(kelas, newPw)
            if result is None:
                return jsonify({'message': 'Berhasil memperbarui password.'}), 200
            else:
                return jsonify(result), 500
        else:
            return jsonify({'error': 'Data tidak lengkap.'}), 400

@app.route('/change-password')
def change_password():
    return render_template('changePw.html')

@app.route('/jadwal-latihan')
def jadwalLatihan():
    return render_template('jadwal.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
