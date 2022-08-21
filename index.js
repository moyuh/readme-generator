//Packages:
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Prompts for the data to generate the README.md
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
    choices: ['apache','mit','no license used'],
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
//Generate a README.md file based off data from the above prompts
.then((data) => {
    generateMarkdown(data)

    fs.writeFile('README-template.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


