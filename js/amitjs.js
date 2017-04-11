// This changes everything
"use strict";

// retrieve the element
var element = document.getElementById("amitteam");

// reset the transition by...
element.addEventListener("click", function(e){
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("card.mation");
  
  // -> triggering reflow /* The actual magic */
 
  void element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("card.mation");
}, false);