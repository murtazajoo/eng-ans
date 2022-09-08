import { Flamingo, Vistas, vImp, FlamingoPoetry } from './jason.js'


let dataHtml = document.getElementById('dataEntry')

function showData(whichBook) {
  for (let i = 1; i < whichBook.length; i++) {
    let wordsLength = whichBook[i].answer.split(" ").length
    dataHtml.innerHTML += `
        <button class="accordion">Q.${(i) + ": " + whichBook[i].question} </button>
<div class="panel">
  <p>Ans.${(i) + " _ <br>" + whichBook[i].answer}</p>
  <small class="words"> ${wordsLength} Words</small>
</div>
`
    // yp


  }
  document.getElementById("tQue").innerText = whichBook.length + " Important Questions Of " + whichBook[0].name
}


let btnVistas = document.getElementById("btnVistas")

btnVistas.addEventListener('click', () => {
  clickedShow(Vistas)
})



let btnFlamingo = document.getElementById("btnFlamingo")

btnFlamingo.addEventListener('click', () => {
  btnFlamingo
  clickedShow(Flamingo)
})

let btnFlamingoPoetry = document.getElementById("btnFlamingoPoetry")

btnFlamingoPoetry.addEventListener('click', () => {
  clickedShow(FlamingoPoetry)
})

let btnvImp = document.getElementById("btnvImp")

btnvImp.addEventListener('click', () => {
  clickedShow(vImp)
})


function clickedShow(r) {
  dataHtml.innerHTML = ""
  showData(r)
  contAgain()
}

showData(Flamingo)

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

contAgain()


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
