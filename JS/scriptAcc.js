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

function afficher(data) {
    const promotion = data.apprenants;
    template(promotion);
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
        tds[3].innerHTML = "<a href='' >Detail</a>";
        container.appendChild(clone);
    });

    // promotion.forEach((element) => {
    //     tableau.insertAdjacentHTML(
    //         "beforeend",
    //         "<tr><td>" +
    //             element.nom +
    //             "</td><td>" +
    //             element.prenom +
    //             "</td><td>" +
    //             element.ville +
    //             "</td><td><a href=''>Detail</a></td></tr>"
    //     );
    // });
    promotion.forEach((element) => {
        cartes.insertAdjacentHTML(
            "beforeend",
            "<div class='boxCartes'><p>" +
                element.nom +
                "</p><p>" +
                element.prenom +
                "</p><p><a href=''>Detail</a></p></div>"
        );
    });
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
