import {search,dataHtml,tQue,clickedShow,contAgain,popoverList, popoverTriggerList, searchQuestion,dataOutput,menuOpen,menuClose,hamburger,closeMenu} from '../../js/source.js'


hamburger.addEventListener('click',menuOpen)
closeMenu.addEventListener('click',menuClose)
let searchBtn = document.getElementById('search')




let evsData=[   {
        name: "All EVS",
        "question": "",
        "answer": ""
    }, {
      
        "question": "what IS pollution",
        "answer": "i really don't know"
    },]
   


  
let arr = [evsData]
searchBtn.addEventListener('click',()=>{search(arr)})

  clickedShow(evsData)



