const fs = require("fs");
const inquirer = require("inquirer");
const todaysDate = new Date();
const year = todaysDate.getFullYear();

inquirer.prompt([
    {
        type: 'input',
        message: 'For licensing purposes, what is your name?',
        name: 'fullname'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description of the project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide installation instructions: ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide the guidelines for contributing to the project: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide instructions for testing the project: ',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select a license for your application.',
        name: 'license',
        choices: ['MIT', 'ISC', 'GNU', 'Apache']
    },

]).then(function (data) {
  let readme = 
    `# ${data.title}
    
    ${data.description}
    
## Table of Contents 
    (list links here)
    
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
    You can reach me at ${data.email}
    Visit my [GitHub] ${data.github}`

  fs.writeFile("good-readme.md", readme, function (err) {
    if (err) throw err;
    console.log(`You have successfully generated a good README file.`);
  });
});
