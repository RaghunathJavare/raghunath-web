"use strict";

// Select Elements
const nav = document.querySelector(".navbar");

//////////////////////////////////////////////////////////////////////////////

const eventHandler = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const target = e.target;
    const link = target.closest(".navbar").querySelectorAll(".nav-link");
    const home = target.closest(".navbar").querySelector(".home");
    if (!link) return;
    link.forEach((l) => {
      if (l !== target) l.style.opacity = this;
      home.style.opacity=this
    });
  }
};

nav.addEventListener("mouseover", eventHandler.bind(0.5));
nav.addEventListener("mouseout", eventHandler.bind(1));
