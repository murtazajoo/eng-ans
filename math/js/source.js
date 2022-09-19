import { search, dataHtml, tQue, clickedShow, contAgain, popoverList, popoverTriggerList, searchQuestion, dataOutput, menuOpen, menuClose, hamburger, closeMenu } from '../../js/source.js'



hamburger.addEventListener('click', menuOpen)
closeMenu.addEventListener('click', menuClose)
let searchBtn = document.getElementById('search')


let partOne = [{
  name: "Part One",
  "question": "",
  "answer": ""
}, {
  "question": "EX : 1.1",
  "answer": "Q 1,2,3,4"
},
{
  "question": "EX : 2.1",
  "answer": "Q1,2,3,4,5,6,7,8,9,10,13"
},
{
  "question": "EX : 2.2",
  "answer": "Q1,2,3,4,5,6"
},
{
  "question": "EX : 3.2",
  "answer": "Q6,7,8,9,10,11,12"
},
{
  "question": "EX : 3.3",
  "answer": "Q2,3,4,5,6,7,8"
},
{
  "question": "EX : 4.1",
  "answer": "Q1,2,3,4,5,6"
},
{
  "question": "EX : 4.2",
  "answer": "Q5,6,7,8,9,10,11,12"
},
{
  "question": "EX : 4.3",
  "answer": "Q1,2,3,4"
},
{
  "question": "EX : 4.4",
  "answer": "Q1,2,3,4,5,6,7,8"
},
{
  "question": "EX : 5.1",
  "answer": "Q6,7,8,9,10,26,27,28,29,30"
},
{
  "question": "EX : 5.4",
  "answer": "Q1,2,3,4,5,6"
},
{
  "question": "EX : 5.6",
  "answer": "Q3,4,5,6,7,8,9,10,11,12,13,14"
},
{
  "question": "EX : 6.1",
  "answer": "Q1,2,3,4,5,6"
},
{
  "question": "EX : 6.3",
  "answer": "Q9,10,,12,13,14,15"
},


]


let partTwo = [{
  name: "Part Two",
  "question": "",
  "answer": ""
}, {
  "question": "EX : 7.1",
  "answer": "Q 6,7,8,9,10,11,12,13"
},
{
  "question": "EX : 7.2",
  "answer": "Q 1,2,3,4,5,6,7"
},
{
  "question": "EX : 7.4",
  "answer": "Q 9,10,11,12,13,14,15,,18,19,20,21"
},
{
  "question": "EX : 7.5",
  "answer": "Q 1,2,3,4,5,6,7,8"
},
{
  "question": "EX : 7.8",
  "answer": "Q 1,2,3,4,5,6"
},
{
  "question": "EX : 7.1",
  "answer": "Q "
},
{
  "question": "EX : 9.4",
  "answer": "Q 1,2,3,4,5,6,7,8,9,10"
},
{
  "question": "EX : 9.5",
  "answer": "Q 1,2,3,4,5,6,7,8,9,10"
},
{
  "question": "EX : 10.3",
  "answer": "Q 1,2,3,4,5,6,7,8"
},
{
  "question": "EX : 10.4",
  "answer": "Q 1,2,3,4,5,6"
},
{
  "question": "EX : 11.2",
  "answer": "Q 11,12,13,14,15,16,17"
},
{
  "question": "EX : 11.3",
  "answer": "Q 9,10,11,12,13,"
},
{
  "question": "EX : 12.1",
  "answer": "Q 1,2,3,4,5,6"
},
{
  "question": "EX : 13.1",
  "answer": "Q 1,2,3,4,5,6"
},
{
  "question": "EX : 13.4",
  "answer": "Q 7,8,9,10,11"
},
{
  "question": "EX : 13.5",
  "answer": "Q 1,2,3,4,5"
},
]



let part1 = document.getElementById("part1")
let part2 = document.getElementById("part2")

part1.addEventListener('click', () => {
  clickedShow(partOne)
})

part2.addEventListener('click', () => {
  clickedShow(partTwo)
})






let arr = [partOne, partTwo]
searchBtn.addEventListener('click', () => { search(arr) })



clickedShow(partOne)


