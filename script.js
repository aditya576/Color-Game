var colors=[];
var numberofcolors=2;
var colorselected;
var result=document.getElementById("result");
var colorshow=document.getElementById("colorgenerator");
var modebuttons=document.querySelectorAll(".mode");
var container=document.querySelector(".container");
var resetbutton=document.querySelector("#reset");
var squares=document.querySelectorAll(".square");
var body=document.querySelector("body");

init();

function init(){
    setUpModebuttons();
    setupsquares();
    reset();
}

function setupsquares(){
  for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",function(){
      var clickedcolor=this.style.backgroundColor;
      if(clickedcolor==colorselected){
        result.textContent="Correct!";
        changeColors(clickedcolor);
        result.style.backgroundColor="#ffffff";
        result.style.fontSize="24px";
        body.style.backgroundColor=clickedcolor;
        resetbutton.textContent="Play Again?";
      }
      else{
        result.textContent="Try again!";
        this.style.backgroundColor="black";
      }
    });
  }
}

function setUpModebuttons(){
  for(var i=0;i<modebuttons.length;i++){
    modebuttons[i].addEventListener("click",function(){
      for(var j=0;j<modebuttons.length;j++){
        modebuttons[j].classList.remove("selected");
      }
      resetbutton.textContent="CHANGE COLORS?";

      colorshow.textContent=colorselected;
      this.classList.add("selected");
      if(this.textContent=="EASY"){
        numberofcolors=2;
        for(var k=0;k<squares.length;k++){
          squares[k].classList.remove("square-medium");
          squares[k].classList.remove("square-hard");
          squares[k].classList.remove("square-ultra");
          squares[k].classList.add("square-easy");
        }
      }
      else if(this.textContent=="MEDIUM"){
        numberofcolors=4;
        for(var k=0;k<squares.length;k++){
          squares[k].classList.add("square-medium");
          squares[k].classList.remove("square-hard");
          squares[k].classList.remove("square-ultra");
          squares[k].classList.remove("square-easy");
        }
      }
      else if(this.textContent=="HARD"){
        numberofcolors=8;
        for(var k=0;k<squares.length;k++){
          squares[k].classList.remove("square-medium");
          squares[k].classList.add("square-hard");
          squares[k].classList.remove("square-ultra");
          squares[k].classList.remove("square-easy");
        }
      }
      else{
        numberofcolors=16;
        for(var k=0;k<squares.length;k++){
          squares[k].classList.remove("square-medium");
          squares[k].classList.remove("square-hard");
          squares[k].classList.add("square-ultra");
          squares[k].classList.remove("square-easy");
        }
      }
      reset();
    });
  }
}
function reset(){
  colors=generateRandomColors(numberofcolors);
  colorselected=selectColor();
  result.textContent="";
  for(var i=0;i<squares.length;i++){
      if(colors[i]){
        squares[i].textContent="";
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
      }
      else{
        squares[i].style.display="none";
      }
  }
  if(resetbutton.textContent==="Play Again?"){
    resetbutton.textContent="CHANGE COLORS?";
  }
  body.style.backgroundColor="#c0dffe";
}
resetbutton.addEventListener("click",function(){
  reset();
})

function selectColor(){
  var random=Math.floor(Math.random()*numberofcolors);
  return colors[random];
}

function generateRandomColors(n){
  var arr=[];
  for(var i=0;i<n;i++){
    arr.push(randomcolor());
  }
  return arr;
}

function changeColors(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
}

function randomcolor(){
  var red=Math.floor(Math.random()*256);
  var blue=Math.floor(Math.random()*256);
  var green=Math.floor(Math.random()*256);
  var x="rgb("+red+", "+green+", "+blue+")";
  return x;
}
