const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const importfromIndex = require ("../index")



const HTMLCreator = () => {
    `                        
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
      <p class="card-text">GitHub Username: <a href="https://www.github.com/${teamArray[1].githubusername}" download target="_blank">${teamArray[1].githubusername}</a></p>
    </div>
  </div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title"> ${teamArray[2].name}</h2>
      <h5 class="card-title"> Engineer </h5>
      <p class="card-title">ID: ${teamArray[2].id}</p>
      <p class="card-text">Email: <a href="mailto: ${teamArray[2].email}">${teamArray[2].email}</a></p>
      <p class="card-text">GitHub Username: <a href="https://www.github.com/${teamArray[2].githubusername}" download target="_blank">${teamArray[2].githubusername}</a></p>
    </div>
  </div>
  </div>
<div class="row">
<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h2 class="card-title"> ${teamArray[2].name}</h2>
    <h5 class="card-title"> Engineer </h5>
    <p class="card-title">ID: ${teamArray[2].id}</p>
    <p class="card-text">Email: <a href="mailto: ${teamArray[2].email}">${teamArray[2].email}</a></p>
    <p class="card-text">GitHub Username: <a href="https://www.github.com/${teamArray[2].githubusername}" download target="_blank">${teamArray[2].githubusername}</a></p>
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
}

HTMLCreator()
