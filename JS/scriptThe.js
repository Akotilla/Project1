if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.setAttribute("id", "light");
    } else {
        document.body.setAttribute("id", "dark");
    }
}
