var elem = document.getElementById("rick");

function setFullscreen() {
    elem.requestFullscreen();
}

setInterval(setFullscreen, 1000);