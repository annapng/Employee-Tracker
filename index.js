const inquirer = require('inquirer');

const consoleTable = require('console.table');

const mainChoices = require('./Develop/functionality/choices.js');


async function init() {
    console.log("Welcome to the Void Software Employee Tracker!");
    mainChoices();

};

init();