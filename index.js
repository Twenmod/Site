var elem = document.getElementById("rick");

function setFullscreen() {
    if (elem !== null)
        elem.requestFullscreen();
}
function fullFullscreen() {
    document.documentElement.requestFullscreen()

}

//setInterval(setFullscreen, 100);
//setInterval(fullFullscreen, 100);

function annoyance() {
    document.moveTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
}

setInterval(annoyance, 50);

/*
function popup(url) {
    for (var I = 0; I < 5; I++) {
      var i = Math.random();
      newwindow = window.open(url, i, 'height=170,width=800');
      if (window.focus) { newwindow.focus() }
      setInterval(annoyance, 50, newwindow);
  
  
    }
    return false;
  }
  popup("https://twenmod.github.io/Site/");
*/