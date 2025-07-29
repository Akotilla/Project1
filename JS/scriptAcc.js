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
}

promo();

// mise en place des données en template -> liste
