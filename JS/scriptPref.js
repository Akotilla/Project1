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
