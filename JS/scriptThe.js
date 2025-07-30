if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
    console.log(theme);
    console.log(theme == "light");
    console.log(theme == "dark");
    if (theme === "light") {
        document.body.setAttribute("id", "light");
    } else if (theme === "dark") {
        document.body.setAttribute("id", "dark");
    }
}
