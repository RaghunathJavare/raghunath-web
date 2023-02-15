const displayPic = document.querySelectorAll(".box");
const pageHidden=document.querySelector('.gallary-box');

const pageOpen=document.querySelector('#page-open');

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

  pageOpen.addEventListener('click',function(){
    pageHidden.classList.remove('hidden');
  })