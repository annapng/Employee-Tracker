// const inquirer = require('inquirer');

choices = require('./Develop/functionality/choices.js');


async function init() {
    console.log("\n***Welcome to the Void Software Employee Tracker!***");
    choices.mainChoices();
};

init();