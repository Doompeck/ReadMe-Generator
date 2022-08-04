// Packages required for function
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Question Array
const questions = [
    {
        type: 'input',
        message: "What is you GitHub username?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is your repo name?",
        name: 'repo'
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "What is a description of your project?",
        name: 'project description'
    },
    {
        type: 'input',
        message: "Describe steps required to install for the Installation section(if applicable).",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide usage insstructions and examples of your project for the Usage sectrion",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project (if applicable).",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application with examples (if applicable).",
        name: 'tests'
    },{
        type: 'list',
        message: "Select a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// Function to write to file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,err => {
        if(err) {
            return console.log(err);
        }
        console.log("Success! Readme.md has generated");
    })
}


// Main function
function init() {
    inquirer.prompt(questions)
    .then((intruirerResponse, data) => {
        console.log("Generating Readme.md.");
        writeToFile();
    })
    .catch((err) => {
        console.log(err);
    })
   
}

// Function call to initialize app
init();
