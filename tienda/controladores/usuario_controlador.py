from flask import  jsonify,request  
from app import app, db,ma
#from modelos.usuario_modelo import *
from usuarios_modelo import Usuario

class UsuarioSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','apellido','correo','usuario','clave','rol')
usuario_schema=UsuarioSchema()            
usuarios_schema=UsuarioSchema(many=True)  


# rutas (json)
@app.route('/usuarios',methods=['GET'])
def get_Usuarios():
    all_usuarios=Usuario.query.all()         
    result=usuarios_schema.dump(all_usuarios)  
                                               
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla

@app.route('/usuarios/<id>',methods=['GET'])
def get_id(id):
    usuario=Usuario.query.get(id)
    return usuario_schema.jsonify(usuario)   # retorna el JSON de un usuario recibido como parametro

@app.route('/usuarios/<id>',methods=['DELETE'])
def delete_usuario(id):
    usuario=Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(usuario)   # me devuelve un json con el registro eliminado

@app.route('/usuarios', methods=['POST']) 
def create_usuario():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    correo=request.json['correo']
    usuario=request.json['usuario']
    clave=request.json['clave']
    rol=request.json['rol']
    new_usuario=Usuario(nombre,apellido,usuario,correo,clave,rol)
    db.session.add(new_usuario)
    db.session.commit()
    return usuario_schema.jsonify(new_usuario)


@app.route('/usuarios/<id>' ,methods=['PUT'])
def update_usuario(id):
    usuario=Usuario.query.get(id)
    usuario.usuario=request.json['usuario']
    usuario.clave=request.json['clave']
    db.session.commit()
    return usuario_schema.jsonify(usuario)


#------------------
