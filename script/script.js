const displayPic = document.querySelectorAll(".box");
const overlay = document.querySelector(".overlay");
for (let i = 0; i < displayPic.length; i++)
  displayPic[i].addEventListener("click", function () {
    displayPic[i].style = "width:97%;";

    overlay.classList.remove("hidden");

    overlay.addEventListener("click", function () {
      overlay.classList.add("hidden");
      displayPic[i].style = "";
    });
  });
