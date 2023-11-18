var pic1 = new Image();
var pic2 = new Image();
var pic3 = new Image();
var pic4 = new Image();
var pic5 = new Image();
var pic6 = new Image();
var pic7 = new Image();
var pic8 = new Image();

var imgArray = new Array();
imgArray[0] = "./assets/img/slot/Q.png";
imgArray[1] = "./assets/img/slot/9.png";
imgArray[2] = "./assets/img/slot/10.png";
imgArray[3] = "./assets/img/slot/A.png";
imgArray[4] = "./assets/img/slot/D.png";
imgArray[5] = "./assets/img/slot/J.png";
imgArray[6] = "./assets/img/slot/K.png";
imgArray[7] = "./assets/img/slot/O.png";
imgArray[8] = "./assets/img/slot/Q.png";
imgArray[9] = "./assets/img/slot/9.png";

var audio = new Audio('./assets/sound/slot_machine.mp3');
function playSound() {
  audio.play();
}
function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
var game_over = new Audio('./assets/sound/game_over.mp3');
function playSoundGameOver() {
  game_over.play();
}
var you_win = new Audio('./assets/sound/you_win.mp3');
function playSoundYouWin() {
  you_win.play();
}
function Refresh() {

  clearInterval(slot1);
  clearInterval(slot2);
  clearInterval(slot3);
  clearInterval(slot4);

  document.getElementById("legenda").style.display = 'none';
  document.getElementById("loser").style.display = 'none';
  document.getElementById("Slot+1").innerHTML = '<img src="' + imgArray[0] + '">';
  document.getElementById("Slot+2").innerHTML = '<img src="' + imgArray[1] + '">';
  document.getElementById("Slot+3").innerHTML = '<img src="' + imgArray[2] + '">';
  document.getElementById("Slot+4").innerHTML = '<img src="' + imgArray[3] + '">';

  document.getElementById("Slot1").innerHTML = '<img src="' + imgArray[4] + '">';
  document.getElementById("Slot2").innerHTML = '<img src="' + imgArray[5] + '">';
  document.getElementById("Slot3").innerHTML = '<img src="' + imgArray[6] + '">';
  document.getElementById("Slot4").innerHTML = '<img src="' + imgArray[7] + '">';

  document.getElementById("Slot-1").innerHTML = '<img src="' + imgArray[3] + '">';
  document.getElementById("Slot-2").innerHTML = '<img src="' + imgArray[2] + '">';
  document.getElementById("Slot-3").innerHTML = '<img src="' + imgArray[1] + '">';
  document.getElementById("Slot-4").innerHTML = '<img src="' + imgArray[0] + '">';
}


function Play() {

  var attempts = numberAttempts(4, 20);
  document.getElementById("Highlight").style.display = 'none';
  document.getElementById("loser").style.display = 'none';
  document.getElementById("legenda").style.display = 'none';
  var t1 = 0;
  slot1 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+1").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot1").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-1").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    //console.log(imgArray[Randomnumber]);
  }, 40);

  var t2 = 0, t3 = 0, t4 = 0;

  slot2 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+2").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot2").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-2").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    //console.log(imgArray[Randomnumber]);
  }, 130);

  slot3 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+3").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot3").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-3").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    //console.log(imgArray[Randomnumber]);
  }, 50);

  slot4 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+4").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot4").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-4").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    //console.log(imgArray[Randomnumber]);
  }, 90);
}


function generateRandom(max) {
  return Math.floor((Math.random() * max) + 1);
}

function numberAttempts(min, max) {
  const maxNumber = Math.pow(10, 1000);
  return Math.floor((Math.random() * (max - min + maxNumber)) + min);
}


document.getElementById("stop").onclick = function () { Stop() };

function zmaga() {
  document.getElementById("legenda").style.display = 'block';
}
function poraz() {
  document.getElementById("loser").style.display = 'block';
}

function Stop() {
  var slot11 = document.getElementById("Slot1").innerHTML;
  var slot22 = document.getElementById("Slot2").innerHTML;
  var slot33 = document.getElementById("Slot3").innerHTML;
  var slot44 = document.getElementById("Slot4").innerHTML;

  setTimeout(function () { clearInterval(slot1); }, 0);
  setTimeout(function () { clearInterval(slot2); }, 1000);
  setTimeout(function () { clearInterval(slot3); }, 1500);
  setTimeout(function () { clearInterval(slot4); }, 3000);

  setTimeout(function () { stopSound(); }, 3100);

  if (slot11 == slot22 && slot22 == slot33 && slot33 == slot44) {
    document.getElementById("Highlight").style.display = 'block';
    ///document.getElementById("legenda").style.display = 'block';
    setTimeout(function () {
      toastr.success('¡Ganaste!', {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-full-width",
        preventDuplicates: true,
        newestOnTop: false,
        showDuration: "500",
        hideDuration: "1000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
        onclick: null,
        iconClass: '',
        style: {
          color: 'black',
          'background-color': '#f0f0f0'
        }
      });
    }, 3200);
    setTimeout(function () { you_win(); }, 3200);
  }
  else {
    document.getElementById("Highlight").style.display = 'block';
    //document.getElementById("loser").style.display = 'block';
    setTimeout(function () {
      toastr.error('Perdiste. Inténtalo de nuevo.', '', {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-full-width",
        preventDuplicates: true,
        newestOnTop: false,
        showDuration: "500",
        hideDuration: "1000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
        onclick: null,
        iconClass: '',
        style: {
          color: 'black',
          'background-color': '#f0f0f0'
        }
      });
    }, 3200);
    setTimeout(function () { playSoundGameOver(); }, 3200);
  }

}