// https://img.shields.io/github/license/moyuh/readme-generator

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [{
inquirer
  .prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project, include what it is for and why you made it:',
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install your project? Provide step-by-step instructions',
},
{
    type: 'input',
    name: 'usage',
    message: 'What will your project be used for?',
},
{
    type: 'list',
    name: 'license',
    message: 'Which license was used for your project?',
    choices: ['apache','MIT','GNU','no license used'],
},
{
    type: 'input',
    name: 'contributer',
    message: 'Who has contributed to help make this project possible?',
},
{
    type: 'input',
    name: 'tests',
    message: 'How can you test your application?',
},
{
    type: 'input',
    name: 'githubURL',
    message: 'What is your github url?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
},
])
.then((data) => {
    generateMarkdown(data)

    fs.writeFile('README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
