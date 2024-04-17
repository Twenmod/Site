var elem = document.getElementById("rick");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (true) {
    elem.requestFullscreen();
    //Sleep
    await sleep(100);
}