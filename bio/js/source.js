import { contAgain,popoverList,popoverTriggerList,showData} from '../../js/source.js'

let bioData = document.getElementById("bio-data");

let zoologyData=[
    {
        name: "Zoology"
    },
        {
            "question": "What had been put up on the bulletin-board?",
            "answer": "The French districts of Alsace and Lorraine had been taken over by the Prussians. Hence, the bulletin board displayed the news that an order had come from Berlin to teach only German in the schools of Alsace and Lorraine."
        },
]
let BotanyData=[
    {
        name: "Botany"
    },
        {
            "question": "What had been put up on the bulletin-board?",
            "answer": "The French districts of Alsace and Lorraine had been taken over by the Prussians. Hence, the bulletin board displayed the news that an order had come from Berlin to teach only German in the schools of Alsace and Lorraine."
        },
]


showData(zoologyData,bioData)
contAgain()

showData(BotanyData,bioData)
contAgain()
