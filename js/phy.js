import { contAgain,popoverList,popoverTriggerList } from './source.js'

let dataEntry = document.getElementById("phy-data")


let physicsImp = [
{
   "question" :"Derive einstein's photoelectric equation?" ,
   "answer"   : "photoelectric=ns.png"
},

{
    "question" :"What photoelectric effect?" ,
    "answer"   : "photoelectric-effect.png"
 },
 {
    "question" :"Electric field Intensity on axial line" ,
    "answer"   : "Axial-line.jpeg"
 },
 {
    "question" :"Electric Dipole" ,
    "answer"   : "Dipole.jpeg"
 },
 {
    "question" :"Isobars_Isotopes_Isotones" ,
    "answer"   : "iso.png"
 }, {
    "question" :"What is mirror formula 12th?" ,
    "answer"   : "mirror-formula.png"
 },
 {
    "question" :"More...soon..." ,
 },
]





function displaydata(q){

    for(let i=0; i < physicsImp.length; i++){
dataEntry.innerHTML += `
<button class="accordion">${q[i].question} </button>
<div class="panel">
<img style="width: 100%;" src="./img/${q[i].answer}" alt="">
</div>`
    }
}

displaydata(physicsImp)
contAgain()


// let zoomMsg = document.getElementById("zoom-msg")
// setInterval(() => {
//     zoomMsg.style.transform="translateY(-100%)"
// }, 3000);