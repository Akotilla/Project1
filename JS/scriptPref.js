//intialisation
function init() {
    check();
    document
        .getElementById("enregistrer")
        .addEventListener("click", function (event) {
            get();
        });
}

//vérifier les valeurs localStorage
function check() {
    if (localStorage.getItem("affichage")) {
        const affichage = localStorage.getItem("affichage");
        if (affichage === "cartes") {
            document.getElementById("cartes").checked = true;
            document.getElementById("liste").checked = false;
        } else {
            document.getElementById("liste").checked = true;
            document.getElementById("cartes").checked = false;
        }
    }
    if (localStorage.getItem("theme")) {
        const theme = localStorage.getItem("theme");
        document.getElementById("theme").value = theme;
    }
}

// récupérer les valeurs au clic
function get() {
    let affichage;
    const liste = document.getElementById("liste").checked;
    const cartes = document.getElementById("cartes").checked;
    const theme = document.getElementById("theme").value;
    if (liste) {
        affichage = "liste";
    } else {
        affichage = "cartes";
    }
    store(affichage, theme);
}

// stocker les valeurs localStorage
function store(affichage, theme) {
    localStorage.setItem("affichage", affichage);
    localStorage.setItem("theme", theme);
}

init();

// lecture du JSON

function lecture() {
    fetch("JS/promo.json")
        .then((response) => response.json())
        .then((data) => h1(data));
}

// afficher valeur titre
function h1(data) {
    let h1s = document.querySelectorAll("h1");
    h1s[0].textContent = "Promo: " + data.nomPromotion;
    h1s[1].textContent = "Promo: " + data.nomPromotion;
}

lecture();
