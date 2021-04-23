INSERT INTO departments (name) 
VALUES
  ('Marketing'),
  ('Finance'),
  ('Engineering'),
  ('Human Resource'),
  ('Operation');

INSERT INTO roles (title, salary, departments_id)
VALUES
  ('Marketing Manager', 156450, 1),
  ('Senior Engineer', 149964, 3),
  ('Accountant Manager', 62301, 2),
  ('HR Manager', 118430, 4),
  ('Operation Director', 66479, 5),
  ('Operation Crew', 72834, 5),
  ('Communication Specialist', 89050, 4),
  ('Junior Engineer', 109462, 3),
  ('Accountant Agent', 62301, 2),
  ('Salesperson', 45962, 1);

INSERT INTO managers (first_name, last_name, roles_id)
  VALUES
  ('Dexter', 'Taylor', 1),
  ('Claire', 'Silverstar', 2),
  ('Keith', 'Holland' ,3 ),
  ('Alexandra', 'Echo', 4),
  ('Irene', 'Bae', 5);

INSERT INTO employees (first_name, last_name, managers_id, roles_id, managers_name, departments_name, salary)
VALUES
  ('Dexter', 'Taylor', NULL, 1, NULL, 'Marketing', 156450),
  ('Claire', 'Silverstar', NULL, 2, NULL, 'Finance', 149964),
  ('Keith', 'Holland' , NULL, 3, NULL, 'Engineering', 62301),
  ('Alexandra', 'Echo', NULL, 4, NULL, 'Human Resource', 118430),
  ('Irene', 'Bae', NULL, 5, NULL, 'Operation', 66479),
  ('Sana', 'Minatozaki', 5, 6, 'Irene', 'Operation', 72834),
  ('Chris', 'Valentine' , 4, 7, 'Alexandra', 'Human Resource',89050),
  ('Richard', 'Kim', 3, 8, 'Keith', 'Engineering', 109462),
  ('Paul', 'Pheonix', 2, 9, 'Claire', 'Finance', 62301),
  ('Elizabeth', 'Kingston', 1, 10, 'Dexter', 'Marketing', 45962);