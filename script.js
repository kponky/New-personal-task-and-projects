const questionElement = document.getElementById("questions");
const answerBtns= document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

const quizQuestions = [
  {
    question: "What is the capital of Australia",
       answers: [
      {text: "Sydney", correct: false},
      {text: "Melbourne", correct: false},
      {text: "Canberra", correct: true},
      {text: "Perth", correct: false},
    ]
  }, 

  {
    question: "Who painted the Mona Lisa?",
       answers: [
      {text: " Vincent van Gogh", correct: false},
      {text:  "Pablo Picasso", correct: false},
      {text: "Michelangelo", correct: false},
      {text: "Leonardo da Vinci", correct: true},
    ]
  }, 
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
       answers: [
      {text: " Horse", correct: false},
      {text:  "Donkey", correct: false},
      {text: "Cow", correct: false},
      {text: "Camel", correct: true},
    ]
  }, 
  {
    question: " Rainbow consist of how many colours?",
       answers: [
      {text: "7 colors", correct: true},
      {text:  "10 colors", correct: false},
      {text: "6 colors", correct: false},
      {text: "9 colors", correct: false},
    ]
  }, 

  {
    question: "What is the largest ocean in the world?",
       answers: [
      {text: "Pacific Ocean", correct: true},
      {text: "Arctic Ocean", correct: false},
      {text: "Indian Ocean", correct: false},
      {text: "Atlantic Ocean", correct: false},
    ]
  }, 
  {
    question: "What is the currency of Japan?",
       answers: [
      {text: "Rupee", correct: false},
      {text: "Euro", correct: false},
      {text: "Yen", correct: true},
      {text: "Rupee", correct: false},
    ]
  }, 
  {
    question: "Who is the author of the Harry Potter book series?",
       answers: [
      {text: "J.R.R. Tolkien", correct:false},
      {text: "J.K. Rowling", correct: true},
      {text: "George R.R. Martin", correct: false},
      {text: "Dan Brown", correct: false},
    ]
  }, 
  {
    question: "What is the largest organ in the human body?",
       answers: [
      {text:  "Heart", correct: false},
      {text: "Liver", correct: false},
      {text: "Brain", correct: false},
      {text:  "Skin", correct: true},
    ]
  }, 
  {
    question: "Who was the first and only prime minister of Nigeria?",
       answers: [
      {text: "Abubakar Tafawa Balewa", correct: true},
      {text: "Ahmadu Bello", correct: false},
      {text: "Nnamdi Azikiwe", correct: false},
      {text: "Yakubu Gowon", correct: false},
    ]
  }, 
  
  {
    question: "What are the two major religions in Nigeria?",
       answers: [
      {text: "Christianity and Judism", correct:false},
      {text: "Islam and Hinduism", correct: false},
      {text: "Christianity and Islam", correct: true},
      {text: "Christianity and Judism", correct: false},
    ]
  }, 
  {
    question: "Ibibio ethnic group is predominantly found in which Nigerian state?",
       answers: [
      {text: "Cross River State", correct:false},
      {text: "Edo State", correct: false},
      {text: "Delta State", correct: false},
      {text: "Akwa Ibom State", correct: true},
    ]
  }, 
  {
    question: "Baby frog is known as...",
       answers: [
      {text: "Baby Frog", correct:false},
      {text: "Froggy", correct: false},
      {text: "Kid", correct: false},
      {text: "Toadpole", correct: true},
    ]
  }, 
  {
    question: "Name a National bird in India?",
       answers: [
      {text: "Eagle", correct:false},
      {text: "Peacock", correct: true},
      {text: "Cock", correct: false},
      {text: "Vulture", correct: false},
    ]
  }, 
  {
    question: " How many continents are there in the world?",
       answers: [
      {text: "21 continents", correct:false},
      {text: "15 continents", correct: false},
      {text: "10 continents", correct: false},
      {text: "7 continents", correct: true},
    ]
  }, 
  {
    question: "Name the largest planet in the solar system",
       answers: [
      {text: "Earth", correct:false},
      {text: "Pluto", correct: false},
      {text: "Jupiter", correct: true},
      {text: "Saturn", correct: false},
    ]
  }, 
  {
    question: "Who won Big Brother in 2023?",
       answers: [
      {text: "Ilebaye Odiniya", correct:true},
      {text: "Ijeoma Otabor “Phyna”", correct: false},
      {text: "Hazel Onou “Whitemoney”", correct: false},
      {text: "Mercy Eke", correct: false},
    ]
  }, 
  {
    question: "What is the chemical symbol for tin?",
       answers: [
      {text: "H20", correct:false},
      {text: "Sn", correct: true},
      {text: "Tn", correct: false},
      {text: "Ni", correct: false},
    ]
  }, 
  {
    question: "Name the largest planet in the solar system",
       answers: [
      {text: "Earth", correct:false},
      {text: "Pluto", correct: false},
      {text: "Jupiter", correct: true},
      {text: "Saturn", correct: false},
    ]
  }, 
  {
    question: "What is the most expensive fruit in the world?",
       answers: [
      {text: "Orange", correct:false},
      {text: "Grapes", correct: false},
      {text: "Yubari King Melon", correct: true},
      {text: "Strawberry", correct: false},
    ]
  }, 
  {
    question: "How many bones are in the human body?",
       answers: [
      {text: "107", correct:false},
      {text: "115", correct: false},
      {text: "1000", correct: false},
      {text: "206", correct: true},
    ]
  }, 

];

