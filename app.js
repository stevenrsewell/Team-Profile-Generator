const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Manager = require('./asset/Manager');
const Engineer = require('./asset/Engineer');
const Intern = require('./asset/Intern');
let arrayemp = []
let questions = [
    {
        message: "What is your employee's name?",
        name: 'name',
    },
    {
        message: 'What is their id?',
        name: "id"
    },
    {
        message: 'What is their email address?',
        name: "email"
    },
]

let engineerQuestion = [
    {
        message: 'What is their GitHub user name?',
        name: "diffRole"
    }
]

let internQuestion = [
    {
        message: 'What school are they going to?',
        name: "diffRole"
    }
]

inquirer
    .prompt([
        {
            message: "What is your manager's name?",
            name: 'name',
        },
        {
            message: 'What is their id?',
            name: "id"
        },
        {
            message: 'What is their email address?',
            name: "email"
        },
        {
            message: 'What is their office number?',
            name: "diffRole"
        }
    ])
    .then(function (data) {
        arrayemp.push(new Manager(data.name, data.id, data.email, data.diffRole));


        addEmployee();
    })

function addEmployee() {
    inquirer
        .prompt(
            {
                message: 'Would you like to add an employee?',
                name: 'employee',
                choices: ["Engineer", 'Intern', 'No'],
                type: 'list'
            }
        )
        .then(function (data) {
            let q = [];

            switch (data.employee) {
                case 'No':
                    console.log(arrayemp)
                    let HTML = generateHTML();
                    writeFileAsync("./profile.html", HTML)
                    return null;
                case 'Engineer':
                    q = engineerQuestion;
                    break;
                case 'Intern':
                    q = internQuestion;
                    break;
            }


            inquirer
                .prompt(questions.concat(q))
                .then(function (data2) {
                    switch (data.employee) {
                        case 'Engineer':
                            arrayemp.push(new Engineer(data2.name, data2.id, data2.email, data2.diffRole));
                            break;
                        case 'Intern':
                            arrayemp.push(new Intern(data2.name, data2.id, data2.email, data2.diffRole));
                            break;
                    }

                    addEmployee();
                })

        })
}


function generateHTML() {
    let HTML = `<!DOCTYPE html>
    <head>
        <title></title>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    
        <style>
            header {
                position: relative;
                background-color: red;
                color: black;
                width: 100%;
                height: 100px;
            }
            header h1{
                position: relative;
                left: 40%
            }
            .card col-md-2{
                border: solid;
            }
            .card-header {
                background-color: blue;
                color: white;
            }
            .card-body {
                color: teal
            }
            .row{
                place-content: center;
            }
        </style>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class=row>`

    for (let i = 0; i < arrayemp.length; i++) {
        HTML += `<div class="card col-md-2" style="width: 18rem;">
            <div class="card-header">
                <h2 class="card-title"><span id="name">${arrayemp[i].name}</span> 
                <br> 
                ${arrayemp[i].getRole()}
                </h2>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <div>ID: <span id="ID">${arrayemp[i].id}</span></div>
                        <div>Email: <span id="email">${arrayemp[i].email}</span></div>
                    <div>${arrayemp[i].role}: <span id="role">${arrayemp[i].getDiffRole()}</span></div>
                </p>
            </div>
        </div>`
    }

    HTML += `</div></body></html>`
    return HTML;
} 