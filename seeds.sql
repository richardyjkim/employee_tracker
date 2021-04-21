INSERT INTO departments (name) 
VALUE
  ('Marketing'),
  ('Finance'),
  ('Engineering'),
  ('Human Resource'),
  ('Operation');

INSERT INTO roles (title, salary, departments_id)
VALUE
  ('Marketing Manager', '156450', 1),
  ('Senior Engineer', '149964', 3),
  ('Accountant Manager', '62301', 2),
  ('HR Manager', '118430', 4),
  ('Operation Director', '66479', 5),
  ('Operation Crew', '72834', 5),
  ('Communication Specialist', '89050', 4),
  ('Junior Engineer', '109462', 3),
  ('Accountant Agent', '62301', 2),
  ('Salesperson', '45962', 1);

INSERT INTO managers (first_name, last_name, roles_id)
  VALUE
  ('Dexter', 'Taylor', 1),
  ('Claire', 'Silverstar', 2),
  ('Keith', 'Holland' ,3 ),
  ('Alexandra', 'Echo', 4),
  ('Irene', 'Bae', 5);

INSERT INTO employees (first_name, last_name, managers_id, roles_id)
VALUE
  ('Dexter', 'Taylor', NULL, 1),
  ('Claire', 'Silverstar', NULL, 2),
  ('Keith', 'Holland' , NULL, 3),
  ('Alexandra', 'Echo', NULL, 4),
  ('Irene', 'Bae', NULL, 5),
  ('Sana', 'Minatozaki', 5, 6),
  ('Christ', 'Valentine' , 4, 7),
  ('Richard', 'Kim', 3, 8),
  ('Paul', 'Pheonix', 2, 9),
  ('Elizabeth', 'Kingston', 1, 10);