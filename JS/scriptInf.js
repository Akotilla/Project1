// lecture JSON
function lecture() {
    fetch("JS/promo.json")
        .then((response) => response.json())
        .then((data) => afficher(data));
}

// afficher informations
function afficher(data) {
    let h1s = document.querySelectorAll("h1");
    h1s[0].textContent = "Promo: " + data.nomPromotion;
    h1s[1].textContent = "Promo: " + data.nomPromotion;

    if (document.querySelector(".dateDebut")) {
        document.querySelector(".dateDebut").textContent = data.dateDebut;
    }
    if (document.querySelector(".dateFin")) {
        document.querySelector(".dateFin").textContent = data.dateFin;
    }
    if (document.querySelector(".nbrApprenant")) {
        document.querySelector(".nbrApprenant").textContent =
            data.nbrApprenants;
    }
    if (document.querySelector(".description")) {
        document.querySelector(".description").textContent = data.description;
    }
}

lecture();
