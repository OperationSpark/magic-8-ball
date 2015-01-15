Magic Eight Ball
=======================
A simple, but magical Node.js cli app demonstrating loading external data, leaning on 3rd party API, prompting the user for input, simple regular expressions, random number generation, and other basic JavaScript and Node.js features.

- [Installation](#user-content-installation)
- [Lesson Steps](#user-content-lesson-steps)    

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

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/npm-install-magic-8.png">

You'll see some test flying by on the command-line as some required files are installed... and...

Nice, you're in business...


## Lesson Steps

For our little project, we're gonna build the classic Magic Eight Ball app:  users will be able to ask the Magic Eight Ball a question about the future and the Magic Eight Ball will respond.

This brief app represents the full loop of a user experience: A startup message, being presented with a menu providing options, prompting the user for input, handling that input, and showing the user a response triggered by their input.

Note that **this app will run _on the command-line_**, and not in a web browser.

We've put some code in place for you, let's get started...

Open up the file at:

    app.js

### Initializing an App

Starting up an application often takes a few steps of:

* Importing some libraries of code.
* Loading some external data.
* Initializing some variables for use in our app.

#### API : Batteries Included
Built-in and 3rd party libraries of code, often called modules in JavaScript, are pre-written code that provide programmers with a lot of powerful programming features.  By using them, programmers don't have to reinvent the wheel each time they write a program and get a huge head-start on the amount of time it takes to produce appliations.

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
The menu API uses a technique called method chaining, which allows us to make several configuration API calls at the same time, seperating each with the `.` dot.  By this, we're able to setup several things on our menu in one statement.

Using the `makeMenu` API, we pass all the things required to make our menu: a message to prompt the user, the input validator we discussed above, and a message to warn the user if they provide invalid input.

Next, we use the `onInput` API to register for and handle the `input` event: Our menu is going to dispatch an `input` event each time the user makes a choice.  We'll handle that input with the function, `handleInput`, and this is what we're doing with the statement, `.onInput(handleInput);`  Notice we only passed the function - we _did not invoke_ the function here.  By passing the `handleInput` function as an object, the menu holds a reference to it, and when the `input` event happens, the menu will then execute the `handleInput` function.

This is a powerful concept in programming, generally referred to as a _callback_ function, where we pass a function to another process to be _called_ at a later time.

#### TODO 4 : Implement the Start Function

Ok, one more step before we run our app the first time.  Let's implement our start method, which we'll invoke _after_ initializing our variables.  Find **TODO 4**:

````javascript
function start(welcomeMessage) {
    // TODO 4 : Show the welcome message, followed by the menu //
    console.log(welcomeMessage);
    menu.show();
}
````

Here we're showing the user a welcome message, and presenting them with a menu, standard stuff when booting up an app.


Alrighty, let's try to run the app and see what happens.  To run the app, select the bash command-line in the Console View (the bottom window pane in Cloud9) and enter the command: `./app.js`

Like this:

<img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/run-from-bash.png">

You'll notice you can ask a question, but there's no response and the app just quits immediately, so we've got some work to do.  But our validator works!  Try asking a question with a lower case letter or entering numbers first?

<img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/validator.png">

Cool!  Let's move on!

#### TODO 5 Handle User Input

Our app quits if we do not handle valid input for the user, so let's go ahead and implement the function `handleInput`.  Find **TODO 5**:

````javascript
// other code ...
// TODO 5 : Handle the user's input from the menu prompt //
if (input === "q") return quit();
showResponse(randomNumberBetween(0, responses.length-1));
menu.show();
````
Intersting, we a <a href="https://github.com/OperationSpark/javascript-wiki/wiki/Conditional-Statements" target="_blank">conditional statement</a> to first check if the user has enter the letter `q`, use the `return` keyword, then call the quit() function.  The `return` keyword will cause the app to stop executing any more lines of code within the `handleInput` function, and _return early_.  This should allow us to quit the app.

If the input is not equal to `q`, the app doesn't execute the line of code containing the `return` statement, and we then call     `showResponse()` and show the menu again.

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

## Just The TODOs

### TODO 1 : Import Data

````javascript
// other code...

// TODO 1 import our data //
data = require('./data.json');

// other code...
````

&copy; Operation Spark 2015
