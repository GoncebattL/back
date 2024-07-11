const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://huellitas.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
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
        login() {
            console.log("Intentando iniciar sesión...");
            console.log("Usuario:", this.usuario);
            console.log("Clave:", this.clave);

            const usuarioEncontrado = this.usuarios.find(user => user.usuario === this.usuario);
            sessionStorage.setItem("adm", 2);
            if (usuarioEncontrado) {
                if (usuarioEncontrado.clave === this.clave) {
                    document.querySelector("#logout").setAttribute('style', 'display:contents');
                    if (usuarioEncontrado.rol === 1) {
                        sessionStorage.setItem("adm", 1);
                        window.location.href = "/html/productos.html";
                    } else {
                        sessionStorage.setItem("adm", 0);
                        window.location.href = "/index.html";
                    }
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
