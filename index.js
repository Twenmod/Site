var elem = document.getElementById("rick");

function setFullscreen() {
    if (elem !== null)
        elem.requestFullscreen();
}

setInterval(setFullscreen, 1000);