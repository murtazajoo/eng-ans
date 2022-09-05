import { Flamingo, Vistas, vImp, FlamingoPoetry } from './jason.js'


let dataHtml = document.getElementById('dataEntry')

function showData(whichBook) {
    for (let i = 0; i < whichBook.length; i++) {
        let wordsLength = whichBook[i].answer.split(" ").length
        dataHtml.innerHTML += `
        <button class="accordion"> ${whichBook[i].question} </button>
<div class="panel">
  <p> ${whichBook[i].answer}</p>
  <span class="words"> ${wordsLength} Words</span>
</div>
<br>
<br>
`
// yp


    }
    document.getElementById("tQue").innerText = whichBook.length + " Important Questions"
}


let btnVistas = document.getElementById("btnVistas")

btnVistas.addEventListener('click',()=>{
    clickedShow(Vistas)
})



let btnFlamingo = document.getElementById("btnFlamingo")

btnFlamingo.addEventListener('click',()=>{
    clickedShow(Flamingo)
})

let btnFlamingoPoetry = document.getElementById("btnFlamingoPoetry")

btnFlamingoPoetry.addEventListener('click',()=>{
    clickedShow(FlamingoPoetry)
})

let btnvImp = document.getElementById("btnvImp")

btnvImp.addEventListener('click',()=>{
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

function contAgain(){

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
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