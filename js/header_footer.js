document.addEventListener("DOMContentLoaded", function () {
    fetch('/html/header.html')
        .then(response => response.text())
        .then(data => {
            const header = document.createElement('div');
            header.className = "header";
            header.innerHTML = data;
            document.body.insertAdjacentElement('afterbegin', header);

            if (sessionStorage.getItem("adm") != "1") {
                document.querySelector("#crud").setAttribute('style', 'display:none');
            } else {
                document.querySelector("#crud").setAttribute('style', 'display:contents');
            }
        
            document.getElementById('logout').addEventListener('click', () => {
                sessionStorage.removeItem("adm");
                document.querySelector("#logout").setAttribute('style', 'display:none');
                window.location.href = "/index.html";
            })
        })

    fetch('/html/footer.html')
        .then(response => response.text())
        .then(data => {
            const footer = document.createElement('div');
            footer.className = "footer";
            footer.innerHTML = data;
            document.body.insertAdjacentElement('beforeend', footer);
        })
});

