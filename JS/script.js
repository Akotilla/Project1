var theme;
var affichage;

function init() {
    check();
    document
        .getElementById("enregistrer")
        .addEventListener("click", function (event) {
            event.preventDefault();
            get();
        });
}

//vérifier les valeurs localStorage
function check() {
    if (localStorage.getItem("affichage")) {
        affichage = localStorage.getItem("affichage");
        if (affichage === "liste") {
            document.getElementById("liste").checked = true;
        } else if (affichage === "cartes") {
            document.getElementById("cartes").checked = true;
        }
    }
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
        document.getElementById("theme").value = theme;
    }
}

// récupérer les valeurs au clic
function get() {
    let liste = document.getElementById("liste").checked;
    let cartes = document.getElementById("cartes").checked;
    theme = document.getElementById("theme").value;
    console.log(liste);
    if (liste) {
        affichage = "liste";
    }
    if (cartes) {
        affichage = "cartes";
    }
    store();
}

// stocker les valeurs localStorage
function store() {
    localStorage.setItem("affichage", affichage);
    localStorage.setItem("theme", theme);
}

init();
