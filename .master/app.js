#!/usr/bin/env node

var 
    view= require('cli-view'),
    fs = require('fs'),
    file = __dirname + '/responses.json',
    responses = [],
    menuPrompt = 'Ask the magic eight ball a question (q to quit)',
    inputValidator = /^[A-Z].+(\?)|q$/,
    warning = 'Whoa now, that doesn\'t seem like a proper question:\n\
        We must be polite to the magic eight ball!\n\
        Please make certain you start your question with a capital \
        and end it with a question mark.\n\
        For example, \"Will I win the lottery?\". Try again.',
    welcomeMessage = 'Magic Eight Ball',
    
    menu = view
        .makeMenu(menuPrompt, inputValidator, warning)
        .onInput(function (input) {
            if (input === "q") return quit();
            showResponse(randomNumberBetween(0, responses.length-1));
            menu.show();
        });
    
console.log(welcomeMessage);

fs.readFile(file, 'utf8', function (err, data) {
  if (err) { return onErr(err); }
  data = JSON.parse(data);
  for (var index in data.responses) {
      responses.push(data.responses[index].value);
  }
  menu.show();
});

function showResponse(index) {
	console.log('The Magic Eight Ball responds: ' + responses[index]);
}

function randomNumberBetween(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function quit() {
  console.log('Thanks for using The Magic Eight Ball!');
  process.exit(0);
}

function onErr(err) {
	console.log(err);
	return 1;
}


            // switch (input) {
            //   case "q":
            //     quit();
            //     break;
            //   default:
            //     showResponse(randomNumberBetween(0, responses.length-1));
            //     menu.show();
            //     break;
            // }