const fs = require("fs");
const inquirer = requier("inquirer");

inquirer.prompt([
    
]).then(function (data) {
  console.log(data);

  let readme = 
    `# ${title}

    ## ${description}
    
    ## ${table}
    
    ## ${install}
    
    ## ${usage}
    
    ## ${license}
    
    ## ${contributing}
    
    ## ${tests}
    
    ## ${questions}`

  fs.writeFile("README.md", readme, function (err) {
    if (err) throw err;
    console.log(`You have successfully generated a good README file.`);
  });
});
