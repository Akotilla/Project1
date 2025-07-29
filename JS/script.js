document.getElementById("enregistrer").addEventListener("click", store);

function store() {
    storage.local.set();
}
