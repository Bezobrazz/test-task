"use strict";
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
let offset = 0;
const sliderContainer = document.querySelector(".slideshow-container");

document.querySelector(".next").addEventListener("click", function(){
	offset += 700;
		if (offset > 3475){
			offset  = 0;
		}
	sliderContainer.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function(){
	offset -= 700;
		if (offset < 0){
			offset  = 3475;
		}
	sliderContainer.style.left = -offset + "px";
});