const map = L.map("map").setView([46.860191, 2.592773], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function promo() {
    fetch("JS/promo.json")
        .then((response) => response.json())
        .then((data) => afficher(data));
}

function afficher(data) {
    const promotion = data.apprenants;
    mapMarker(promotion);
}
function mapMarker(promotion) {
    promotion.forEach((element) => {
        let lat = parseFloat(element.coordonnees.latitude);
        let lng = parseFloat(element.coordonnees.longitude);

        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(
                element.nom + " " + element.prenom + "<br>" + element.ville
            );
    });
}

promo();
