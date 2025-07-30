var map = L.map("map").setView([46.860191, 2.592773], 6);
var promotion;

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
    console.log(data);
    promotion = data.apprenants;
    console.log(promotion);
    mapMarker();
}
function mapMarker() {
    console.log(promotion[0].coordonnees);

    promotion.forEach((element) => {
        let lat = parseFloat(element.coordonnees.latitude);
        let lng = parseFloat(element.coordonnees.longitude);
        console.log("Nom:", element.nom, "Lat:", lat, "Lng:", lng);
        // Exemple pour ajouter un marker sur la carte :
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(
                element.nom + " " + element.prenom + "<br>" + element.ville
            );
    });
}

promo();
