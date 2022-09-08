let adsbtn = document.getElementById("closead")
adsbtn.addEventListener('click',()=>{
  let adsbox = document.getElementById('ads')

  if(adsbox.style.transform = "translateY(0px)"){
      adsbox.style.transform="translateY(-60px)"
  } 
  setInterval(() => {
    adsbox.style.transform="translateY(0px)"
  }, 10000);
  
})

var acc = document.getElementsByClassName("accordion");
var i;
let arrow = document.getElementsByClassName('arrow')
function contAgain() {
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                
            } else {
                panel.style.display = "block";
            }
        });
    }
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

export {contAgain , popoverList , popoverTriggerList}