const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
    rl.question("Which meal is your favourite? ", (answer2) => {
      rl.question("What's your favourite thing to eat for that meal? ", (answer3) => { 
        rl.question("Which sport is your absolute favourite? ", (answer4) => { 
          console.log(`${answer1}'s favourite food is ${answer3} for ${answer2}. His/her favorite sport is ${answer4}.`);
          rl.close();
        });
      });
    });
  });