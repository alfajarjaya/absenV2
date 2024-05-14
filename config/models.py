# config/models.py
from flask_sqlalchemy import SQLAlchemy
import os

# Initialize the database connection
db = SQLAlchemy()

# Define the Password model
class Password(db.Model):
    __tablename__ = 'passwords'
    kelas = db.Column(db.String, primary_key=True)
    password = db.Column(db.String, nullable=False)

def init_db(app):
    # Configure the database URI
    DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://default:j18qUfXIDsHW@ep-shiny-base-a1nyl510-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require')
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    with app.app_context():
        db.create_all()
