"use strict";
const mahesh = {
  firstName: "mahesh",
  lastname: "borse",
  age: 21,
  job: "polich",
};
const nikhil = {
  firstName: "nikhil",
  lastname: "gurav",
  age: 19,
  job: "architecture",
};
const yash = {
  firstName: "yash",
  lastname: "marathe",
  age: 20,
  job: "sybercafe",
};

const friends = [mahesh, nikhil, yash];
for (const x of friends) {
  const friendsName = x.firstName;
  const friendsAges = x.age;
  const friendsJOb = x.job;
  x.sallary = "2 crore";
  console.log(friendsName);
  console.log(friendsAges);
  console.log(friendsJOb);
  console.log(x.sallary);
}

const calcAge = function (birthYears) {
  const age = 2022 - birthYears;
  console.log(age);
};

const arr = [2004, 2003, 2005, 2006];
for (const birthYears of arr) {
  calcAge(birthYears);
}

const v1 = ["Dadu", "Javare"];
for (const v3 of v1) {
  const v2 = v3.split("");
  const shortForm = v2[0];
  console.log(shortForm);
}