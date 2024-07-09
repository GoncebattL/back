from flask import Flask ,render_template, request, redirect, session, flash, url_for
#,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.exceptions import HTTPException


app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend


# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/tienda'
# URI de la BBDD                          driver de la BD  user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none


db= SQLAlchemy(app)   #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app)   #crea el objeto ma de de la clase Marshmallow



@app.route('/bienvenida')
def bienvenida():
    return "Bienvenido a la página de bienvenida"

@app.errorhandler(HTTPException)
def handle_exception(e):
    return render_template("error.html", error=e), e.code

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Ejecuta el servidor Flask en el puerto 5000

from controladores.producto_controlador import *
from controladores.usuario_controlador import *



# # programa principal *******************************
# @app.route('/')
# def bienvenida():
#     return render_template('index.html')
# if __name__=='__main__':  
#     app.run(debug=True, port=5000)    # ejecuta el servidor Flask en el puerto 5000