let currentQuestionIndex = 0;
let score = 0;
// let timerIneterval;
let timeRemaining = 0




function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  // timeRemaining = totalTime; //callling startTimer () wheen starting the quiz
  nextBtn.innerHTML = "Next"
  shuffleArray(quizQuestions);
  showQuestion();
  // showQuestion() // starting ht timer when the start quiz begins
}

function showQuestion(){
  resetState();

  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


 //defining my array for answer labels (A, B, C, D)

//  const answerLabels = ["A", "B", "C", "D"];

let currentLabel = "A"

  // currentQuestion.answers.forEach(answers => {
  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button"); 
    // button.innerHTML = answers.text;
    button.innerHTML =  `${currentLabel}. ${answers.text}`; //this is where i have added label to the answer options.
    button.classList.add("btn");
    answerBtns.appendChild(button);

    if(answers.correct){
      button.dataset.correct = answers.correct
    }
    button.addEventListener("click", selectAnswer);


    // this is the increment label for the next answer

    currentLabel = String.fromCharCode(currentLabel.charCodeAt(0) + 1);
  });
};

function resetState(){
  nextBtn.style.display = "none";
  while(answerBtns.firstChild){
    answerBtns.removeChild(answerBtns.firstChild)
  }

}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect =selectedBtn.dataset.correct === "true"
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else {
    selectedBtn.classList.add("incorrect")
  }

  Array.from(answerBtns.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    };
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}



// adding function to handle timeout

// function handleTimeout(){
//   resetState();
//   questionElement.innerHTML = "Time's up! quiz has ended.";
//   showScore
// }

function showScore(){
  resetState();
  stopTimer(); // call the stoptmer to show when shpwing the score
  questionElement.innerHTML = `You score ${score} out of ${quizQuestions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextbutton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < quizQuestions.length){
    showQuestion();
  }else {
    showScore();
  }

}


nextBtn.addEventListener("click", () => {
  if( currentQuestionIndex < quizQuestions.length){
    handleNextbutton();
  }else {
    startQuiz();
  }
})


// function startQuiz(){
//   currentQuestionIndex = 0;
//   score = 0;
//   timeRemaining = totalTime;
//   timerElement.textContent = timeRemaining; // this casll the timer() when starting the quiz.
//   nextBtn.innerHTML = "Next";
//   shuffleArray(quizQuestions);
//   showQuestion();
//   startTimer(); //this start the timer when the quiz begins
// }

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
startQuiz();



// Set the quiz duration in seconds
const quizDurationInSeconds = 600; // 10 minutes

// Initialize the timer
timeRemaining = quizDurationInSeconds;
updateTimer();

// Set up the timer interval
const timerInterval = setInterval(() => {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateTimer();
  } else {
    // Quiz time is up, you can perform actions here
    clearInterval(timerInterval); // Stop the timer
    alert("Yoour Time's up!");
  }
}, 1000); // Update every 1 second

function updateTimer() {
  // Format the time in MM:SS
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Display the timer
  timerElement.innerText = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}



  




