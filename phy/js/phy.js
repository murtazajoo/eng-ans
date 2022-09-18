import { contAgain,popoverList, popoverTriggerList, searchQuestion,dataOutput,menuOpen,menuClose,hamburger,closeMenu} from '../../js/source.js'

let dataEntry = document.getElementById("phy-data");
hamburger.addEventListener('click',menuOpen)
closeMenu.addEventListener('click',menuClose)
let searchBtn = document.getElementById('search')


searchBtn.addEventListener('click',()=>{
  let userInput = document.getElementById('input-menu')
  dataEntry.innerHTML =""
  // searchQuestion(Flamingo,userInput,dataHtml)
  
   searchQuestion(physicsImp,userInput,dataEntry)
   contAgain()

  userInput.value = ""
  if( dataEntry.innerHTML ==""){
    dataEntry.innerHTML="<h1>Sorry <br> No Result Found</h1>"
  contAgain()

  }
  contAgain()
})


setInterval(() => {
  contAgain()
}, 500);

let physicsImp = [
  {
    name: "phy",
    question:"",
    answer : ""
},
  {
    question: "Derive einstein's photoelectric equation?",
    answer: "photoelectric=ns.png",
  },

  {
    question: "What photoelectric effect?",
    answer: "photoelectric-effect.png",
  },
  {
    question: "Electric field Intensity on axial line",
    answer: "Axial-line.jpeg",
  },
  {
    question: "Electric Dipole",
    answer: "Dipole.jpeg",
  },
  {
    question: "Isobars_Isotopes_Isotones",
    answer: "iso.png",
  },
  {
    question: "What is mirror formula 12th?",
    answer: "mirror-formula.png",
  },
  {
    question: "Uses of Radio Waves?",
    answer: "uses-radiowave.png",
  },
  {
    question: "Properties of charges?",
    answer: "p-charges.png",
  },
  {
    question: "What is TIR?",
    // answer: "tir.png",
    answer: "tri.jpeg",

  },
  {
    question: "Applcations of TIR",
    answer: "appOfTIR.jpeg",
  },
    {
      question: "conductors,insulators and semiconductors on the basis of their energy bands?",
      answer: "",
    },
    {
      question: "P and N type semiconductor?",
      answer: "sorry.png",
    },
    {
      question: "What is Rectifier? Half wave Rectifie",
      answer: "",
    },
    {
      question: "Threshold frequency?",
      answer: "Threshold-Frequency.png",
    },
    {
      question: "Difference between Interference and Defraction of light?",
      answer: "diff-inter.jpeg",
    },
    {
      question: "What is Bio-Savarts lawa?",
      answer: "biosavarts.jpeg",
    },
    {
      question: "Cyclotron?",
      answer: "cyclotrone.png",
    },
    {
      question: "Cyclotron Diagram",
      answer: "cyclo-fig.png",
    },
    {
      question: "Cyclotron principal and working?",
      answer: "",
    },
    {
      question: "NAND gate?",
      answer: "NAND.jpeg",
    },
    {
      question: "NAND gate Truth table?",
      answer: "NANDtable.png",
    },
    {
      question: "Electric field due to a point charge?",
      answer: "E-duetoP.jpeg",
    },
   
    {
      question: "State coulombs law?",
      answer: "",
    },
    {
      question: "Lorentz force?",
      answer: "lorentz.jpeg",
    },
    {
      question: "Magnetic Field lines?",
      answer: "mf-lines.jpeg",
    },
    {
      question: " Phenomena of Self-induction and its S.I unit?",
      answer: "pheOfSelfinduction.jpeg",
    },
    {
      question: "Define coeff. of self-induction?",
      answer: "cooOfInduc.jpeg",
    },
    {
      question: "State gauss's theorm?",
      answer: "",
    },
    {
      question: "?",
      answer: "this is what",
    }

];



dataOutput(physicsImp,dataEntry);
contAgain();

// let zoomMsg = document.getElementById("zoom-msg")
// setInterval(() => {
//     zoomMsg.style.transform="translateY(-100%)"
// }, 3000);

