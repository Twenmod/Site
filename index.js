var elem = document.getElementById("rick");

function setFullscreen() {
    if (elem !== null)
        elem.requestFullscreen();
    document.documentElement.requestFullscreen()
}

setInterval(setFullscreen, 100);