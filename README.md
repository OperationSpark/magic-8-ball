Magic Eight Ball
=======================
A simple, but magical Node.js cli app demonstrating loading external data, leaning on 3rd party API, prompting the user for input, simple regular expressions, random number generation, and other basic JavaScript and Node.js features.

**Table of Contents**

- [Magic Eight Ball](#magic-eight-ball)
  - [Installation](#installation)
  - [Overview](#overview)
    - [Specs](#specs)
    - [Entering Code](#entering-code)
    - [Type of App : CLI](#type-of-app--cli)
  - [Lesson Steps](#lesson-steps)
    - [Initializing an App](#initializing-an-app)
      - [API : Batteries Included](#api--batteries-included)
      - [Data](#data)
      - [TODO 1 : Import Data](#todo-1--import-data)
      - [Variables](#variables)
      - [TODO 2 : Pluck the Response Data](#todo-2--pluck-the-response-data)
      - [TODO 3 : Create the App Menu](#todo-3--create-the-app-menu)
    - [Implementing the App](#implementing-the-app)
      - [TODO 4 : Implement the Start Function](#todo-4--implement-the-start-function)
      - [TODO 5 : Handle User Input](#todo-5--handle-user-input)
      - [TODO 6 : Show The Magic Eight Ball Response](#todo-6--show-the-magic-eight-ball-response)
      - [TODO 7 : Implement Quitting](#todo-7--implement-quitting)
  - [Just Code TODOs](#just-code-todos)
    - [TODO 1 : Import Data](#todo-1--import-data-1)
    - [TODO 2 : Pluck the Response Data](#todo-2--pluck-the-response-data-1)
    - [TODO 3 : Create the App Menu](#todo-3--create-the-app-menu-1)
    - [TODO 4 : Implement the Start Function](#todo-4--implement-the-start-function-1)
    - [TODO 5 : Handle User Input](#todo-5--handle-user-input-1)
    - [TODO 6 : Show The Magic Eight Ball Response](#todo-6--show-the-magic-eight-ball-response-1)
    - [TODO 7 : Implement Quitting](#todo-7--implement-quitting-1)
  - [Just Code TODOs in Google Presentation](#just-code-todos-in-google-presentation)

## Installation

Create a new Cloud9 workspace and clone the project from github.com:

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace":
Select "Clone From URL":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/clone-new-workspace.png">

2. In the "Source URL" form input, copy and paste in the following URL:

        https://github.com/OperationSpark/magic-8-ball.git

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/paste-clone-url.png">

3. In the environment selection box, select "Node":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/select-node-env.png">

4. Click the green button "Create".

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/click-create.png">

5. Wait for the workspace to finish spooling (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar):

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/workspace-spooling.png">

6. Once the workspace is completed, click the green button, "START EDITING".

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/start-editing.png">

7. Now, when the workspace is loaded, select the command-line in the bottom window pane, and enter the command `npm install`, then press `Enter`, like this:

    <img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/npm-install-magic-8.png">

You'll see some test flying by on the command-line as some required files are installed... and...

Nice, you're in business...

## Overview

### Specs

For our little project, we're gonna build the classic Magic Eight Ball app:  users will be able to ask the Magic Eight Ball a question about the future and the Magic Eight Ball will respond.

This brief app represents the full loop of a user experience: A startup message, being presented with a menu providing options, prompting the user for input, handling that input, and showing the user a response triggered by their input.

### Entering Code

As we work through the app, you'll find `// TODO //` notes in our `app.js` file, and _under_ these `TODO` lines is where you'll enter the code we need to type.  It's important you enter the code you need to type for the step under these `TODO` place markers, because code is executed in a particular order.

So, to complete a lesson step, _find_ the `TODO` place marker in the appropriate JavaScript file:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/find-todo.png">

...then put your cursor on the line below the `TODO`, and enter the code from the current lesson step:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/todo-done.png">

Sweet!

### Type of App : CLI

Note that **this app will run _on the command-line_**, and not in a web browser.


## Lesson Steps

We've put some code in place for you, let's get started...

Open up the file at:

    app.js

### Initializing an App

Starting up an application often takes a few steps of:

* Importing some libraries of code.
* Loading some external data.
* Initializing some variables for use in our app.

#### API : Batteries Included
Built-in and 3rd party libraries of code, often called modules in JavaScript, are pre-written code that provide programmers with a lot of powerful programming features.  By using them, programmers don't have to reinvent the wheel each time they write a program and get a huge head-start on the amount of time it takes to produce applications.

To use these modules or libraries of code, developers _only_ need to know the module's API - Application Programming Interface.  That means, we need to know what inputs to provide to get the output or behaviour we want.  This is a powerful concept, because we don't need to know how this library functions on the inside, only how to use it.  It's similar to the fact that you don't need to know how to build a fuel-injection system, or even how they work, to be able to start and drive a car.  We're leaning on the powerful minds and work of others.

You'll see at the top of our `app.js` file, we've imported a few useful modules:

* The common and very powerful _lodash_ module, effective for working with data collections
* The Operation Spark module, _cli-view_, which we wrote to help build our command-line games and apps.

Modules expose their API in the form of function definitions, and we can execute those functions, passing any required arguments, and handling the results returned.

For example, from our data, we're going to need to pluck out all of the Magic Eight Ball responses.  The _lodash_ library has a `pluck` API, and you'll use it to reach into our data and pluck-out the Magic Eight Ball responses.
***

#### Data
When writing applications, it is very good practice to separate code, the app's logic, from data used by the app.

Storing data outside of an application and loading it into an application at _runtime_ is advantageous for many reasons:

* We can persist the data when the application is not running.
* We can change the value of the data at anytime, without having to run the app or change the code.
* We can change how or where we've stored the data, and the app need not know about the change.

#### TODO 1 : Import Data

In our app, all of the values we want to display to our users are stored in an external JSON file.  JSON stands for <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JavaScript Object Notation</a>, and it's a means by which we can store and therefore persist standard JavaScript objects in a text file.  We can then _load_ that text file into the app, and resuscitate our data.

Let's import our external data.  Find **TODO**, and import our app's data:

````javascript
// other code...

// TODO 1 import our data //
data = require('./data.json');

// other code...
````
***
#### Variables
Variables represent the _things_ in our app - the things with which our app will do stuff.

In our awesome Magic Eight Ball game, you'll see at the top of the file, we've declared three variables we'll use in our app, `inputValidator`, `responses`, and `menu`.

The `inputValidator` is set to a <a href="http://en.wikipedia.org/wiki/Regular_expression" target="_blank">regular expression</a>, a special feature of most programming languages that use a sequence of characters to define search patterns, mainly for use in pattern matching with strings, like find and replace operations.  We'll use the `inputValidator` with our app's menu to to ensure the user provides valid input.  We'll learn more about them in a later lesson, but here's what ours looks like:

```javascript
inputValidator = /^[A-Z].+(\?)|q$/;
```

Our validator regular expression checks the input from our user, and makes sure the input is a valid question and properly formatted sentence that begins with an uppercase word.  So, a questions like, `will I get a job at Google`, fails our validation rule, but, `Will I get a job at Google?` passes our validation rule.

The other two variables are `responses`, which will be an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array</a> of Magic Eight Ball responses, and `menu`, an object that allows us to prompt the user for input.

In writing code, we often see the pattern of declaring, initializing, then using variables.  We declared our variables, but let's go ahead and initialize them in our `init()` function.

#### TODO 2 : Pluck the Response Data

Find **TODO 2**:

````javascript
// other code...

// TODO 2 : Use the lodash pluck API to pull out all magic 8 ball responses //
responses = _.pluck(data.responses, 'text');

// other code...
````

#### TODO 3 : Create the App Menu

Nice, while we're at it, let's initialize our menu.  Find **TODO 3**:

````javascript
// other code...

// TODO 3 : Using our loaded data, create the game menu //
menu = view
    .makeMenu(data.msgMenuPrompt, inputValidator, data.msgWarning)
    .onInput(handleInput);

// other code...
````
The menu API uses a technique called method chaining, which allows us to make several configuration API calls at the same time, separating each with the `.` dot.  By this, we're able to set-up several things on our menu in one statement.

Using the `makeMenu` API, we pass all the things required to make our menu: a message to prompt the user, the input validator we discussed above, and a message to warn the user if they provide invalid input.

Next, we use the `onInput` API to register for and handle the `input` event: Our menu is going to dispatch an `input` event each time the user makes a choice.  We'll handle that input with the function, `handleInput`, and this is what we're doing with the statement, `.onInput(handleInput);`  Notice we only passed the function - we _did not invoke_ the function here.  By passing the `handleInput` function as an object, the menu holds a reference to it, and when the `input` event happens, the menu will then execute the `handleInput` function.

This is a powerful concept in programming, generally referred to as a _callback_ function, where we pass a function to another process to be _called_ at a later time.

### Implementing the App

#### TODO 4 : Implement the Start Function

Ok, one more step before we run our app the first time.  Let's implement our start method, which we'll invoke _after_ initializing our variables.  Find **TODO 4**:

````javascript
// other code...

// TODO 4 : Show the welcome message, followed by the menu //
console.log(welcomeMessage);
menu.show();
    
// other code...
````

Here we're showing the user a welcome message, and presenting them with a menu, standard stuff when booting up an app.


Alrighty, let's try to run the app and see what happens.  To run the app, select the bash command-line in the Console View (the bottom window pane in Cloud9) and enter the command: `./app.js`

Like this:

<img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/run-from-bash.png">

You'll notice you can ask a question, but there's no response and the app just quits immediately, so we've got some work to do.  But our validator works!  Try asking a question with a lowercase letter or entering numbers first?

<img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/validator.png">

Cool!  Let's move on!

#### TODO 5 : Handle User Input

Our app quits if we do not handle valid input for the user, so let's go ahead and implement the function `handleInput()`.  Find **TODO 5**:

````javascript
// other code ...

// TODO 5 : Handle the user's input from the menu prompt //
if (input === "q") return quit();
showResponse(randomNumberBetween(0, responses.length-1));
menu.show();

// other code...
````

Intersting, we use a <a href="https://github.com/OperationSpark/javascript-wiki/wiki/Conditional-Statements" target="_blank">conditional statement</a> to first check if the user has entered the letter `q`.  If they have, we execute the line of code `return quit();`.

The `return` keyword will cause the app to stop executing any more lines of code _within_ the `handleInput()` function, and _return early_.  This should allow us to quit the app.

If the user's input is _not_ equal to `q`, the app doesn't execute the line of code containing the `return` statement, and we then call `showResponse()` and show the menu again.

Notice that, _before_ actually invoking the showResponse() method, as an argument to the showResponse() method, we're passing in the result of another invocation, this one to the randomNumberBetween() method, where we ask for a random number between zero (remember, arrays are zero-indexed, so the first element in the responses Array is at index 0) and the last possible index in the responses Array, which we calculate by asking for the length of the Array, minus one.  Why minus one here?  To offset for the fact, as previously mentioned, that arrays are zero indexed, so if we just took the length of the Array as the high end of our range, we'd be out of bounds by one.

Great stuff, but we still need to show the response to the user...

#### TODO 6 : Show The Magic Eight Ball Response

We've randomly selected a number within the range of our responses Array.  We'll now use that number to pull out a response from the responses Array and print it to the screen.  Find **TODO 6**:

````javascript
// other code ...

// TODO 6 : Pull out a random response from the Array of responses //
console.log(data.msgResponsePrefix + responses[index]);

// other code ...
````

**Run the App!**

Go ahead and run the app again now:

<img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/response.png">

Alrighty, this looks more like an app!  Our Magic 8 Ball responds - though don't tell our user we're merely randomly selecting the response!

#### TODO 7 : Implement Quitting

Ok, one final touch, we need to handle the user's option to _quit_ the app!  Let's implement our `quit()` function.  Find **TODO 7**:

````javascript
// other code ...

// TODO 7 : Show a exit message, then quit the app //
console.log(data.msgQuit);
process.exit(0);
    
// other code ...
````

Here, we're showing the user an exit message, pretty standard UX, and then calling `process.exit()`, which tells Node.js to quit! Passing the value `0` tells bash that the app quit without error. 

**Run the App!**

Super, let's run the app one last time!

<img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/response.png">

Hmm, a good time to quit!  But we have our awesome Magic Eight Ball app!

***

## Just Code TODOs

### TODO 1 : Import Data

````javascript
// other code...

// TODO 1 import our data //
data = require('./data.json');

// other code...
````

### TODO 2 : Pluck the Response Data

````javascript
// other code...

// TODO 2 : Use the lodash pluck API to pull out all magic 8 ball responses //
responses = _.pluck(data.responses, 'text');

// other code...
````

### TODO 3 : Create the App Menu

````javascript
// other code...

// TODO 3 : Using our loaded data, create the game menu //
menu = view
    .makeMenu(data.msgMenuPrompt, inputValidator, data.msgWarning)
    .onInput(handleInput);

// other code...
````

### TODO 4 : Implement the Start Function

````javascript
// other code...

// TODO 4 : Show the welcome message, followed by the menu //
console.log(welcomeMessage);
menu.show();
    
// other code...
````

### TODO 5 : Handle User Input

Our app quits if we do not handle valid input for the user, so let's go ahead and implement the function `handleInput()`.  Find **TODO 5**:

````javascript
// other code ...

// TODO 5 : Handle the user's input from the menu prompt //
if (input === "q") return quit();
showResponse(randomNumberBetween(0, responses.length-1));
menu.show();

// other code...
````

### TODO 6 : Show The Magic Eight Ball Response

````javascript
// other code ...

// TODO 6 : Pull out a random response from the Array of responses //
console.log(data.msgResponsePrefix + responses[index]);

// other code ...
````

### TODO 7 : Implement Quitting

````javascript
// other code ...

// TODO 7 : Show a exit message, then quit the app //
console.log(data.msgQuit);
process.exit(0);
    
// other code ...
````

## Just Code TODOs in Google Presentation

<a href="https://docs.google.com/presentation/d/1Dy8eeV5X0UxDyuqTS-n0IIcxK8qR7-z1N_Ite1C5j7k/edit?usp=sharing" target="_blank">Code Presentation</a>

&copy; Operation Spark 2015
