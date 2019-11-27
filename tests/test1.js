var remainsCounter = 0;
var bedroomCounter = 0;
var beverageCounter = 0;
var rockCounter = 0;

function changeToRemains(){
place = remainsCounter % 3;
switch (place) {
  case 0:
  document.getElementById('image').src = "remains0.jpg";
  break;
  case 1:
  document.getElementById('image').src = "remains1.jpg";
  break;
  case 2:
  document.getElementById('image').src = "remains2.JPG";
  break;
}
remainsCounter++;
}
function changeToBedroom(){
  place = bedroomCounter % 3;
  switch (place) {
    case 0:
    document.getElementById('image').src = "bedroom0.jpg";
    break;
    case 1:
    document.getElementById('image').src = "bedroom1.jpg";
    break;
    case 2:
    document.getElementById('image').src = "bedroom2.JPG";
    break;
  }
bedroomCounter++;
}
function changeToBeverage(){
  place = beverageCounter % 3;
  switch (place) {
    case 0:
    document.getElementById('image').src = "beverage0.jpg";
    break;
    case 1:
    document.getElementById('image').src = "beverage1.jpg";
    break;
    case 2:
    document.getElementById('image').src = "beverage2.JPG";
    break;
  }
beverageCounter++;
}
function changeToRock(){
  place = rockCounter % 3;
  switch (place) {
    case 0:
    document.getElementById('image').src = "rock0.jpg";
    break;
    case 1:
    document.getElementById('image').src = "rock1.jpg";
    break;
    case 2:
    document.getElementById('image').src = "rock2.JPG";
    break;
  }
rockCounter++;
}
function changeToNothing(){
  document.getElementById('image').src = "";

}
function animate(element, image){

}
