function downloadCV() {
  var cvURL =
    "https://drive.google.com/file/d/1OfvDNmDeLNnTNdtMZJZxtFiI0XvvkSo1/view?usp=drive_link";

  window.open(cvURL, "_blank");

  console.log("aduh di klik nich");
}

document.addEventListener("DOMContentLoaded", function () {
  var downloadBtn = document.querySelector(".btn-download");
  downloadBtn.addEventListener("click", downloadCV);
});

function letsConnect() {
  var lURL = "https://www.linkedin.com/in/deavinagt/";

  window.open(lURL, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  var letsConnectBtn = document.querySelector(".btn-letsconnect");
  letsConnectBtn.addEventListener("click", letsConnect);
});
