from app import app, db   #,ma

# tablas
class Usuario(db.Model):    
    id=db.Column(db.Integer, primary_key=True)  
    usuario=db.Column(db.String(100))
    clave=db.Column(db.String(10))
    rol=db.Column(db.Integer)
   
    def __init__(self,usuario,clave,rol):   
        self.usuario=usuario  
        self.claveo=clave
        self.rol=rol
        

with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
