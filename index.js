
const inquirer = require('inquirer');
const fs = require('fs');


    inquirer.prompt([
        {
            type:'input',
            message:'What is your Name?',
            name:'name',
        },
        {
            type:'input',
            message:'What is your location?',
            name:'location',
        },
        {
            type:'input',
            message:'Enter your bio?',
            name:'bio',
        },
        {
            type:'input',
            message:'Enter your LinkedIn URL',
            name:'linkedInUrl',
        },
        {
            type:'input',
            message:'Enter your GitHub Url?',
            name:'gitHubUrl',
        },
    ])
    .then((answers) =>
  {
      const myHtml =`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <heading>
              <h1>Heading</h1>
          </heading>
          <main>
              <div>
                  <p >
                      Name:${answers.name}
                  </p>
              
                  <p>
                      location:${answers.location}
                  </p>
             
                  <p>
                      bio:${answers.bio}
                  </p>
                  <p>
                      LinkedIn URL: ${answers.linkedInUrl}
                  </p>
                  <p>
                      GitHub URL:${answers.gitHubUrl}
                  </p>
              </div>
          </main>
      </body>
      </html>`;
      
      writeTheHTMLtoAFile(myHtml);
  }
    );
    

function writeTheHTMLtoAFile(myHtml){
fs.writeFile('index.html',myHtml,(err) =>
   err ? console.error(err) : console.log('Success!'));
}

