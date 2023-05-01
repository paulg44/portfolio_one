// Javascript for Text Scroll on Homepage
/*
   Plan 
   1 Make variable for scroll text 
   2 Make array with different texts to scroll 
   3 Loop through the array 
   4 Set textContent to the array
*/

// Variables
const scrollText = document.querySelector(".scroll-text");
const textArray = ["Software Developer", "Web Developer", "Web Designer"];

// Function
function scrollTextFunction() {
  let i = 0;
  setInterval(function () {
    scrollText.textContent = textArray[i];
    i++;
    if (i > textArray.length - 1) {
      i = 0;
    }
  }, 2000);
}
