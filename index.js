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
    message: 'Enter the information required by the prompts. If anything does not apply, enter N/A.\nWhat is your project title?\n',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description for your project:\n',
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
    message: 'Provide instructions on how to use the project, including examples:\n',
  },
  {
    type: 'input',
    name: 'screenshots',
    message: 'Provide screenshot exemplifying the usage. Screenshot must be included in the directory "screeshots" and the file name entered here:\n',
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
    message: 'Do you want to include a license? If you need help choosing here you have some common open source licenses https://choosealicense.com/licenses/\nWhat type of license do you want to include in your project?\n',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    /*choices: ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]', 
    '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]', 
    '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]', 
    '[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'],*/
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter an email, so any issues can be reported by the user:\n',
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
    message: 'List the features of your project:\n',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Write how anyone can contribute to your project:\n',
  },
  {
    type: 'input',
    name: 'test',
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
