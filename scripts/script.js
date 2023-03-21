"use strict";

// Select Elements
const btnDownload = document.querySelector(".btn-download");
const heading = document.querySelector("h1");

setInterval(function () {
  heading.style.color = "yellow";
}, 500);

setInterval(function () {
  heading.style.color = "#fff";
}, 4000);

btnDownload.addEventListener("click", function () {
  errorMassage.classList.add("error");
});



