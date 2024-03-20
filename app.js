'use strict';

// let incBtn = document.querySelector('.success');
// let body = document.querySelector('body');

// // function changeBackground() {
// //   let hasRed = body.classList.contains('red');

// // }

// incBtn.addEventListener('click', function changeBackground() {
//   body.style.background = 'red';
// });

let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let res = document.querySelector('.res');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');

// Function change colour
function changeBackground() {
  if (parseInt(h1.innerText) > 0) {
    document.body.style.backgroundColor = 'green';
  } else if (parseInt(h1.innerText) < 0) {
    document.body.style.backgroundColor = 'red';
  } else {
    document.body.style.backgroundColor = 'yellow';
  }
}

// increase
inc.addEventListener('click', function () {
  h1.innerText++;
  changeBackground();
  // if (h1.innerText >= 1) {
  //   document.body.style.backgroundColor = 'green';
  // }
});

// decrease
dec.addEventListener('click', function () {
  h1.innerText--;
  changeBackground();

  // if (h1.innerText < 0) {
  //   document.body.style.backgroundColor = 'red';
  // }
});

// default
res.addEventListener('click', function () {
  h1.innerText = 0;
  changeBackground();

  // if (h1.innerText == 0) {
  //   document.body.style.backgroundColor = 'yellow';
  // }
});
