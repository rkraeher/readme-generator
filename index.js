const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const todaysDate = new Date();
const year = todaysDate.getFullYear();

inquirer
  .prompt([
    {
      type: "input",
      message: "For licensing purposes enter your name:",
      name: "fullname",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a brief description of the project:",
      name: "description",
    },
    {
      type: "input",
      message: "Tell users how to install your application: ",
      name: "install",
    },
    {
      type: "input",
      message: "Describe how to use your application:",
      name: "usage",
    },
    {
      type: "input",
      message: "Offer guidelines for contributing to the project:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide instructions for testing the project: ",
      name: "tests",
    },
    {
      type: "list",
      message: "Select a license for your application. Use the arrow keys and press enter to select.",
      name: "license",
      choices: ["MIT", "ISC", "GNU", "Apache"],
    },
  ])
  .then(function (data) {
    const githubUrl = `https://github.com/${data.github}`;
    const readme = `# ${data.title}

## Description
    ${data.description}
    
## Table of Contents 
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
    
## Installation
${data.install}

## Usage
${data.usage}
    
## License 
${data.license}  
Copyright (c) ${year} ${data.fullname}
    
## Contributing
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
Email me: ${data.email}  
Visit my [GitHub](${githubUrl})`;

    fs.writeFile("README.md", readme, function (err) {
      if (err) throw err;
      console.log(
        `You have successfully generated a good README.md file. Please check the current directory for your new README.`
      );
    });
  });
