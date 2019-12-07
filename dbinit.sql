
CREATE TABLE books (
  ID SERIAL PRIMARY KEY,
  aId INT UNIQUE,
  author VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL

);



INSERT INTO books (author, title)VALUES('Clive James', 'Unreliable Memoirs');
INSERT INTO books (author, title)VALUES  ('Elsa Pataky', 'Strong');
