const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);

// teamArray contains all answers from inquirer prompts below.
const teamArray = []

//fullArray contains pieces of script to add together for template.
const fullArray = []

// Base Questions for new team/team manager.
inquirer.prompt([

    {
        type: "input",
        name: "teamManagersName",
        message: "Please enter the name of the team manager.",
    },

    {
        type: "input",
        name: "employeeID",
        message: "Please enter the ID of the team manager.",
    },

    {
        type: "input",
        name: "emailAddress",
        message: "Please enter the email address of the team manager.",
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number of the team manager.",
    },

    // appends answers to Manager.js
]).then(answers => {
    const managerAppend = new Manager(answers.teamManagersName, answers.employeeID, answers.emailAddress, answers.officeNumber)
    teamArray.push(managerAppend)

    // variable containing template for team manager portion of html template.
    var managersCard = (`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title"> ${answers.teamManagersName}</h5>
  <h5 class="card-title"> ${answers.teamManagersName}</h5>
  <p class="card-title">${answers.employeeID}</p>
  <p class="card-text">${answers.emailAddress}</p>
  <p class="card-text">${answers.officeNumber}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`)

    fullArray.push(managersCard)


    // runs teamCreator function which asks user if they would like to add any more employees to the team.
    teamCreator()
})

// Houses teamCreator function which asks user if they would like to add any more employees to the team.
teamCreator = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "className",
            message: "Would you like to add anyone else to this team?",
            choices: ["Engineer", "Intern", "I am finished adding team members!"]
        }


    ]).then(answers => {
        switch (answers.className) {
            case "Engineer":
                engineerPrompt()
                break;
            case "Intern":
                internPrompt()
                break;
            case "I am finished adding team members!":
                fs.writeFileSync('../Team-Profile-Generator/dist/Team.html', HTMLTemplate());
                // console.log(fullArray);
                console.log(teamArray);
                break;
            default:

        }
    })


    // Contains inquirer questions that populate when "Engineer" is selected in the teamCreator function.
    function engineerPrompt() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineersName",
                message: "Please enter the name of the engineer.",
            },

            {
                type: "input",
                name: "engineersID",
                message: "Please enter the ID of the engineer.",
            },

            {
                type: "input",
                name: "engineersemailAddress",
                message: "Please enter the email address of the engineer.",
            },

            {
                type: "input",
                name: "gitHubUser",
                message: "Please enter the github username of the engineer.",
            },


// appends answers to Engineer.js            
]).then(answers => {
const engineerAppend = new Engineer(answers.engineersName, answers.engineersID, answers.engineersemailAddress, answers.gitHubUser)
teamArray.push(engineerAppend)

            var engineerCard = (`<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title"> ${answers.engineersName}</h5>
                          <p class="card-title">${answers.engineersemployeeID}</p>
                          <p class="card-text">${answers.engineersemailAddress}</p>
                          <p class="card-text">${answers.gitHubUser}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>`)

            fullArray.push(engineerCard)


// runs teamCreator function which asks user if they would like to add any more employees to the team.                      
teamCreator()
})
}
}

// Contains inquirer questions that populate when "Intern" is selected in the teamCreator function.           
function internPrompt() {
    inquirer.prompt([

        {
            type: "input",
            name: "internsName",
            message: "Please enter the name of the Intern.",
        },

        {
            type: "input",
            name: "internsID",
            message: "Please enter the ID of the Intern.",
        },

        {
            type: "input",
            name: "internsemailAddress",
            message: "Please enter the email address of the Intern.",
        },

        {
            type: "input",
            name: "school",
            message: "Please enter the School of the Intern.",
        },


// appends answers to Intern.js  
]).then(answers => {
const internAppend = new Intern(answers.internsName, answers.internsID, answers.internsemailAddress, answers.school)
teamArray.push(internAppend)

        var internCard = (`<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title"> ${answers.internsName}</h5>
                          <p class="card-title">${answers.internsID}</p>
                          <p class="card-text">${answers.internsemailAddress}</p>
                          <p class="card-text">${answers.school}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>`)

        fullArray.push(internCard)


// runs teamCreator function which asks user if they would like to add any more employees to the team.                        
teamCreator()
})
}

// contains HTML Template
const HTMLTemplate = () => {
    return `                        
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
<div class="row header"> My Team </div>
<div class="row">
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title"> ${teamArray[0].name}</h2>
      <h5 class="card-title"> Manager </h5>
      <p class="card-title">ID: ${teamArray[0].id}</p>
      <p class="card-text">Email: <a href="mailto: ${teamArray[0].email}">${teamArray[0].email}</a></p>
      <p class="card-text">Office Number: ${teamArray[0].officeNumber}</p>
    </div>
    </div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title"> ${teamArray[1].name}</h2>
      <h5 class="card-title"> Engineer </h5>
      <p class="card-title">ID: ${teamArray[1].id}</p>
      <p class="card-text">Email: <a href="mailto: ${teamArray[1].email}">${teamArray[1].email}</a></p>
      <p class="card-text">GitHub Username: teamArray[2]</p>
    </div>
  </div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title"> ${teamArray[2].name}</h2>
      <h5 class="card-title"> Engineer </h5>
      <p class="card-title">ID: ${teamArray[2].id}</p>
      <p class="card-text">Email: <a href="mailto: ${teamArray[2].email}">${teamArray[2].email}</a></p>
      <p class="card-text">GitHub Username: teamArray[2].</p>
    </div>
  </div>
  </div>
<div class="row">
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title"> ${teamArray[3].name}</h2>
      h5 class="card-title"> Engineer </h5>
      <p class="card-title">ID: ${teamArray[2].id}</p>
      <p class="card-text">Email: <a href="mailto: ${teamArray[2].email}">${teamArray[2].email}</a></p>
      <p class="card-text">GitHub Username: teamArray[2].</p>
    </div>
  </div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title"> ${teamArray[4].name}</h2>
      <h5 class="card-title"> Intern </h5>
      <p class="card-title">ID: ${teamArray[4].id}</p>
      <p class="card-text">Email: <a href="mailto: ${teamArray[4].email}">${teamArray[4].email}</a></p>
      <p class="card-text">School: ${teamArray[4].school}</p>
    </div>
  </div>
  </div>
  </body>
 </html>`








    // console.log (teamArray[1].id)
}

module.exports = teamArray;