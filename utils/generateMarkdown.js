function generateMarkdown(userResponse) {

  let tableOfContents = `## Table of Contents`;

  if (userResponse.installation !== '') { tableOfContents +=`
  *[Installation](#installation)`};

  if (userResponse.usage !=='') { tableOfContents += `
  *[Usage](#usage)`};

  if (userResponse.contributing !== '') { tableOfContents += `
  *[Contributin](#contributing)`};

  if (userResponse.tests !== '') { tableOfContents +=`
  *[Tests](#tests)`};

let markdown = 
`# ${userResponse.title}

## Description

${userResponse.description}

`

markdown += tableOfContents;

markdown += `
*[License](#License)`;

if (userResponse.installation !== '') {

  markdown += `
  ## Installation

  ${userResponse.installation}`
};

if (userResponse.usage !== '') {

  markdown +=
  `
  ## Usage

  ${userResponse.usage}`
};

if (userResponse.contributing !== '') {

  markdown += `
  ## Contributing

  ${userResponse.contributing}`
};

if(userResponse.tests !== '') {

  markdown += `
  ## Tests

  ${userResponse.tests}`
};

markdown += `
## License

${userResponse.license}`;

let developer =
`
---

## Questions?

for any questions you may contact me with the below information:

GitHub: [@${userResponse.username}](https://github.com/${userResponse.username})
`;

if (userResponse.email !== '') {

  developer +=
  `

  Email: ${userResponse.email}

  `};

  markdown += developer;


  return markdown;

}

module.exports = generateMarkdown;





// `
// # Code Quiz
// ​
// ## License
// ​
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br> License Link:<br> https://opensource.org/licenses/MIT
// ​
// ## Table of Contents
// ​
// [Author Name](#author-name) <br>
// [Deployed Page](#deployed-page) <br>
// [GitHub Repo](#github-repo) <br>
// [Project Description](#project-description)<br>
// [Installation](#installation)<br>
// [Usage](#usage)<br>
// [Test Instructions](#test-instructions)<br>
// [Contribution Guidelines](#contribution)<br>
// [Preview Image](#preview-image)<br>
// [GitHub username](#github-username)<br>
// [Contact Me!](#contact-me-with-questions)<br>
// ​
// ## Author Name
// ​
// Benjamin Stanfield
// ​
// ## Deployed Page
// ​
// https://doompeck.github.io/XXX
// ​
// ## GitHub Repo
// ​
// [code-quiz] https://github.com/Doompeck/XXX
// ​
// ## Project Description
// ​
// XXX
// ​
// ## Installation
// ​
// Click the deployment link above.
// ​
// ## Usage

// 1. XXXX

// ​
// ## Test Instructions
// ​
// n/a
// ​
// ## Contribution
// ​
// n/a
// ​
// ## Preview Image
// ​
// [![image](./assets/images/Java%20Quiz.gif)](./assets/images/Java%20Quiz.gif)
// ​
// ## GitHub userName
// ​
// [Doompeck](https://github.com/Doompeck)
// ​
// ## Contact me with questions
// ​
// towheadcreative@gmail.com
// `












// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// Breaking down the rendering of each part into it's own functions
// data.title
// data.description
// data.authorName
// etc.
// render the readme  to the output folder!

// going to pass the answers of the prompts into this function
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }



