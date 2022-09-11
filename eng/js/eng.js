import { Flamingo, Vistas, vImp, FlamingoPoetry } from './jason.js'
import { contAgain,popoverList,popoverTriggerList,showData} from '../../js/source.js'

 let dataHtml = document.getElementById('dataEntry')



let btnVistas = document.getElementById("btnVistas")

btnVistas.addEventListener('click', () => {
  clickedShow(Vistas)
})



let btnFlamingo = document.getElementById("btnFlamingo")
let btnFlamingoPoetry = document.getElementById("btnFlamingoPoetry")
let btnvImp = document.getElementById("btnvImp")



btnFlamingo.addEventListener('click', () => {
clickedShow(Flamingo)
})

btnFlamingoPoetry.addEventListener('click', () => {
  clickedShow(FlamingoPoetry)
})

btnvImp.addEventListener('click', () => {
  clickedShow(vImp)
})


function clickedShow(r) {
  dataHtml.innerHTML = ""
  showData(r,dataHtml)
  contAgain()
}

showData(Flamingo,dataHtml)
contAgain()


