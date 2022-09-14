
var acc = document.getElementsByClassName("accordion");
var i;
function contAgain() {
    console.log(acc.length)
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

function dataOutput(topic , write){
  let suffix = [
    "png","jpeg","jpg"
  ]
  for (let i = 1; i < topic.length; i++) {
    console.log(topic[i].answer)
    let ansArr = topic[i].answer.split(".")
    let type = ansArr[ansArr.length-1]
          if(type == suffix[0] || type == suffix[1] ||type == suffix[2]  ){
          write.innerHTML += `
  <button class="accordion">${topic[i].question} </button>
  <div class="panel">
  <img style="width: 100%;" src="./img/${topic[i].answer}" alt="">
  </div>`;
    }else{
      let wordsLength = topic[i].answer.split(" ").length
        write.innerHTML += `
      <button class="accordion">${topic[i].question} </button>
<div class="panel">
<p>${topic[i].answer}</p>
<small class="words"> ${wordsLength} Words</small>

</div>
`
    }
          }
  }




  

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

export {contAgain , popoverList , popoverTriggerList ,dataOutput}