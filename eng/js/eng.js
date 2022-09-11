import { Flamingo, Vistas, vImp, FlamingoPoetry } from './jason.js'
import { contAgain,popoverList,popoverTriggerList} from '../../js/source.js'

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
contAgain()


