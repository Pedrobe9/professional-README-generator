const fs = require("fs");
// Path module provides a way of working with directories and file paths
//const path = require('path');
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
    message: 'Enter the information required by the prompts. If anything does not apply, enter N/A.\nWhat is your project/application title?\n',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description for your project/application:\n',
  },
  {
    type: 'input',
    name: 'githubRepo',
    message: 'Write the URL of the GitHub repository where the application can be found:\n',
  },
  {
    type: 'input',
    name: 'deployed',
    message: 'Write the URL where the application can be found deployed:\n',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the steps to install the application:\n',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use the application, including examples:\n',
  },
  {
    type: 'input',
    name: 'screenshots',
    message: 'Provide a screenshot exemplifying the usage. Screenshot must be included in the directory "images" and the file name entered here:\n',
  },
  {
    type: 'input',
    name: 'altText',
    message: 'Provide alternative text descriptive of the screenshot:\n',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Provide information of your collaborators with links to their GitHub accounts:\n',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'It is good practice to include a license. If you need help choosing one, here you have some common open source licenses https://choosealicense.com/licenses/\nWhat type of license do you want to include in your application?\n',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter an email, so any issues can be reported to the user:\n',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:\n',
  },
  {
    type: 'input',
    name: 'badges',
    message: 'Include any badges to show credentials:\n',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List the features of your application:\n',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Write how anyone can contribute to your application:\n',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write tests for your application and provide examples on how to run them:\n',
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
