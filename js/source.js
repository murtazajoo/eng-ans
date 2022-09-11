

var acc = document.getElementsByClassName("accordion");
var i;
let arrow = document.getElementsByClassName('arrow')
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
function displaydata(what,where) {
    for (let i = 0; i < what.length; i++) {
      where.innerHTML += `
  <button class="accordion">${what[i].question} </button>
  <div class="panel">
  <img style="width: 100%;" src="./img/${what[i].answer}" alt="">
  </div>`;
    }
   document.getElementById('total').innerHTML = what.length
  }

  function showData(whichBook,where) {
    for (let i = 1; i < whichBook.length; i++) {
      let wordsLength = whichBook[i].answer.split(" ").length
      where.innerHTML += `
          <button class="accordion">Q.${(i) + ": " + whichBook[i].question} </button>
  <div class="panel">
    <p>Ans.${(i) + " _ <br>" + whichBook[i].answer}</p>
    <small class="words"> ${wordsLength} Words</small>
  </div>
  `
    }
    document.getElementById("tQue").innerText = whichBook.length + " Important Questions Of " + whichBook[0].name
  }

  

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

export {contAgain , popoverList , popoverTriggerList , displaydata,showData}