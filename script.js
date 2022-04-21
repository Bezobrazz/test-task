"use strict";

// Burger menu-------------------------
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Accordeon-----------------------------
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Slideshow------------------------------
// let offset = 0;
// const sliderContainer = document.querySelector(".slideshow-container");

// document.querySelector(".next").addEventListener("click", function(){
// 	offset += 700;
// 		if (offset > 2800){
// 			offset  = 0;
// 		}
// 	sliderContainer.style.left = -offset + "px";
// });

// document.querySelector(".prev").addEventListener("click", function(){
// 	offset -= 700;
// 		if (offset < 0){
// 			offset  = 2800;
// 		}
// 	sliderContainer.style.left = -offset + "px";
// });

var mediaQuery = window.matchMedia('(min-width: 500px)');

if (mediaQuery.matches) {
  // я выполнюсь только если ширина экрана 500 или больше
let offset = 0;
const sliderContainer = document.querySelector(".slideshow-container");

document.querySelector(".next").addEventListener("click", function(){
	offset += 700;
		if (offset > 2800){
			offset  = 0;
		}
	sliderContainer.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function(){
	offset -= 700;
		if (offset < 0){
			offset  = 2800;
		}
	sliderContainer.style.left = -offset + "px";
});
}


var mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
  // я выполнюсь только если ширина экрана 380 (768) или меньше

		let offset = 0;
const sliderContainer = document.querySelector(".slideshow-container");

document.querySelector(".next").addEventListener("click", function(){
	offset += 360;
		if (offset > 1675){
			offset  = 0;
		}
	sliderContainer.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function(){
	offset -= 360;
		if (offset < 0){
			offset  = 1675;
		}
	sliderContainer.style.left = -offset + "px";
});
}

// Shop slider-----------------------------------
let offset = 0;
const sliderShop = document.querySelector(".online-shop-wrapper");

document.querySelector(".shop-next").addEventListener("click", function(){
	offset += 350;
		if (offset > 350){
			offset  = 0;
		}
	sliderShop.style.left = -offset + "px";
});

document.querySelector(".shop-prev").addEventListener("click", function(){
	offset -= 350;
		if (offset < 0){
			offset  = 350;
		}
	sliderShop.style.left = -offset + "px";
});