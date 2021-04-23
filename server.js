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

      case "Add Department":
        addDept();
        break;

      case "Add Role":
        addRole();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Update an Employee Role":
        updateEmployee();
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
  })
};

// View All Managers
const viewManagers = () => {
  const sql = `SELECT * FROM managers`;
  db.query(sql, (err, rows) => {
    if (err) throw err
    console.table(rows);
  })
};

// View All Employees
const viewAll = () => {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, rows) => {
    if (err) throw err
    console.table(rows);

  })
};

// Select Roles
let roleArr = [];
const selectRole = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, res) => {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      roleArr.push(res[i].title);
    }
  })
  return roleArr;
};

// Select Managers
let managerArr = [];
const selectManager = () => {
  const sql = `SELECT * FROM managers`;
  db.query(sql, (err, res) => {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      managerArr.push(res[i].first_name);
    }
  })
  return managerArr;
};

// Select Employees
let employeeArr = [];
const selectEmployee = () => {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, res) => {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      employeeArr.push(res[i].first_name);
    }
  })
  return employeeArr;
};


// Add Department
const addDept = () => {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What Deparment would you like to add?"
    }
  ]).then((answer) => {
    let sql = `INSERT INTO departments (name) VALUES (?)`;
    db.query(sql, answer.name, (err, rows) => {
      if (err) throw err
      console.log("Department Successfully added!");
      viewDept();
      startPrompt();
    })
  });
};

// Add Role
const addRole = () => {
  inquirer.prompt([
    {
      name: "role",
      type: "input",
      message: "Please enter new role title"
    },
    {
      name: "salary",
      type: "input",
      message: "Please enter salary for new role"
    },
    {
      name: "department",
      type: "input",
      message: "Please put department id for this new role"
    }

  ]).then((answer) => {
    let sql = `INSERT INTO roles (title, salary, departments_id) VALUES (?,?,?)`;
    let params =
      [
        answer.role,
        answer.salary,
        answer.department
      ];

    db.query(sql, params, (err, res) => {
      if (err) throw err
      console.log("New Role Successfully added!");
      startPrompt();
    })
  });
}

// Add Employee
const addEmployee = () => {
  inquirer.prompt([
    {
      name: "first",
      type: "input",
      message: "Please Enter thier first name"
    },
    {
      name: "last",
      type: "input",
      message: "Please Enter thier last name"
    },
    {
      name: "role",
      type: "list",
      message: "What is thier role?",
      choices: selectRole()
    },
    {
      name: "manager",
      type: "rawlist",
      message: "Who is the manager?",
      choices: selectManager()
    }
  ]).then((answer) => {
    let roleId = selectRole().indexOf(answer.role);
    let managerId = selectManager().indexOf(answer.manager);
    let sql = `INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUES (?,?,?,?)`;
    let params =
      [
        answer.first,
        answer.last,
        managerId,
        roleId
      ];
    db.query(sql, params, (err, res) => {
      if (err) throw err
      console.log("New Employee Successfully added!");
      startPrompt();
    })
  });
};

// Update Employees
const updateEmployee = () => {
  inquirer.prompt([
    {
      name: "employee",
      type: "list",
      message: "Please Select an employee who you wish to update",
      choices: selectEmployee()
    },
    {
      name: "newRole",
      type: "list",
      message: "What is thier new Role?",
      choices: selectRole()
    }
  ]).then((answer) => {
    let sql = `UPDATE employees SET WHERE ?`
    let params =
      [
        answer.employee,
        anwer.newRole
      ];
    db.query(sql, params, (err, res) => {
      if (err) throw err
      console.log("Employee status Successfully updated!");
      startPrompt();
    })
  });
}
