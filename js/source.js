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
        write.innerHTML += `
      <button class="accordion">${topic[i].question} </button>
<div class="panel">
<p>Ans. ${[i] + "_<br>" + topic[i].answer}</p>
<small class="words"> ${wordsLength} Words</small>

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

function menuOpen(){
  let main = document.getElementById('main')
  let menu = document.getElementById('menu')
  menu.style.transform ="translateX(0%)"
  main.style.transform = "translateX(-80%)"
}


function menuClose(){
  let main = document.getElementById('main')
  let menu = document.getElementById('menu')
  menu.style.transform ="translateX(80%)"
  main.style.transform = "translateX(0%)"
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









export { contAgain, popoverList, popoverTriggerList,searchQuestion, dataOutput,menuOpen,menuClose , hamburger , closeMenu };
