
var acc = document.getElementsByClassName("accordion");
var i;
function contAgain() {

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

function dataOutput(topic, write) {
  let suffix = ["png", "jpeg", "jpg"];
  for (let i = 1; i < topic.length; i++) {
    
    let ansArr = topic[i].answer.split(".");
    let type = ansArr[ansArr.length - 1];
    if (type == suffix[0] || type == suffix[1] || type == suffix[2]) {
      write.innerHTML += `
  <button class="accordion">${topic[i].question} </button>
  <div class="panel">
  <img style="width: 100%;" src="./img/${topic[i].answer}" alt="">
  </div>`;
    } else {
      let wordsLength = topic[i].answer.split(" ").length;
      if (topic[i].answer == "") {
        write.innerHTML += ` <button class="accordion">${topic[i].question} </button>
        <div class="panel">
        <p>Answer Is Not Available</p>`;
      } else {
        let by 
        if(topic[i].hasOwnProperty("author")){
          by  = topic[i].author
        }else{
          by = "author"
        }
        write.innerHTML += `
      <button class="accordion">${topic[i].question} </button>
<div class="panel">
<p>${topic[i].answer}</p>
<small class="words"> ${wordsLength} Words</small>
<br>

<small class="words">by: ${by} </small>
</div>
`;
      }
    }
  }
}

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);




let hamburger = document.getElementById('hamburger')
let closeMenu = document.getElementById('close-menu')
  let main = document.getElementById('main')
  let menu = document.getElementById('menu')


function menuOpen(){
  menu.style.transform ="translateX(0%)"
  main.style.transform = "translateX(-80%)"
  main.style.position ="fixed"
}


function menuClose(){
  menu.style.transform ="translateX(100%)"
  main.style.transform = "translateX(0%)"
  main.style.position ="relative"

}




function searchQuestion(from,what,where){
  let item = from.filter(item=>item.question.toLowerCase().includes(what.value.toLowerCase().replace(/\s/g, '')));


  let dummy = {
    question:"",
    answer :""
  }
  item.unshift(dummy)
  dataOutput(item,where)
  menuClose()
  contAgain()

}


let adsbtn = document.getElementById("closead");
adsbtn.addEventListener("click", () => {
  let adsbox = document.getElementById("ads");

  if ((adsbox.style.transform = "translateY(0px)")) {
    adsbox.style.transform = "translateY(50px)";
    adsbtn.style.opacity = "0";
  }
  setInterval(() => {
    adsbtn.style.opacity = "1";
    adsbox.style.transform = "translateY(0px)";
  }, 50000);
});

let tQue = document.getElementById('tQue')
let dataHtml = document.getElementById("html-data");

function clickedShow(what) {
  dataHtml.innerHTML = ""
  dataOutput(what,dataHtml)

  menuClose()
  contAgain()
tQue.innerHTML= what[0].name
}

function search(arr ){
  let userInput = document.getElementById('input-menu')
  dataHtml.innerHTML =""
  let from = arr
  for(let k=0 ; k < from.length ;k++){
   searchQuestion(from[k],userInput,dataHtml)
  }
  userInput.value = ""
  if( dataHtml.innerHTML ==""){
    dataHtml.innerHTML=`
    <h1>Sorry <br> No Result Found</h1>
    <a href="../contribute.html">Submit/request The Question</a >
    `
  }
  tQue.innerHTML=  document.getElementsByClassName("accordion").length+" :  Search Result " 
  contAgain()
}
export {search, contAgain,dataHtml,clickedShow,tQue, popoverList, popoverTriggerList,searchQuestion, dataOutput,menuOpen,menuClose , hamburger , closeMenu };
