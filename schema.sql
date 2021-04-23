DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR (30) NOT NULL
);

CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR (30) NOT NULL,
  salary INTEGER,
  departments_id INTEGER,
  FOREIGN KEY (departments_id) REFERENCES departments(id)
);

CREATE TABLE managers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INTEGER,
  FOREIGN KEY (roles_id) REFERENCES roles (id)
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  managers_id INTEGER,
  roles_id INTEGER,
  managers_name VARCHAR(30),
  departments_name VARCHAR (30) NOT NULL,
  salary INTEGER,
  FOREIGN KEY (roles_id) REFERENCES roles(id),
  FOREIGN KEY (managers_id) REFERENCES managers(id)
);
