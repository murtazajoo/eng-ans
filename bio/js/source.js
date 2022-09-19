import {search,dataHtml,tQue,clickedShow,contAgain,popoverList, popoverTriggerList, searchQuestion,dataOutput,menuOpen,menuClose,hamburger,closeMenu} from '../../js/source.js'


hamburger.addEventListener('click',menuOpen)
closeMenu.addEventListener('click',menuClose)
let searchBtn = document.getElementById('search')




let zoologyData=[   {
        name: "Zoology",
        "question": "",
        "answer": ""
    }, {
            "question": "Cancer",
            "answer": `

 

            Cancer may be defined as the rapid uncontrolled and abnormal multiplication and growth of the cells to form a tumour it's common between the age group of 40 to 60 
            
             
            
            Characteristics of cancer cells
            
             
            
            they show rapid tusion and growth much higher than the normal cells 
            
            beautiful repetition of cells at tumour is formed 
            
            consumption of oxygen and glucose is much higher than normal cells 
            
            they lack cell differentiation 
            
            They lack apoptosis (cell death) 
            
            the cancer cells migrate to different body parts through blood and lymph to form new colonies called the second recruits this migration of cancer cells to different body parts is called metastasis 
            
            Causes of cancer 
            
             
            
            It is believed that every organisms contain inactive cancer causing genes called protonco  genes . the chemicals which activates protonco genes are known as carcinogenic Chemicals which include cyclic hydrocarbons, chromium compounds, coltar, mustard gas nicotine in smoke etc  The harmful UV rays. And X rays also causes cancer. Exposure of the skin to eat for a long period of time also cause cancer. 
            
             
            
            Symptoms of cancer. 
            
             
            
            persistent cough and hoarseness in a smoker. 
            
            Change in the colour of rat Anmol. 
            
            Night sweating. 
            
            Unexpected loss of weight. 
            
            Loss of appetite. 
            
            Bleeding other than periodic in females. 
            
            Treatment of cancer. 
            
             
            
            The cancer can be treated only in the early stage of 4 types of treatment. 
            
            Radiotherapy.: In this type of treatment. Powerful radiations are used to kill the cancer cells in a Beginning tumour 
            
            Chemotherapy.: In this therapy certain chemicals like anti-cancer drugs. Like Floro uracil I used to kill the cancer stage. 
            
            Surgery.: Involves surgical removal of cancerous part from the body. 
            
            Immunotherapy.: Please type of therapy. Immune modulator is used. To kill the cancer cells. Add to stimulate the immune system. Example. Interferon. 
            
             `},
]
let BotanyData=[
    {
        name: "Botany",
        "question": "",
        "answer": ""
    },
        {
            "question": "What is Flower?",
            "answer": "it is good"
        },
]
let ZoologyBtn = document.getElementById("zoology")
let BotanyBtn = document.getElementById("botany")


ZoologyBtn.addEventListener('click', () => {
    clickedShow(zoologyData)
  })
  BotanyBtn.addEventListener('click', () => {
    clickedShow(BotanyData)
  })

  
let arr = [zoologyData,BotanyData]
searchBtn.addEventListener('click',()=>{search(arr)})

  clickedShow(zoologyData)



