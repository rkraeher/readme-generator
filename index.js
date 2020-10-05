const fs = require("fs");
const inquirer = require("inquirer");

const todaysDate = new Date();
const year = todaysDate.getFullYear();

inquirer
  .prompt([
    {
      type: "input",
      message: "For licensing purposes enter your full name:",
      name: "fullname"
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github"
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email"
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Give a brief description of the project:",
      name: "description"
    },
    {
      type: "input",
      message: "Tell users how to install your application: ",
      name: "install"
    },
    {
      type: "input",
      message: "Describe how to use your application:",
      name: "usage"
    },
    {
      type: "input",
      message: "Offer guidelines for contributing to the project:",
      name: "contributing"
    },
    {
      type: "input",
      message: "Provide instructions for testing the project: ",
      name: "tests"
    },
    {
      type: "list",
      message: "Select a license for your application. Use the arrow keys and press enter to select.",
      name: "license",
      choices: ["MIT", "ISC", "GNU", "Apache"]
    },
  ])
  .then(function (data) {
    const githubUrl = `https://github.com/${data.github}`;
    let copyright;
    
    switch(data.license) {
        case "Apache":
            copyright = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "MIT":
            copyright = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case "ISC":
            copyright = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
            break;
        case "GNU":
            copyright = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        };
    
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
${copyright}  
Copyright (c) ${year} ${data.fullname}
    
## Contributing
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
If you have any questions about the repo you can email me at ${data.email}.  
Visit my [GitHub](${githubUrl}) to see more of my work.`;

    fs.writeFile("README.md", readme, function (err) {
      if (err) throw err;
      console.log(
        `You have successfully generated a good README.md file. Please check the current directory for your new README.`
      );
    });
  });
