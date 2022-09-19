import {search,dataHtml,tQue,clickedShow,contAgain,popoverList, popoverTriggerList, searchQuestion,dataOutput,menuOpen,menuClose,hamburger,closeMenu} from '../../js/source.js'



hamburger.addEventListener('click',menuOpen)
closeMenu.addEventListener('click',menuClose)
let searchBtn = document.getElementById('search')


let organicChem=[
    {
        name: "organicChem",
        "question": "",
        "answer": ""
    },
    {
        question: "organic",
        answer: "test.png",
      },

  
]

let inOrganicChem =[
    {
        name: "inOrganicChem",
        "question": "",
        "answer": ""
    },
    {
        question: "Inorganic?",
        answer: "test.png",
      },
]

let physicalChem =[
    {
        name: "physicalChem",
        "question": "",
        "answer": ""
    },
    {
        question: "physical?",
        answer: "test.png",
    },
]





contAgain()



let organicBtn = document.getElementById('Organic')
let inOrganicBtn = document.getElementById('Inorganic')
let physicalBtn = document.getElementById('Physical')



organicBtn.addEventListener('click', ()=>{
   clickedShow(organicChem)
    })
    
inOrganicBtn.addEventListener('click', ()=>{
clickedShow(inOrganicChem)
})

physicalBtn.addEventListener('click', ()=>{
  clickedShow(physicalChem)
    })


    let arr = [organicChem,inOrganicChem,physicalChem]
    searchBtn.addEventListener('click',()=>{search(arr)})
    
    
clickedShow(organicChem)