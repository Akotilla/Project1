if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.setAttribute("id", "light");
    } else {
        document.body.setAttribute("id", "dark");
    }
}

function myFunction() {
    console.log(document.querySelector(".myLinks"));
    var x = document.querySelector(".myLinks");
    if (x.style.visibility === "hidden" || x.style.visibility === "") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}

function lecture() {
    fetch("JS/promo.json")
        .then((response) => response.json())
        .then((data) => afficher(data));
}

function afficher(data) {
    document.querySelector("h1").textContent = "Promo: " + data.nomPromotion;
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
