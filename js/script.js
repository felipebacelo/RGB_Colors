let redRange = document.querySelector('#range-red');
let greenRange = document.querySelector('#range-green');
let blueRange = document.querySelector('#range-blue');

let redInput = document.querySelector('#input-red');
let greenInput = document.querySelector('#input-green');
let blueInput = document.querySelector('#input-blue');

let borderColor = document.querySelector('.container');
borderColor.style.borderColor = '#000';
borderColor.style.boxShadow = '0px 0px 80px rgb(0,0,0)';
let bgColor = document.querySelector('#bg-color');
bgColor.style.backgroundColor = '#000';

let red = 0;
let green = 0;
let blue = 0;

function start() {
  getRed();
  getGreen();
  getBlue();
  renderColors();
}

function getRed() {
  redRange.addEventListener('input', function () {
    let currentValueRed = redRange.value;
    red = currentValueRed;
    redInput.value = currentValueRed;
    renderColors();
  });
}

function getGreen() {
  greenRange.addEventListener('input', function () {
    let currentValueGreen = greenRange.value;
    green = currentValueGreen;
    greenInput.value = currentValueGreen;
    renderColors();
  });
}

function getBlue() {
  blueRange.addEventListener('input', function () {
    let currentValueBlue = blueRange.value;
    blue = currentValueBlue;
    blueInput.value = currentValueBlue;
    renderColors();
  });
}

function renderColors() {
  r = red;
  g = green;
  b = blue;
  bgColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  borderColor.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
  borderColor.style.boxShadow = `0px 0px 80px rgb(${red}, ${green}, ${blue})`;
}

start();
