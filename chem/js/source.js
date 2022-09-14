import { contAgain, popoverList, popoverTriggerList ,dataOutput} from "../../js/source.js";



let InsertData = document.getElementById('chem-data')

let organicChem=[
    {
        question: "organic",
        answer: "test.png",
      },

  
]

let inOrganicChem =[
    {
        question: "Inorganic?",
        answer: "test.png",
      },
]

let physicalChem =[
    {
        question: "physical?",
        answer: "test.png",
    },
]









// displaydata(organicChem,InsertData)
contAgain()



let organicBtn = document.getElementById('Organic')
let inOrganicBtn = document.getElementById('Inorganic')
let physicalBtn = document.getElementById('Physical')



organicBtn.addEventListener('click', ()=>{
   whichBook(organicChem)
    })
    
inOrganicBtn.addEventListener('click', ()=>{
whichBook(inOrganicChem)
})

physicalBtn.addEventListener('click', ()=>{
  whichBook(physicalChem)
    })


    function whichBook(a){
        InsertData.innerHTML=""
        displaydata(a,InsertData)
        contAgain()
}


whichBook(organicChem)
