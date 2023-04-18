// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 1500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 470; // For Safari
  document.documentElement.scrollTop = 470; // For Chrome, Firefox, IE and Opera
}