// consider adding validation to ensure user input is correct
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./lib/generateHTML');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create empty array for employee data to populate
let employees = [];

// log a message to be seen upon starting app
console.log('Respond to the propmts accordingly to build a team profile!')

async function prompts() {
    const employee = await inquirer.prompt([
		{
			type: 'input',
			name: 'employeeName',
			message: "Please enter employees name",
			validate: employeeNameInput => {
				if (employeeNameInput) {
					return true;
				} else {
					console.log("Enter employee name to continue");
					return false;
				}
			}

		},
        {
            type: 'input',
			name: 'employeeID',
			message: "Please enter employees ID",
            validate: employeeID => {
				if (employeeID) {
					return true;
				} else {
					console.log("Enter employee ID to continue");
					return false;
				}
			}
        },
        {
            type: 'input',
			name: 'employeeEmail',
			message: "Please enter employees email",
            validate: employeeEmail => {
				if (employeeEmail) {
					return true;
				} else {
					console.log("Enter employee email to continue");
					return false;
				}
			}
        },
        {
			type: 'list',
			name: 'employeeRole',
			message: "What role does this employee have?",
			choices: ['Manager', 'Engineer', 'Intern'],
		}
	])

	//let employeeHandler = employee

	let manager 
	if (employee.employeeRole === 'Manager') {
		manager = await inquirer.prompt([
			{
				type:'input',
				name: 'office',
				message: "What is this manager's office number?",
				validate: office => {
					if(office){
						return true;
					} else{
						console.log("Enter office number to continue ")
						return false;
					}
				}
			}
		])

			let newEmployee = new Manager
			(employee.employeeName,
			employee.employeeID,
			employee.employeeEmail,
			manager.office);
			employees.push(newEmployee);
		
	}

	let intern 
	if (employee.employeeRole === 'Intern') {
		intern = await inquirer.prompt([
			{
				type: 'input',
				name: 'school',
				message: "What school does this intern attend?",
				validate: school => {
					if(school){
						return true;
					} else {
						console.log("Enter school to continue")
						return false;
					}
				}
			}
		])
		let newEmployee = new Intern
			(employee.employeeName,
			employee.employeeID,
			employee.employeeEmail,
			intern.school);
			employees.push(newEmployee);
		
	}

	let engineer 
	if(employee.employeeRole === 'Engineer') {
		engineer = await inquirer.prompt([
			{
				type: 'input',
				name: 'Github',
				message: "What is the engineer's Github?",
				validate: Github => {
					if(Github) {
						return true;
					} else {
						console.log('Enter Github to continue')
						return false;
					}
				}
			}
		])
		let newEmployee = new Engineer
			(employee.employeeName,
			employee.employeeID,
			employee.employeeEmail,
			engineer.Github);
			employees.push(newEmployee);
		
	}

	const addEmployee = await inquirer.prompt([
		{
			type: 'confirm',
			name: 'addEmployee',
			message: "Would you like to add an additional employee? If no, your team profile will be generated!"
		}
	])
	if(addEmployee.addEmployee) {
		prompts()
	} else {
		// generate HTML and write file to output
		let generate = generateHTML(employees)
		fs.writeFile('./dist/teamgenerator.html', generate, function(err) {
			if(err) throw err
			console.log("Team profile generated!");
		})
	}
};    






// call for prompts to begin
prompts();