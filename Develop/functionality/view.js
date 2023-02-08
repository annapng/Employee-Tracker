const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('../connection/connect.js');

const mainChoices = require('./choices.js');

async function viewAllDept() {
    const sql = 'SELECT department_name FROM department';

    db.query(sql, (err, data) => {
        if (err) throw err;

        let deptArray = [];

        Object.values(data).forEach(val => {const obj = Object.values(val);
            deptArray.push(obj);})

        deptArray.forEach(element => {
            console.log(" " + element);
        });
    }); 

}

module.exports = viewAllDept;