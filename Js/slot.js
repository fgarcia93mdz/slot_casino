var pic1 = new Image();
var pic2 = new Image();
var pic3 = new Image();
var pic4 = new Image();
var pic5 = new Image();
var pic6 = new Image();
var pic7 = new Image();
var pic8 = new Image();

var imgArray = new Array();
imgArray[0] = "./assets/img/slot/9.png";
imgArray[1] = "./assets/img/slot/9.png";
imgArray[2] = "./assets/img/slot/10.png";
imgArray[3] = "./assets/img/slot/A.png";
imgArray[4] = "./assets/img/slot/D.png";
imgArray[5] = "./assets/img/slot/J.png";
imgArray[6] = "./assets/img/slot/K.png";
imgArray[7] = "./assets/img/slot/O.png";
imgArray[8] = "./assets/img/slot/Q.png";
imgArray[9] = "./assets/img/slot/9.png";

function Refresh() {
  //document.getElementById("stop").innerHTML = clearInterval(slot1), clearInterval(slot2), clearInterval(slot3), clearInterval(slot4);
  clearInterval(slot1);
  clearInterval(slot2);
  clearInterval(slot3);
  clearInterval(slot4);
  document.getElementById("legenda").style.display = 'none';
  document.getElementById("loser").style.display = 'none';
  document.getElementById("Slot+1").innerHTML = '<img src="' + imgArray[0] + '">';
  document.getElementById("Slot+2").innerHTML = '<img src="' + imgArray[0] + '">';
  document.getElementById("Slot+3").innerHTML = '<img src="' + imgArray[0] + '">';
  document.getElementById("Slot+4").innerHTML = '<img src="' + imgArray[0] + '">';

  document.getElementById("Slot1").innerHTML = '<img src="' + imgArray[1] + '">';
  document.getElementById("Slot2").innerHTML = '<img src="' + imgArray[1] + '">';
  document.getElementById("Slot3").innerHTML = '<img src="' + imgArray[1] + '">';
  document.getElementById("Slot4").innerHTML = '<img src="' + imgArray[1] + '">';

  document.getElementById("Slot-1").innerHTML = '<img src="' + imgArray[2] + '">';
  document.getElementById("Slot-2").innerHTML = '<img src="' + imgArray[2] + '">';
  document.getElementById("Slot-3").innerHTML = '<img src="' + imgArray[2] + '">';
  document.getElementById("Slot-4").innerHTML = '<img src="' + imgArray[2] + '">';
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
    console.log(imgArray[Randomnumber]);
  }, 40);

  var t2 = 0, t3 = 0, t4 = 0;

  slot2 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+2").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot2").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-2").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    console.log(imgArray[Randomnumber]);
  }, 130);

  slot3 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+3").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot3").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-3").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    console.log(imgArray[Randomnumber]);
  }, 50);

  slot4 = setInterval(function () {
    Randomnumber = generateRandom(imgArray.length - 2);
    document.getElementById("Slot+4").innerHTML = '<img src="' + imgArray[Randomnumber - 1] + '">';
    document.getElementById("Slot4").innerHTML = '<img src="' + imgArray[Randomnumber] + '">';
    document.getElementById("Slot-4").innerHTML = '<img src="' + imgArray[Randomnumber + 1] + '">';
    console.log(imgArray[Randomnumber]);
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
  // document.getElementById("stop").innerHTML = clearInterval(slot1), clearInterval(slot2), clearInterval(slot3), clearInterval(slot4);
  clearInterval(slot1);
  clearInterval(slot2);
  clearInterval(slot3);
  clearInterval(slot4);


  if (slot11 == slot22 && slot22 == slot33 && slot33 == slot44) {
    document.getElementById("Highlight").style.display = 'block';
    //alert("YOU WON!");
    document.getElementById("legenda").style.display = 'block';
  }
  else {
    document.getElementById("Highlight").style.display = 'none';
    //alert("Better luck next time!");
    document.getElementById("loser").style.display = 'block';
  }

}