//Global Variables
var newNum = 0;
var cNum = 0;
var opertaion;

//Print #1
var box1 = document.getElementById("button1");

function resultPrint1 () {
  showbox.innerHTML += "1";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box1.addEventListener('click', resultPrint1 );

//Print #2
var box2 = document.getElementById("button2");
function resultPrint2 () {
  showbox.innerHTML += "2";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box2.addEventListener('click', resultPrint2 );

//Print #3
var box3 = document.getElementById("button3");

function resultPrint3 () {
  showbox.innerHTML += "3";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box3.addEventListener('click', resultPrint3 );

//Print #4
var box4 = document.getElementById("button4");

function resultPrint4 () {
  showbox.innerHTML += "4";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box4.addEventListener('click', resultPrint4 );

//Print #5
var box5 = document.getElementById("button5");

function resultPrint5 () {
  showbox.innerHTML += "5";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box5.addEventListener('click', resultPrint5 );

//Print #6
var box6 = document.getElementById("button6");

function resultPrint6 () {
  showbox.innerHTML += "6";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box6.addEventListener('click', resultPrint6 );

//Print #7
var box7 = document.getElementById("button7");

function resultPrint7 () {
  showbox.innerHTML += "7";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box7.addEventListener('click', resultPrint7 );

//Print #8
var box8 = document.getElementById("button8");

function resultPrint8 () {
  showbox.innerHTML += "8";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box8.addEventListener('click', resultPrint8 );

//Print #9
var box9 = document.getElementById("button9");

function resultPrint9 () {
  showbox.innerHTML += "9";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

box9.addEventListener('click', resultPrint9 );

//Print #0
var boxzero = document.getElementById("buttonzero");

function resultPrintZero () {
  showbox.innerHTML += "0";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

boxzero.addEventListener('click', resultPrintZero );

//Print #.
var boxdot = document.getElementById("buttondot");

function resultPrintdot () {
  showbox.innerHTML += ".";
  console.log(showbox.innerHTML);
  return cNum = Number(showbox.innerHTML);
}

boxdot.addEventListener('click', resultPrintdot );

//Print #+
var boxplus = document.getElementById("buttonplus");

function resultPrintPlus() {
  showbox.innerHTML += "+";
  newNum = Number(cNum);
  cNum = showbox.innerHTML;
  console.log(showbox.innerHTML);
}

boxplus.addEventListener('click', resultPrintPlus );

//Print #-
var boxsub = document.getElementById("buttonsub");

function resultPrintSub () {
  showbox.value += "-";
}

boxsub.addEventListener('click', resultPrintSub );

//Print #x
var boxdivide = document.getElementById("buttondivide");

function resultPrintDivide () {
  showbox.value += "/";
}

boxdivide.addEventListener('click', resultPrintDivide );

var boxmult = document.getElementById("buttonx");

function resultPrintMult () {
  showbox.value += "X";
}

boxmult.addEventListener('click', resultPrintMult );

//Options
var boxclear = document.getElementById("buttonC");
var resultbox = document.getElementById("result-view");

//Print #=
var boxequal = document.getElementById("buttonequal");

function resultPrintEqual () {
 showbox.value =  Number(box1.innerHTML) + Number(box2.innerHTML);

}

boxequal.addEventListener('click', resultPrintEqual );
