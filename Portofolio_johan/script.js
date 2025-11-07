function toggleMenu () {
    var x = document.getElementById("navLinks");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
        } else {
            x.classList.add("responsive");
    }
}
