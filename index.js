var readLine = require("readline-sync");
const chalk = require("chalk");

let userName = readLine.question("Hi there! What's your name? > ");


console.log(chalk.blue("Welcome ") + userName + " !");
console.log("Let's play a general knowledge quiz game!");
console.log("\n");
console.log("***** Round One : Animals *****");
console.log("\n");

let score = 0; 

function playQuiz(ask, reply) {
  let userReply =  readLine.question(ask + " > ");

  if (userReply.toUpperCase() === reply.toUpperCase()) {
    console.log("Yes! That's right!");
    score = score +1;    
  } else {
    console.log("Awwww...... :( ");
  }
  console.log("Your Score: " + score);
  console.log("  ----------  ")
  console.log("\n");
}

let questionRoundOne = [{
    question: "What is the largest big cat in the world?",
    answer: "Tiger"
  } , {
    question: "Is dolphin a mammal? Yes or No",
    answer: "yes" 
  } , {
    question: "What is a group of lions called?",
    answer: "pride"
  }, {
    question: "What is the only mammal which can fly",
    answer: "bat"
  }, {
    question: "What type of animal is a poodle?",
    answer: "dog"
  }
]

for (let i=0  ; i< questionRoundOne.length; i++) {
  let currentPosition = questionRoundOne[i];
  // console.log(currentPosition); 
  playQuiz(currentPosition.question, currentPosition.answer);

  // console.log("--------")
}

console.log("Well Done! Let's play the second round");
console.log("\n");
console.log("***** Round Two : Geography *****");
console.log("\n");


let questionRoundTwo = [{
    question: "What is the largest country in the world? ",
    answer: "Russia"
  } , {
    question: "On which city is the river Thames? ",
    answer: "London" 
  } , {
    question: "In which city would you find the Eiffel Tower? ",
    answer: "Paris"
  }, {
    question: "In which country would you find the Leaning Tower of Pisa? ",
    answer: "Italy"
  }, {
    question: "Which is the biggest desert in the world? ",
    answer: "Sahara"
  } , {
    question: "What is the longest river in the world? ",
    answer: "nile"
  }, {
    question: " Mount Everest lies in which mountain range? ",
    answer: "Himalaya"
  }, {
    question: "What is the capital city of Spain? ",
    answer: "Madrid"
  }, {
    question: "What is the hottest continent on Earth?",
    answer: "Africa"
  }, {
    question: "Name the country whose capital city is Ottawa?",
    answer: "Canada"
  }]

  for (let i = 0; i < questionRoundTwo.length; i++) {
    let currentPosition = questionRoundTwo[i];
    playQuiz(currentPosition.question, currentPosition.answer);
  }

// console.log("\n");
console.log("YAY! Round two complete! Good Job");
console.log("Your score: " + score);

console.log("\n");
// console.log("\n");
console.log("***** Round Three : Science *****");
console.log("\n");

let questionRoundThree = [{
    question: "Which planet is nearest to the Earth? ",
    answer: "Venus"
  } , {
    question: "The wire inside an electric bulb is known as the what? ",
    answer: "filament" 
  } , {
    question: "When light bends as it enters a different medium the process is known as what? ",
    answer: "refraction"
  }, {
    question: "What is the first name of the famous scientist who gave us Newton’s three laws of motion? ",
    answer: "Issac"
  },  {
    question: "COVID 19 is a type of ______.", 
    answer: "virus"
  }, {
    question: "Botnay is the study of what? ",
    answer: "plants"
  }, {
    question: "Sun is a planet. Yes or no? ",
    answer: "no"
  }, {
    question: "What planet is known as the red planet?",
    answer: "mars"
  }, {
    question: "Name the longest bone in human body",
    answer: "femur"
  }]

for (i=0; i< questionRoundThree.length; i++) {
  let currentPosition = questionRoundThree[i];
  playQuiz(currentPosition.question, currentPosition.answer);
}

console.log("Well Played!"); 
// console.log("Your final score is: "+ score);



let highScore = [{
  player: "Benedict",
  score: 23
  }, {
  player: "Ramyaa",
  score: 20
 }, {
   player: "Lauren",
   score: 18
}]



console.log("Your FINAL SCORE:" + score);
console.log("\n");

if (score >= highScore[0].score ){
  console.log("You've beaten the highest scorer");
} else {
  console.log("Checkout highscores: ");
  console.log(highScore); 
}

console.log("If you have a high score. Please send us a screenshot of your score and we will update your name");


console.log("Game Over! Thank you for playing");