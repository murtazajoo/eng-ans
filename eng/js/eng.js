import { Flamingo, Vistas, vImp, FlamingoPoetry } from './jason.js'
import { contAgain,popoverList, popoverTriggerList, searchQuestion,dataOutput,menuOpen,menuClose,hamburger,closeMenu} from '../../js/source.js'


let dataHtml = document.getElementById('dataEntry')
hamburger.addEventListener('click',menuOpen)
closeMenu.addEventListener('click',menuClose)
let searchBtn = document.getElementById('search')


searchBtn.addEventListener('click',()=>{
  let userInput = document.getElementById('input-menu')
  dataHtml.innerHTML =""
  // searchQuestion(Flamingo,userInput,dataHtml)
  let from = [Flamingo,Vistas,vImp,FlamingoPoetry]
  for(let k=0 ; k < from.length ;k++){
   searchQuestion(from[k],userInput,dataHtml)
  }
  userInput.value = ""
  contAgain()
if( dataHtml.innerHTML ==""){
  dataHtml.innerHTML="<h1>Sorry <br> No Result Found</h1."
}
})



let tQue = document.getElementById('tQue')


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
  dataOutput(r,dataHtml)
  // showData(r,dataHtml)
  contAgain()
tQue.innerHTML= r[0].name
}
clickedShow(Flamingo,dataHtml)
// showData(Flamingo,dataHtml)
dataOutput(Flamingo,dataHtml)
contAgain()


