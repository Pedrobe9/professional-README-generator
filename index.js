const fs = require("fs");
// Path module provides a way of working with directories and file paths
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// Util module provides access to some utility functions
const util = require('util');
// promisify takes a function following the common error-first callback style, i.e. taking a (err, value) => ... 
// callback as the last argument, and returns a version that returns promises.
const writeToFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the information required by the prompts. If anything does not apply, enter N/A.\nWhat is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description for your project:',
    },
    {
      type: 'input',
      name: 'deployed',
      message: 'Write the URL where the application can be found deployed:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the steps to install the application:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructuios on how to use the project, inclusing examples:'
    },
    {
      type: 'input',
      name: 'screenshots',
      message: 'Provide screenshot exemplifying the usage. Screenshot must be included in the directory "screeshots" and the file name entered here:'
    },
    {
      type: 'input',
      name: 'altText',
      message: 'Provide alternative text descriptive of the screenshot:'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide information of your collaborators with links to their GitHub accounts:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What type of license do you want to include in your project?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter an email, so any issues can be reported by the user:'
    }, 
    {
      type: 'input',
      name: 'badges',
      message: 'Include any badges to show credentials:'
    }, 
    {
      type: 'input',
      name: 'features',
      message: 'List the features of your project:'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Write how anyone can contribute to your project:'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Write tests for your application and provide examples on how to run them:'
    },
];

function promptUser() {
  return inquirer.prompt(questions);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program. async before a function makes the function return a promise
// Functions running in parallel with other functions are called asynchronous
async function init() {
  console.log("-----------------init funct-------------------");
  // try statement allows you to define a block of code to be tested for errors while it is being executed.
  try {
    // await makes a function wait for a Promise
    const data = await promptUser();
    const md = generateMarkdown(data);
    await writeToFileAsync('README.md', md);
    console.log('README.md file successfully written');
    // catch statement defines a code block to handle any error.
  } catch (err) {
    console.log(err);
  }

}

// function call to initialize program
init();
