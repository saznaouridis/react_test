CREATE DATABASE perntodo;

CREATE TABLE countries (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	capital VARCHAR(50)
);

INSERT INTO countries (name, capital)
	    VALUES('Greece', 'Athens'),
		  ('Italy', 'Rome'),
		  ('Hungary', 'Budapest'),
		  ('Spain', 'Madrid'),
		  ('Germany', 'Berlin'),
		  ('Denmark', 'Copenhagen'),
		  ('Portugal', 'Lisbon'),
		  ('Russia', 'Moscow'),
		  ('France', 'Paris'),
		  ('Norway', 'Oslo');