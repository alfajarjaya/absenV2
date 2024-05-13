from flask import (
    Flask, render_template, request, url_for, redirect
)

from config import config_json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/kelas-10')
def menu_kelas_10():
    return render_template('kelas-10/menu.html')

@app.route('/Login', methods=['POST', 'GET'])
def confirmPassword():
    if request.method == 'POST':
        password = request.form.get('password')
        result = config_json.PasswordManager.showPassword(password)
        
        if result == 'kelas 10':
            return redirect(url_for('absen_kelas_10'))
        if result == 'kelas 11':
            return redirect(url_for('index'))
        return render_template('pw.html', e='Kata sandi salah !')
    
    return render_template('pw.html')

@app.route('/absen-hadir')
def absen_kelas_10():
    print(config_json.nama['kelas'])
    return render_template('kelas-10/absen.html', name=config_json.nama['nama'], kelas=config_json.nama['kelas'])

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        debug=True
    )