
CREATE TABLE books (
  ID SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);

INSERT INTO books (author, title)
VALUES ('Clive James', 'Unreliable Memoirs'),('Elsa Pataky', 'Strong');

 