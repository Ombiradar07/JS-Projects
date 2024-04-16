const questions = document.getElementById('question');
const option1 = document.querySelector('#option-1');
const option2 = document.querySelector('#option-2');
const option3 = document.querySelector('#option-3');
const option4 = document.querySelector('#option-4');
const submit = document.getElementById('submit');

console.log(questions);
console.log(option1);
console.log(option2);
console.log(option3);
console.log(option4);

fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
 .then((response) => response.json())
 .then((data) => {
    console.log(data);


  });