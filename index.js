const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: '',
      },
      {
        type: 'input',
        name: 'location',
        message: '',
      },
      {
        type: 'input',
        name: 'hobby',
        message: '',
      },
      {
        type: 'input',
        name: 'food',
        message: '',
      },
      {
        type: 'input',
        name: 'github',
        message: '',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: '',
      },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
console.log("-----------------init funct-------------------");
const data = promptUser();
const md = generateMarkdown(data);
writeToFile('readme.md', data);
console.log('readme.md file successfully written');
}

// function call to initialize program
init();
