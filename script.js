function downloadCV() {
  var cvURL =
    "https://drive.google.com/file/d/1OfvDNmDeLNnTNdtMZJZxtFiI0XvvkSo1/view?usp=drive_link";

  window.open(cvURL, "_blank");
};

document.addEventListener("DOMContentLoaded", function () {
  var downloadBtn = document.querySelector(".btn-download");
  downloadBtn.addEventListener("click", downloadCV);
});

function letsConnect() {
  var lURL = "https://www.linkedin.com/in/deavinagt/";

  window.open(lURL, "_blank");
};

document.addEventListener("DOMContentLoaded", function () {
  var letsConnectBtn = document.querySelector(".btn-letsconnect");
  letsConnectBtn.addEventListener("click", letsConnect);
});


function scrollToTop(){
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var scrollingToTop = document.querySelector(".scroll-to-top");  
  scrollingToTop.addEventListener("click",scrollToTop);
});

function changeHeaderBackground() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.style.backgroundColor = '#98bad5';
    header.classList.add("scrolled");
  } else {
    header.style.backgroundColor = 'transparent';
    header.classList.remove("scrolled");
  }
};

document.addEventListener("DOMContentLoaded", function (){
  document.addEventListener("scroll", changeHeaderBackground);
});

function SubmitMessage() {
  alert("Thankyou, Your Message Have Been Submited");
};

document.addEventListener("DOMContentLoaded", function (){
  const btnSubmitMessage = document.querySelector('#send-message')
  btnSubmitMessage.addEventListener("click", SubmitMessage);
});