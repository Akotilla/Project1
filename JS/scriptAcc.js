// lecture du JSON
var promotion;

function promo() {
    fetch("JS/promo.json")
        .then((response) => response.json())
        .then((data) => afficher(data));
}

function afficher(data) {
    console.log(data);
    promotion = data.apprenants;
    console.log(promotion);
    template();
}

promo();

// mise en place des données
function template() {
    console.log(promotion[0]);
    let tableau = document.getElementById("template");

    promotion.forEach((element) => {
        tableau.insertAdjacentHTML(
            "beforeend",
            "<tr><td>" +
                element.nom +
                "</td><td>" +
                element.prenom +
                "</td><td>" +
                element.ville +
                "</td><td><a href=''>details</a></td></tr>"
        );
    });
}
