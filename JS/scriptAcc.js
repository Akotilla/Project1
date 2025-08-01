//import page 2
import { page2 } from "./scriptModal.js";

// intialisation
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

// afficher valeur titre
function h1(data) {
    let h1s = document.querySelectorAll("h1");
    h1s[0].textContent = "Promo: " + data.nomPromotion;
    h1s[1].textContent = "Promo: " + data.nomPromotion;
}

function afficher(data) {
    const promotion = data.apprenants;
    template(promotion);
    h1(data);
}

// mise en place des données
function template(promotion) {
    console.log(promotion[0]);
    const tableau = document.getElementById("contenuConditionnel");
    const container = document.getElementById("table");
    const cartes = document.getElementById("box");

    promotion.forEach((item) => {
        const clone = tableau.content.cloneNode(true);
        const tds = clone.querySelectorAll("td");
        tds[0].textContent = item.nom;
        tds[1].textContent = item.prenom;
        tds[2].textContent = item.ville;
        tds[3].innerHTML =
            " <div><button data-id='" +
            (item.id - 1) +
            "' class='details'>Détail</button></div>";

        container.appendChild(clone);
    });

    // peut être remplacé par un template.
    promotion.forEach((element) => {
        cartes.insertAdjacentHTML(
            "beforeend",
            "<div class='boxCartes'><p>" +
                element.nom +
                "</p><p>" +
                element.prenom +
                "</p><div><button data-id='" +
                (element.id - 1) +
                "' class='details'>Détail</button></div>"
        );
    });
    // lien vers code modal
    page2(promotion);
}

// vérifier les préférences
function check() {
    if (localStorage.getItem("affichage")) {
        const affichage = localStorage.getItem("affichage");
        if (affichage === "liste") {
            document.getElementById("liste").checked = true;
            document.getElementById("cartes").checked = false;
            document.getElementById("boxCartes").classList.add("hide");
        } else {
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
