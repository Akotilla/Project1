// affichage map
const map = L.map("map").setView([46.860191, 2.592773], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//lecture info JSON
function promo() {
    fetch("JS/promo.json")
        .then((response) => response.json())
        .then((data) => afficher(data));
}

//data + lancement des fonctions
function afficher(data) {
    const promotion = data.apprenants;
    console.log(data.apprenants);
    mapMarker(promotion);
    h1(data);
}

//affichage dot sur map
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

// afficher valeur titre
function h1(data) {
    let h1s = document.querySelectorAll("h1");
    h1s[0].textContent = "Promo: " + data.nomPromotion;
    h1s[1].textContent = "Promo: " + data.nomPromotion;
}

// execution
promo();
