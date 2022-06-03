const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let workforce = [];

// Initial prompts for manager
const startTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'managerId'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'officeNumber'
        },
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'addEmployee',
            default: true,
        }

        
    ]).then(({ managerName, managerEmail, managerId, officeNumber, addEmployee } = response) => {

        workforce.push(new Manager(managerName, managerId, managerEmail, officeNumber));
        if (addEmployee === true) {
            addTeamMember();
        } else {
            createHTML();
        }
    })
};

// prompts for engineer/intern
const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What is the position this team member?",
            name: 'employeeRole',
            editableList: false,
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: "What is the team member's name?",
            name: 'employeeName'
        },
        {
            type: 'input',
            message: "What is the team member's email address?",
            name: 'employeeEmail'
        },
        {
            type: 'input',
            message: "What is the team member's ID number?",
            name: 'employeeId'
        },

        {
            type: 'input',
            message: "What is this engineer's GitHub username?",
            name: 'engineerGitHub',
            when: answers => answers.employeeRole == 'Engineer'
        },
        {
            type: 'input',
            message: "What school does this intern attend?",
            name: 'internSchool',
            when: answers => answers.employeeRole == 'Intern'
        },
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'addEmployee',
            default: 'true'
        },
    ])
        .then(({ employeeRole, employeeName, employeeId, employeeEmail, engineerGitHub, internSchool, addEmployee } = addMember) => {
            //split engineer and intern into seperate cards
            if (employeeRole == "Engineer") {
                workforce.push(new Engineer(employeeName, employeeId, employeeEmail, engineerGitHub));
            }
             else if (employeeRole == "Intern") {
                workforce.push(new Intern(employeeName, employeeId, employeeEmail, internSchool));
            }
             if (addEmployee === true) {
                addTeamMember();
            }
             else {
                console.log(workforce);
                let readyTeam = createCards();
                createHTML(readyTeam);
            }
        })
};

// generate the html for the final output 
function createHTML(cards) {
    fs.writeFile('./dist/teamprofile.html',
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Team Profile</title>
    </head>
    <body>
        <header class="main-header bg-danger text-white text-center h-75 m-1 p-3"><h1>The Team</h1></header>
        <section class="main-container d-flex flex-wrap justify-content-center">${cards}</section> 
    </body>
    </html>
    `,
        (err) => err ? console.error(err) : console.log('Successfully created HTML. Check the distribution folder!'));
};

// funtion to generate employee cards
function createCards() {
    let employeeCards = ``;
    let employeeInfo = ``;
    let employeeIcon = ``;

    for (i = 0; i < workforce.length; i++) {
        if (workforce[i].getRole() == 'Manager') {
            employeeIcon = `fa regular fa-clipboard`;
            employeeInfo = `Office number: ${workforce[i].officeNumber}`;
        }
        else if (workforce[i].getRole() == 'Engineer') {
            employeeIcon = `fa regular fa-chart-line`;
            employeeInfo = `Github: <a href='https://github.com/${workforce[i].engineerGitHub}' target="_blank">${workforce[i].engineerGitHub}</a>`;
        }
        else if (workforce[i].getRole() == 'Intern') {
            employeeIcon = `fa-regular fa-pen-to-square`;
            employeeInfo = `School: ${workforce[i].school}`;
        }

        
        employeeCards += `<div class="shadow card text-white bg-primary .col-6 w-25 rounded m-1 p-3">
    <div class="card-body">
        <h5 class="card-title name-section">${workforce[i].name}</h5>
        <p class"card-text">
        <span class="mb-1"><i class="${employeeIcon}"></i></span>
        <span class="role-section">${workforce[i].getRole()}</span>
        </p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${workforce[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${workforce[i].email}">${workforce[i].email}</a></li>
            <li class="list-group-item">${employeeInfo}</li>
        </ul>    
    </div>`
    }
    return employeeCards;
}


startTeam();