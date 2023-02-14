const db = require('../connection/connect.js');
const inquirer = require('inquirer');

choices = require('./choices.js');


async function addDept() {

    console.log("\n");
    let id = [];
    const sql = 'SELECT MAX(ID) FROM department';

    db.query(sql, (err,data) => {
        if (err) throw err;
        Object.values(data).forEach(val => {const obj = Object.values(val);
            id.push(obj);})
    let stringID = JSON.stringify(id).replaceAll('[', '').replaceAll(']', '');
    let newID = stringID + 1;


    inquirer
        .prompt([
            {
                type: 'input',
                name: 'input',
                message: "What's the name of the department you'd like to add?"      } ])
        
        .then((answer) => {
            console.log(answer.input);
            let deptName = JSON.stringify(answer.input).replaceAll('"', '');

            const sql2 = `INSERT INTO department (id, department_name) VALUES ('${newID}', '${deptName}');`;
           
            db.query(sql2, (err, data) => {
                if (err) throw err;

                console.log(`Completed! ${deptName} department added.`)
        
                choices.mainChoices();
            });  })  })
}


async function addRole() {


}

async function addEmp() {

}


module.exports = {addDept, addRole, addEmp};