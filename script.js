function selectMode(mode) {
    var color = "ghostWhite";
    var image = "/img/light-mode.png";
    var label = "Light Mode";

    if (mode === "dark") {
        color = "rgb(123, 32, 188)";
        image = "/image/dark-mode.png";
        label = "Dark Mode";
    } else if (mode === "light") {
        color = "ghostWhite";
        image = "/image/light-mode.png";
        label = "Light Mode";
    } else {
        color = "rgb(182, 39, 39)";
        image = "/image/ninja-mode.png";
        label = "Ninja Mode";
    }

    console.log(label);

    document.getElementById("icon").src = image;
    document.getElementById("theme").style.backgroundColor = color;

    document.getElementById("label").innerHTML = label;

}