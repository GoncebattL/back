document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const header = document.createElement('div');
            header.className = "header";
            header.innerHTML = data;
            document.body.insertAdjacentElement('afterbegin', header);

            const navbarToggle = document.getElementById('navbarToggle');
            const navbarMenu = document.getElementById('navbarMenu');

            navbarToggle.addEventListener('click', function () {
                navbarMenu.classList.toggle('active');
            });
        })

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footer = document.createElement('div');
            footer.className = "footer";
            footer.innerHTML = data;
            document.body.insertAdjacentElement('beforeend', footer);

            function initMap() {
                var map = L.map('map').setView([-34, -60.64694], 17);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                var marker = L.marker([-32.96094, -60.64694]).addTo(map)
                    .bindPopup('Ubicación de nuestro local')
                    .openPopup();

                map.setView(marker.getLatLng());
            }
            initMap();
        })

});
