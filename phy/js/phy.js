import { contAgain, popoverList, popoverTriggerList } from "../../js/source.js";

let dataEntry = document.getElementById("phy-data");

let physicsImp = [
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
    answer: "",
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
      answer: "phe-of-selfinduction.jpeg",
    },
    {
      question: "Define coeff. of self-induction?",
      answer: "coff-of-induction.jpeg",
    },





  {
    question: "More...soon...",
  },
];

function displaydata(q) {
  for (let i = 0; i < q.length; i++) {
    dataEntry.innerHTML += `
<button class="accordion">${q[i].question} </button>
<div class="panel">
<img style="width: 100%;" src="./img/${q[i].answer}" alt="">
</div>`;
  }
 document.getElementById('total').innerHTML = q.length
}

displaydata(physicsImp);
contAgain();

// let zoomMsg = document.getElementById("zoom-msg")
// setInterval(() => {
//     zoomMsg.style.transform="translateY(-100%)"
// }, 3000);

