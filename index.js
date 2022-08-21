// Packages required for function
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

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
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "What is a description of your project?",
        name: 'project-description'
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
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Success! Readme.md has generated");
    })
}


// Main function is an async function that waits for inquirer prompts before moving forward.
async function init() {
    try {
    const userResponse = await inquirer.prompt(questions);

    const markdown = generateMarkdown(userResponse);

    // console.log(userResponse);
    writeToFile('ReadMe.md', markdown);

} catch (error) {
    console.log(error);
}
}
// Function call to initialize app
init();
