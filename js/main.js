let adsbtn = document.getElementById("closead");
 adsbtn.addEventListener("click", () => {
  let adsbox = document.getElementById("ads");

  if ((adsbox.style.transform = "translateY(0px)")) {
    adsbox.style.transform = "translateY(50px)";
    adsbtn.style.opacity = "0"
  }
  setInterval(() => {
    adsbtn.style.opacity = "1"
    adsbox.style.transform = "translateY(0px)";
  }, 50000);
});

function loaded() {
  setInterval(() => {
    document.getElementById("loading").style.display = "none";
  },500);
}

let closePopup = document.getElementById('close')
let popUp =   document.getElementById('popUp')

setInterval(() => {
 localStorage.clear()
},120000);
localStorage.clear()

closePopup.addEventListener('click',()=>{
popUp.style.display = "none"
localStorage.setItem("appdownload", "closed");
})

if(localStorage.getItem("appdownload") !== 'closed'){
  setTimeout(() => {
    popUp.style.display="flex"
    
  }, 1500);
}