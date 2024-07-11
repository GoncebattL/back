const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://huellitas.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            // Variables para el formulario de registro
            nombre: "",
            apellido: "",
            correo: "",
            usuario: "",
            clave: ""
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false;
                    console.log(this.usuarios);
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        grabar() {
            console.log("Intentando grabar el usuario...");
            console.log("Nombre:", this.nombre);
            console.log("Apellido:", this.apellido);
            console.log("Correo:", this.correo);
            console.log("Usuario:", this.usuario);
            console.log("Clave:", this.clave);

            let nuevoUsuario = {
                nombre: this.nombre,
                apellido: this.apellido,
                correo: this.correo,
                usuario: this.usuario,
                clave: this.clave,
                rol: 0
            };
            var options = {
                body: JSON.stringify(nuevoUsuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            };
            fetch(this.url, options)
                .then(() => {
                    alert("Registro grabado");
                    window.location.href = "/index.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al grabar");
                });
        },
        login() {
            console.log("Intentando iniciar sesión...");
            console.log("Usuario:", this.usuario);
            console.log("Clave:", this.clave);

            var i = 0;
            while (i < this.usuarios.length && this.usuarios[i].usuario !== this.usuario) {
                i++;
            }
            if (i < this.usuarios.length) {
                if (this.usuarios[i].clave === this.clave) {
                    if (this.usuarios[i].rol === 1) {
                        sessionStorage.setItem("adm", 1);
                    } else {
                        sessionStorage.setItem("adm", 0);
                    }
                    window.location.href = "/html/tienda.html";
                } else {
                    alert('Clave incorrecta');
                }
            } else {
                alert('Usuario incorrecto');
            }
        }
    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app');
