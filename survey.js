const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

const prettyLog = (profile) => {
  const {length} = profile;
  let asteriskLine = '';
  for (let i = 0; i < length; i++) {
    asteriskLine += '*';
  }
  console.log(`${asteriskLine}\n`);
  console.log(`${profile}\n`);
  console.log(`${asteriskLine}\n`);
};

const questionDecoration = '\n ==>  ';

rl.question(`What's your name? ${questionDecoration}`, (name) => {
  rl.question(`What's an activity you like doing? ${questionDecoration}`, (activity) => {
    rl.question(`What do you listen to while doing that? ${questionDecoration}`, (music) => {
      rl.question(`Do you prefer breakfast, lunch, or dinner? ${questionDecoration}`, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? ${questionDecoration}`, (food) => {
          rl.question(`Which sport is your absolute favourite? ${questionDecoration}`, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! ${questionDecoration}`, (superpower) => {
              const profile = `${name} likes to listen to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`;
              prettyLog(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});

