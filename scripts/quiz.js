//Quiz logic: create a js object with values question, choices, answer
// Quiz data structure
const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["A. London", "B. Paris", "C. Rome", "D. Madrid"],
      correctAnswer: "B. Paris"
    },
    {
      question: "What is the capital of the US?",
      choices: ["A. Washington D.C", "B. Paris", "C. Rome", "D. Madrid"],
      correctAnswer: "A. Washington D.C"
    },
    {
      question: "What is the capital of England?",
      choices: ["A. Washington D.C", "B. Paris", "C. London", "D. Madrid"],
      correctAnswer: "C. London"
    },
    {
      question: "What is the capital of Spain?",
      choices: ["A. Washington D.C", "B. Paris", "C. London", "D. Madrid"],
      correctAnswer: "D. Madrid"
    },
  ];
  
  // Variables and elements
  // Variables and elements
let currentQuestion = 0;
let selectedChoice = null; // Added variable to track selected choice
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

// Function to load question
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  questionElement.classList = 'question'
  choicesElement.innerHTML = "";
  currentQuizData.choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    choiceElement.className = 'choiceButton';
    choiceElement.onclick = () => selectChoice(choiceElement); // Changed to selectChoice
    choicesElement.appendChild(choiceElement);
  });
}

// Function to select choice
function selectChoice(choiceElement) {
  // Reset previous selected choice's style
  if (selectedChoice) {
    selectedChoice.classList.remove('selected');
  }
  // Highlight the selected choice
  selectedChoice = choiceElement;
  selectedChoice.classList.add('selected');
}

// Function to check answer
// Function to check answer
function checkAnswer() {
    if (!selectedChoice) {
      alert('Please select an answer.');
      return;
    }
    
    const currentQuizData = quizData[currentQuestion];
    const answer = selectedChoice.textContent;
    if (answer === currentQuizData.correctAnswer) {
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect. The correct answer is: " + currentQuizData.correctAnswer;
    }
    // Show result even on last question
    resultElement.style.display = 'block';
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      selectedChoice.classList.remove('selected'); // Reset selected choice
      loadQuestion();
    } else {
      choicesElement.innerHTML = "";
      // Hide submit button on last question
      document.querySelector('button').style.display = 'none';
    }
  }
  

// Initial load
loadQuestion();
