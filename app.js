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

// increase
inc.addEventListener('click', function () {
  h1.innerText++;
  if (h1.innerText >= 1) {
    document.body.style.backgroundColor = 'green';
  }
});

// decrease
dec.addEventListener('click', function () {
  h1.innerText--;
  if (h1.innerText < 0) {
    document.body.style.backgroundColor = 'red';
  }
});

// default
res.addEventListener('click', function () {
  h1.innerText = 0;
  if (h1.innerText == 0) {
    document.body.style.backgroundColor = 'yellow';
  }
});

//if h1 < 0, bg colour to red and if it is 0 , bg to yellow , if greater than 0 bg to green

// function incremental() {
//   h1.innerHTML++;
// }

// dec.addEventListener('click', incremental);
