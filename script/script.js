const displayPic = document.querySelectorAll(".box");
const resize = document.getElementById("resize");
for (let i = 0; i < displayPic.length; i++)
  displayPic[i].addEventListener("click", function () {
    displayPic[i].style = "width:100%;";
    resize.addEventListener("click", function () {
    });
  });
