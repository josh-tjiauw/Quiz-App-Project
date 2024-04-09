
//Quiz logic: create a js object with values question, choices, answer
// Quiz data structure
const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["A. London", "B. Paris", "C. Rome", "D. Madrid"],
    correctAnswer: "B. Paris",
  },
  {
    question: "What is the capital of the US?",
    choices: ["A. Washington D.C", "B. Paris", "C. Rome", "D. Madrid"],
    correctAnswer: "A. Washington D.C",
  },
  {
    question: "What is the capital of England?",
    choices: ["A. Washington D.C", "B. Paris", "C. London", "D. Madrid"],
    correctAnswer: "C. London",
  },
  {
    question: "What is the capital of Spain?",
    choices: ["A. Washington D.C", "B. Paris", "C. London", "D. Madrid"],
    correctAnswer: "D. Madrid",
  },
];

// Variables and elements
// Variables and elements
let currentQuestion = 0;
let selectedChoice = null; // Added variable to track selected choice
let correctAnswerCount = 0;
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");

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
    selectedChoice.classList.remove("selected");
  }
  // Highlight the selected choice
  selectedChoice = choiceElement;
  selectedChoice.classList.add("selected");
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
    correctAnswerCount++;
  } else {
    resultElement.textContent = "Incorrect. The correct answer is: " + currentQuizData.correctAnswer;
  }
  
  // Increment question index
  currentQuestion++;

  // Check if there are more questions
  if (currentQuestion < quizData.length) {
    // More questions: prepare UI for the next question
    selectedChoice.classList.remove("selected"); // Reset selected choice
    resultElement.style.display = "block"; // Optional: Show result feedback immediately
    loadQuestion();
  } else {
    // No more questions: finish quiz and show results
    choicesElement.innerHTML = ""; // Clean up choices
    document.querySelector("button").style.display = "none"; // Hide the submit button

    // Calculate the final score
    let quizScore = Math.round((correctAnswerCount / quizData.length) * 100);
    // Store the score in localStorage
    localStorage.setItem('quizScore', quizScore);
    console.log(quizScore);

    // Redirect to results.html or update the UI here
    window.location.href = 'results.html'; // Redirect to the results page
  }
}

// Initial load
loadQuestion();
