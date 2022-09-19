import { Flamingo, Vistas, vImp, FlamingoPoetry } from './jason.js'
import {search,dataHtml,tQue,clickedShow,contAgain,popoverList, popoverTriggerList, searchQuestion,dataOutput,menuOpen,menuClose,hamburger,closeMenu} from '../../js/source.js'



hamburger.addEventListener('click',menuOpen)
closeMenu.addEventListener('click',menuClose)
let searchBtn = document.getElementById('search')



let arr = [Flamingo,Vistas,vImp,FlamingoPoetry]
searchBtn.addEventListener('click',()=>{search(arr)})





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




clickedShow(Flamingo)
dataOutput(Flamingo,dataHtml)
contAgain()


