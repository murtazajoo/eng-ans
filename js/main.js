let adsbtn = document.getElementById("closead");
let go = adsbtn.addEventListener("click", () => {
  let adsbox = document.getElementById("ads");

  if ((adsbox.style.transform = "translateY(0px)")) {
    adsbox.style.transform = "translateY(-60px)";
  }
  setInterval(() => {
    adsbox.style.transform = "translateY(0px)";
  }, 50000);
});

function loaded() {
  setInterval(() => {
    document.getElementById("loading").style.display = "none";
  },00);
}
