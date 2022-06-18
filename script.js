"use strict";
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const number = document.querySelector(".number");
let num = 0;

increaseBtn.addEventListener("click", function () {
  num++;
  number.textContent = num;
  if (num > 0) {
    number.style.color = "green";
  }
});
decreaseBtn.addEventListener("click", function () {
  num--;
  number.textContent = num;
  if (num < 0) {
    number.style.color = "red";
  }
});
resetBtn.addEventListener("click", function () {
  num = 0;
  number.textContent = 0;
  if (num === 0) {
    number.style.color = "black";
  }
});
