// Code directed by https://www.w3schools.com/howto

let myButton = document.getElementById("to-top-btn");

// Show the button when the user scrolls down the page 50px
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}