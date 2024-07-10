document.addEventListener("DOMContentLoaded", function () {
    fetch('/html/header.html')
        .then(response => response.text())
        .then(data => {
            const header = document.createElement('div');
            header.className="header";
            header.innerHTML = data;
            document.body.insertAdjacentElement('afterbegin', header);
        })

    fetch('/html/footer.html')
        .then(response => response.text())
        .then(data => {
            const footer = document.createElement('div');
            footer.className="footer";
            footer.innerHTML = data;
            document.body.insertAdjacentElement('beforeend', footer);
        })
});