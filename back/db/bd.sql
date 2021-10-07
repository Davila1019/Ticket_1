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
GO
SELECT *  FROM users
GO
CREATE TABLE presupuestos
(
  idPresupuesto INT NOT NULL IDENTITY (1,1),
  creacion DATE NOT NULL,
  proyecto VARCHAR (50) NOT NULL,
  vers INT NOT NULL,
  PRIMARY KEY (idPresupuesto)
)
CREATE TABLE mes
(
  idMes INT NOT NULL IDENTITY (1,1),
  nombre_mes VARCHAR (20) NOT NULL,
  PRIMARY KEY (idMes)
)

CREATE TABLE flujoEfec
(
  idFlujoE INT NOT NULL IDENTITY (1,1),
  id_Presupuesto INT NOT NULL,
  id_Mes INT NOT NULL,
  ingreso FLOAT NOT NULL,
  PRIMARY KEY (idFlujoE),
    FOREIGN KEY(id_Presupuesto) REFERENCES presupuestos(idPresupuesto),
	FOREIGN KEY(id_Mes) REFERENCES mes (idMes)
)

INSERT INTO presupuestos (creacion,proyecto,vers) VALUES ('05/10/21','BioProyect1',1);
GO
INSERT INTO mes(nombre_mes) VALUES ('Enero');
INSERT INTO mes(nombre_mes) VALUES ('Febrero');
INSERT INTO mes(nombre_mes) VALUES ('Marzo');
INSERT INTO mes(nombre_mes) VALUES ('Abril');
INSERT INTO mes(nombre_mes) VALUES ('Mayo');
INSERT INTO mes(nombre_mes) VALUES ('Junio');
INSERT INTO mes(nombre_mes) VALUES ('Julio');
INSERT INTO mes(nombre_mes) VALUES ('Agosto');
INSERT INTO mes(nombre_mes) VALUES ('Septiembre');
INSERT INTO mes(nombre_mes) VALUES ('Octubre');
INSERT INTO mes(nombre_mes) VALUES ('Noviembre');
INSERT INTO mes(nombre_mes) VALUES ('Diciembre');

GO
CREATE TABLE recursos
(
  idRecurso INT NOT NULL IDENTITY (1,1),
  id_Presupuesto INT NOT NULL,
  id_Mes INT NOT NULL,
  rol VARCHAR (30) NOT NULL,
  recurso FLOAT NOT NULL,
  PRIMARY KEY (idRecurso),
    FOREIGN KEY(id_Presupuesto) REFERENCES presupuestos(idPresupuesto),
	FOREIGN KEY(id_Mes) REFERENCES mes (idMes)
)
GO
CREATE TABLE ingresos
(
  idIngreso INT NOT NULL IDENTITY (1,1),
  id_Presupuesto INT NOT NULL,
  id_Mes INT NOT NULL,
  concepto VARCHAR(40) NOT NULL,
  monto FLOAT NOT NULL,
  PRIMARY KEY (idIngreso),
    FOREIGN KEY(id_Presupuesto) REFERENCES presupuestos(idPresupuesto),
	FOREIGN KEY(id_Mes) REFERENCES mes (idMes)
)

CREATE TABLE costosDirectos
(
  idCostosD INT NOT NULL IDENTITY (1,1),
  id_Presupuesto INT NOT NULL,
  id_Mes INT NOT NULL,
  concepto VARCHAR(40) NOT NULL,
  monto FLOAT NOT NULL,
  PRIMARY KEY (idCostosD),
    FOREIGN KEY(id_Presupuesto) REFERENCES presupuestos(idPresupuesto),
	FOREIGN KEY(id_Mes) REFERENCES mes (idMes)
)

CREATE TABLE gastosAdmin
(
  idgastosAdmin INT NOT NULL IDENTITY (1,1),
  id_Presupuesto INT NOT NULL,
  id_Mes INT NOT NULL,
  concepto VARCHAR(40) NOT NULL,
  monto FLOAT NOT NULL,
  PRIMARY KEY (idgastosAdmin),
    FOREIGN KEY(id_Presupuesto) REFERENCES presupuestos(idPresupuesto),
	FOREIGN KEY(id_Mes) REFERENCES mes (idMes)
)
