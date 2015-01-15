#!/usr/bin/env node

/*
 * IMPORT MODULES **************************************************************
 */
var 
    _ = require('lodash'),
    view = require('cli-view');
    
/*
 * LOAD DATA *******************************************************************
 */
// TODO 1 : Load our data //
var data = require('./data.json');


/*
 * VARIABLE DECLARATION ********************************************************
 */
var 
    inputValidator,
    responses,
    menu;

/*
 * INITIALIZATION **************************************************************
 */
init();
start(data.msgWelcome);

function init() {
    inputValidator = /^[A-Z].+(\?)|q$/;
    
    // TODO 2 : Use the lodash pluck API to pull out all magic 8 ball responses //
    responses = _.pluck(data.responses, 'text');
    
    // TODO 3 : Using our loaded data, create the game menu //
    menu = view
        .makeMenu(data.msgMenuPrompt, inputValidator, data.msgWarning)
        .onInput(handleInput);
}


/*
 * APPLICATION *****************************************************************
 */
 
function start(welcomeMessage) {
    // TODO 4 : Show the welcome message, followed by the menu //
    console.log(welcomeMessage);
    menu.show();
}

function handleInput(input) {
    // TODO 5 : Handle the user's input from the menu prompt //
    if (input === "q") return quit();
    showResponse(randomNumberBetween(0, responses.length-1));
    menu.show();
}

function showResponse(index) {
    // TODO 6 : Pull out a random response from the Array of responses //
    console.log(data.msgResponsePrefix + responses[index]);
}

function quit() {
    // TODO 7 : Show a exit message, then quit the app //
    console.log(data.msgQuit);
    process.exit(0);
}

function randomNumberBetween(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function onErr(err) {
	console.log(err);
	return 1;
}
