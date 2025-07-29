// intialisation
var promotion;
var affichage;

function init() {
    check();
    promo();
    document.getElementById("liste").addEventListener("click", hideC);
    document.getElementById("cartes").addEventListener("click", hideT);
}
// lecture du JSON

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

// vérifier les préférences
function check() {
    if (localStorage.getItem("affichage")) {
        affichage = localStorage.getItem("affichage");
        if (affichage === "liste") {
            document.getElementById("liste").checked = true;
            document.getElementById("cartes").checked = false;
            document.getElementById("boxCartes").classList.add("hide");
        } else if (affichage === "cartes") {
            document.getElementById("cartes").checked = true;
            document.getElementById("liste").checked = false;
            document.getElementById("tableau").classList.add("hide");
        }
    }
}

// cacher tableau
function hideT() {
    document.getElementById("tableau").classList.add("hide");
    document.getElementById("boxCartes").classList.remove("hide");
}
//cacher cartes
function hideC() {
    document.getElementById("boxCartes").classList.add("hide");
    document.getElementById("tableau").classList.remove("hide");
}

// start
init();
