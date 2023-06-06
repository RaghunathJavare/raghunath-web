"use strict";

// Select Elements
const nav = document.querySelector(".navbar");

//////////////////////////////////////////////////////////////////////////////

const eventHandler = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const target = e.target;
    const link = target.closest(".navbar").querySelectorAll(".nav-link");
    if (!link) return;
    link.forEach((l) => {
      if (l !== target) l.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", eventHandler.bind(0.5));
nav.addEventListener("mouseout", eventHandler.bind(1));

// Reval Elements

const sections = document.querySelectorAll(".section");

const revealSect = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealSect, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  observer.observe(section);
  section.classList.add("section__hidden");
});

// Scaleing with images

const imgs = document.querySelectorAll(".project--img");
const scaling = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  imgs.forEach((img) => img.classList.remove("project--active"));
  entry.target.classList.add("project--active");
};

const imgObserve = new IntersectionObserver(scaling, {
  root: null,
  threshold: 0,
});

imgs.forEach((img) => imgObserve.observe(img));
