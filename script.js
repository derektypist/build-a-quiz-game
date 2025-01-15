const questions = [
  {category: "Geography",
  question: "What is the capital of France?",
  choices: ["London", "Paris", "Berlin"],
  answer: "Paris"},
  
  {category: "Chemistry",
  question: "What is the chemical symbol of Calcium?",
  choices: ["Ca","Ci","Cl"],
  answer: "Ca"},
  
  {category: "Physics",
  question: "What is the SI unit of time?",
  choices: ["Second", "Minute", "Hour"],
  answer: "Second"},
  
  {category: "Maths",
  question: "What is the square root of 100?",
  choices: ["10","15","20"],
  answer: "10"},

  {category: "Celebrities",
  question: "Who is Susanna Reid?",
  choices: ["Programmer","TV Presenter","Jockey"],
  answer: "TV Presenter"},


  ];

  const questionObj = getRandomQuestion();
  const computerChoice = getRandomComputerChoice(questionObj.choices);

  // Functions
  function getRandomQuestion() {
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  function getRandomComputerChoice(choices) {
    
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getResults(questionObj,computerChoice) {
    return (computerChoice === questionObj.answer) ? "The computer's choice is correct!" : "The computer's choice is wrong. The correct answer is: " + questionObj.answer;
    
  }

  
  console.log(questionObj);
  
  console.log(computerChoice);
  console.log(getResults(questionObj,computerChoice));
  
