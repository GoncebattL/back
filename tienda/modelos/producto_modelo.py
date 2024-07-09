from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship


from app import app, db          


# tablas
class Producto(db.Model):   
    id=db.Column(db.Integer, primary_key=True)   
    nombre=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    stock=db.Column(db.Integer)
    descripcion= db.Column(db.String(400))
    imagen=db.Column(db.String(400))
    def __init__(self,nombre,precio,stock,descripcion,imagen):   
        self.nombre=nombre   
        self.precio=precio
        self.stock=stock
        self.descripcion=descripcion
        self.imagen=imagen


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************


