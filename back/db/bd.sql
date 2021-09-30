CREATE DATABASE ticket 
GO

USE ticket
GO 

CREATE TABLE users (
	[name] VARCHAR(50) NOT NULL,
	username VARCHAR(10) NOT NULL,
	[password] VARCHAR(20) NOT NULL,
	PRIMARY KEY(username)

)
INSERT INTO users ([name], username, [password]) VALUES ('Jesus Davila','lalodav19','octubre19')

SELECT *  FROM users