// theme sombre/clair
if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.setAttribute("id", "light");
    } else {
        document.body.setAttribute("id", "dark");
    }
}

//afficher menu/burgermenu/responsive
function myFunction() {
    console.log(document.querySelector(".myLinks"));
    var x = document.querySelector(".myLinks");
    if (x.style.visibility === "hidden" || x.style.visibility === "") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}
