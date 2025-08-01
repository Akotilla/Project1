export function page2(promotion) {
    let detailsButton = document.querySelectorAll(".details");
    const favDialog = document.getElementById("favDialog");
    const outputBox = document.querySelector("output");

    // Le bouton "Mettre à jour les détails" ouvre <dialog> en modal

    detailsButton.forEach(function (element) {
        element.addEventListener("click", function () {
            templateDetail(element, promotion);
        });
    });

    function templateDetail(element, promotion) {
        if (typeof favDialog.showModal === "function") {
            const valueId = element.getAttribute("data-id");
            console.log(promotion[valueId]);
            promotion = promotion[valueId];
            const template = document.querySelector("#construction");
            const modal = document.querySelector("#dialog");

            const oldContent = modal.querySelector("#detailContent");
            if (oldContent) oldContent.remove();

            const clone = document.importNode(template.content, true);
            clone.firstElementChild.id = "detailContent";
            const img = clone.querySelectorAll("img");
            if (promotion.avatar) {
                img[0].setAttribute("src", promotion.avatar);
                img[0].setAttribute("alt", "photo de " + promotion.nom);
            }

            const ps = clone.querySelectorAll("p");
            ps[3].textContent = promotion.nom;
            ps[4].textContent = promotion.prenom;
            ps[5].textContent = promotion.ville;
            ps[7].textContent = promotion.anecdotes;

            modal.insertBefore(clone, modal.querySelector("menu"));

            favDialog.showModal();
        } else {
            outputBox.value =
                "Désolé, l'API <dialog> n'est pas prise en charge par ce navigateur.";
        }
    }
}
