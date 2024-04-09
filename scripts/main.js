
function quiz(){
  window.location.assign("./quiz.html")
}
function results(){
  window.location.assign("./results.html")
}
function login(){
  window.location.assign("./main.html")
}


function saveObject()
{
  let savedUsername = document.forms["login-form"]["username"].value;
  console.log("The submitted username is: ", savedUsername);
  sessionStorage.setItem('username',savedUsername)
  return false;
}

function getSavedObject()
{
  let username = sessionStorage.getItem('username');

  console.log('This is what was retrieved: ', username )
}

  
//testing push
//testing 2
//testing pushing to main

const routes = {
  404: {
    template: "/pages/404.html",
    title: "404",
    description: "Page not found",
  },
  "/": {
    template: "/pages/main.html",
    title: "Login",
    description: "This is the Login page",
  },
  "/about": {
    template: "/pages/quiz.html",
    title: "About Us",
    description: "This is the about page",
  },
  "/contact": {
    template: "/pages/results.html",
    title: "Results",
    description: "This is the results page",
  },
};

const route = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", event.target.href);
  locationHandler();
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the urlRoutes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();

//Quiz logic: create an js object with values question, choices, answer
const quizData = [
  {
      question: "What is the capital of France?",
      choices: ["A. London", "B. Paris", "C. Rome", "D. Madrid"],
      correctAnswer: "B"
  },
  {
      question: "Who wrote 'Romeo and Juliet'?",
      choices: ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Mark Twain"],
      correctAnswer: "A"
  },
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  choicesElement.innerHTML = currentQuizData.choices.join('<br>');
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="choice"]:checked');
  if (!selectedOption) {
      alert('Please select an answer.');
      return;
  }

  const userAnswer = selectedOption.value;
  const currentQuizData = quizData[currentQuestion];
  if (userAnswer === currentQuizData.correctAnswer) {
      resultElement.innerText = 'Correct!';
  } else {
      resultElement.innerText = 'Wrong! The correct answer is ' + currentQuizData.correctAnswer;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      resultElement.innerText += ' Quiz completed!';
  }
}



loadQuestion();
