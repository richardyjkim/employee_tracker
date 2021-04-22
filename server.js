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
    startPrompt();
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
          "View All Departments",
          "View All Roles",
          "View All Managers",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update an Employee Role",
        ]
    }
  ]).then(function (val) {
    switch (val.choice) {
      case "View All Departments":
        viewDept();
        break;

      case "View All Roles":
        viewRoles();
        break;
      
      case "View All Managers":
        viewManagers();
        break;

      case "View All Employees":
        viewAll();
        break;
    }
  })
};

// View All Departments
const viewDept = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) throw err
    console.table(rows);
  })
};

// View All Roles
const viewRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) throw err
    console.table(rows);
    startPrompt();
  })
};

// View All Managers
const viewManagers = () => {
  const sql = `SELECT * FROM managers`;
  db.query(sql, (err, rows) => {
    if (err) throw err
    console.table(rows);
    startPrompt();
  })
};

// View All Employees
const viewAll = () => {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result);
    startPrompt();
  })
};

const addEmployee = () => {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "Please Enter thier first name"
    },
    {
      name: "last_name",
      type: "input",
      message: "Please Enter thier last name" 
    },
    {
      name: "role",
      type: "list",
      choice: 
    }
  ])
}
