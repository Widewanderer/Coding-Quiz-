var mainText = document.querySelector("#main-text");
var answerButtons = document.querySelector("#buttons-q"); // works if I used created buttons?
var startButton = document.querySelector("#button-main");
var timer = document.querySelector("#timer");
var timeLeft = 60;

function startTimer() {
  setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
  }, 1000);
}
// Button features

// use function at start and end of quiz. Combine with event lister for initiate quiz & quiz end.
function buttonToggleHidden(element) {
  if (element.style.display === "hidden") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
    // element.hidden = true;
  }
}

// var button = document.createElement("button");
// button.innerText = ""; // insert text wtih

// Questions section
var questions = [
  {
    question:
      "Which function is used to add elements to the end of an array in JavaScript?",
    choices: ["append()", "push()", "add()", "extend"],
    answer: "push()",
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    choices: [
      "//This is a comment",
      "<!--This is a comment-->",
      "/* This is a comment */",
      "*! This is a comment !*",
    ],
    answer: "// This is a comment",
  },
  {
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    choices: [
      "To attach an event handler function to an HTML element",
      "To create a new HTML element dynamically",
      "To link external JavaScript files to an HTML page",
      " To execute a function repeatedly at a fixed time interval",
    ],
    answer: "To attach an event handler function to an HTML element",
  },
  {
    question:
      "What is the correct way to check if a variable 'x' is of type 'string' in JavaScript?",
    choices: [
      'typeof(x) === "string"',
      'x.typeOf === "string"',
      " x instanceof String",
      'x.type === "string"',
    ],
    answer: 'typeof(x) === "string"',
  },
  {
    question:
      "Which built-in method is used to sort elements in an array in JavaScript?",
    choices: ["arrange()", "order()", "sort()", "organize()"],
    answer: "sort()",
  },
  {
    question:
      "How can you prevent the default behavior of a link click using JavaScript?",
    choices: [
      "event.preventDefault()",
      "link.cancelDefault()",
      "stopDefaultAction()",
      "preventLinkClick()",
    ],
    answer: "event.preventDefault()",
  },
  {
    question:
      'In JavaScript, what is the purpose of the "try...catch" statement?',
    choices: [
      "To create loop and iterations",
      "To handle exceptions and errors",
      "To define conditional statements",
      "To declare variables with block scope",
    ],
    answer: "To handle exceptions and errors",
  },
  {
    question:
      "Which operator is used to concatenate two strings in JavaScript?",
    choices: ["&", "+", "||", "~~"],
    answer: "+",
  },
  {
    question:
      "What method is used to remove the last element from an array in JavaScript",
    choices: ["pop()", "shift()", "remove()", "slice()"],
    answer: "pop()",
  },
  {
    question: 'What does the "this" keyword refer to in JavaScript?',
    choices: [
      "The current date and time",
      "The global window object",
      "The HTML document itself",
      "The context where the function is called",
    ],
    answer: "The context where the function is called",
  },
];

// Button Events
var index = 0;
startButton.addEventListener("click", startQuiz);

// start quiz funtion
function startQuiz() {
  buttonToggleHidden(startButton);
  nextQuestion();
  startTimer();
}

function nextQuestion() {
  mainText.textContent = questions[index].question;
  // answerButtons.textContent= questions[index].choices[0];
  for (let i = 0; i < 4; i++) {
    var button = document.createElement("button");
    button.textContent = questions[index].choices[i];
    answerButtons.append(button);
    button.addEventListener("click", () => {
      index++;
      answerButtons.innerHTML = "";
      // is answer correct? if correct add 10 points to score, if wrong subtract 5 seconds from timer.      (update UI)

      nextQuestion();
    });
  }

  // button.addEventListener("click", choseWisely)
  //attach event listener to button variable on 'click' set = function
  // check anwer and use index +1
  // then call on funtion againg (next question)
  //apend the button in the varibale answerButtons    +++++
}

function chooseAQuestion() {}

// timer for countdown clock with event (loose 5 seconds for incorect answer)
// local storage for high scores
