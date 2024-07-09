from app import app, db   #,ma

# Definición de modelos
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    apellido = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(100), nullable=False)
    usuario = db.Column(db.String(50), unique=True, nullable=False)
    clave = db.Column(db.String(255), nullable=False)
    rol = db.Column(db.Integer, nullable=False)
    
# tablas

    def __init__(self,nombre,apellido,correo,usuario,clave,rol):   
        self.nombre=nombre
        self.apellido=apellido
        self.correo=correo
        self.usuario=usuario  
        self.clave=clave
        self.rol=rol
        

with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************




