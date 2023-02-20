// selecting elements 

const displayPic = document.querySelectorAll(".box");
const homeLick=document.querySelector('.home')

const photoLick=document.querySelector('.photo')

const pageHidden=document.querySelector('.hide-1');

const pageOpen=document.querySelector('.hide-2');

const photoLink=document.querySelector('.expand-photo');
console.log(photoLink);

// section background color hide 

const overlay = document.querySelector(".overlay");
for (let i = 0; i < displayPic.length; i++)
  displayPic[i].addEventListener("click", function () {
      
      overlay.classList.remove("hidden");
      
      overlay.addEventListener("click", function () {
          overlay.classList.add("hidden");
    });
  });

  photoLick.addEventListener('click',function(){
    pageOpen.classList.remove('hidden');
    pageHidden.classList.add('hidden');
  })