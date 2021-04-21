const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rladudwp',
  database: 'employeeDB'
});

// Not Found response for Unmatched routes
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Datacase connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

startPrompt = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: 
      [
        "View All Employees?",
        "View All Employee's By Roles?",
        "View All Emplyees By Deparments",
        "Update Employee",
        "Add Employee",
        "Add Role",
        "Add Department"
      ]
    }
  ])
}