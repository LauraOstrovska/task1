
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction();};

function scrollFunction() {

  if (document.body.scrollTop > 2570 || document.documentElement.scrollTop > 2570  ) {
    mybutton.style.display = "none";
    
  } else {
    mybutton.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}