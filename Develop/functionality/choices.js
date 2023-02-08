const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = require('../connection/connect.js');
const viewAllDept = require('../functionality/view.js');

function mainChoices() {

    const options = [{
        type: 'list',
        name: 'choices',
        messages: 'What would you like to do today?',
        choices: ['View All Departments', 'View All Roles',
        'View All Employees', 'View Employees by Manager', 'View Employees by Department', 'View Total Utilized Budget of a Department', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Update Employee Managers', 'Delete a Department', 'Delete a Role', 'Delete an Employee', 'Exit']
    }];

    inquirer.prompt(options).then((answers) => {
        if (answers.choices === 'View All Departments') {
            viewAllDept();  }

        if (answers.choices === 'Exit') {
            endProgram();   }
    });
    
};

const departmentChoices = async () => {
    const departmentQuery = `SELECT id AS value, name FROM department;`;
    const departments = await Connection.query(departmentQuery);
    return departments[0];
}

function endProgram() {
    console.log("Goodbye!");
    process.exit(0);

}


module.exports = mainChoices;