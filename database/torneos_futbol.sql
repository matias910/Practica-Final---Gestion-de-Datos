/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.16-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: torneos_futbol
-- ------------------------------------------------------
-- Server version	10.11.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arbitro`
--

DROP TABLE IF EXISTS `arbitro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `arbitro` (
  `id_persona` int(11) NOT NULL,
  `nacionalidad` varchar(50) NOT NULL,
  `años_experiencia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  CONSTRAINT `arbitro_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arbitro`
--

LOCK TABLES `arbitro` WRITE;
/*!40000 ALTER TABLE `arbitro` DISABLE KEYS */;
INSERT INTO `arbitro` VALUES
(13,'Italia',15),
(14,'Argentina',10),
(15,'Inglaterra',12),
(16,'Paises Bajos',11),
(17,'Turquia',14),
(18,'Uzbekistan',13),
(19,'El Salvador',9),
(20,'Estados Unidos',8),
(117,'Polonia',14),
(118,'Inglaterra',14),
(119,'Inglaterra',13),
(120,'Italia',16),
(121,'Francia',14),
(122,'Francia',10),
(123,'Eslovenia',14),
(124,'Alemania',15),
(125,'Paises Bajos',13),
(126,'Portugal',12),
(127,'Rumania',12),
(128,'Suecia',10),
(129,'Turquia',9),
(130,'Suiza',8),
(131,'España',11),
(132,'Alemania',11),
(133,'Italia',10),
(134,'Argentina',11),
(135,'Colombia',16),
(136,'Chile',8),
(137,'Argentina',10),
(138,'Argentina',6),
(139,'Brasil',11),
(140,'Brasil',10),
(141,'Uruguay',7),
(142,'Uruguay',6),
(143,'Venezuela',11),
(144,'Venezuela',9),
(145,'Ecuador',6),
(146,'Peru',8),
(147,'Italia',9),
(148,'El Salvador',10),
(149,'Guatemala',9),
(150,'Estados Unidos',12),
(151,'Estados Unidos',5),
(152,'Mexico',14);
/*!40000 ALTER TABLE `arbitro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo`
--

DROP TABLE IF EXISTS `equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipo` (
  `id_equipo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `ciudad` varchar(80) NOT NULL,
  `año_fundacion` int(11) DEFAULT NULL,
  `director_tecnico` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_equipo`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES
(1,'Alemania','Berlin',1900,'Joachim Low'),
(2,'Argentina','Buenos Aires',1893,'Alejandro Sabella'),
(3,'Brasil','Brasilia',1914,'Luiz Felipe Scolari'),
(4,'Paises Bajos','Amsterdam',1889,'Louis van Gaal'),
(5,'Colombia','Bogota',1924,'Jose Pekerman'),
(6,'Francia','Paris',1919,'Didier Deschamps'),
(7,'Belgica','Bruselas',1895,'Marc Wilmots'),
(8,'Costa Rica','San Jose',1921,'Jorge Luis Pinto'),
(9,'Croacia','Zagreb',1912,'Niko Kovac'),
(10,'Mexico','Ciudad de Mexico',1927,'Miguel Herrera'),
(11,'Costa de Marfil','Abiyan',1960,'Sabri Lamouchi'),
(12,'Japon','Tokio',1921,'Alberto Zaccheroni'),
(13,'Camerun','Yaunde',1959,'Volker Finke'),
(14,'Chile','Santiago',1895,'Jorge Sampaoli'),
(15,'Australia','Sidney',1961,'Ange Postecoglou'),
(16,'Espana','Madrid',1909,'Vicente del Bosque'),
(17,'Bosnia y Herzegovina','Sarajevo',1992,'Safet Susic'),
(18,'Grecia','Atenas',1926,'Fernando Santos'),
(19,'Uruguay','Montevideo',1900,'Oscar Tabarez'),
(20,'Nigeria','Abuya',1945,'Stephen Keshi'),
(21,'Suiza','Berna',1895,'Ottmar Hitzfeld'),
(22,'Ecuador','Quito',1925,'Reinaldo Rueda'),
(23,'Honduras','Tegucigalpa',1951,'Luis Fernando Suarez'),
(24,'Iran','Teheran',1920,'Carlos Queiroz'),
(25,'Argelia','Argel',1962,'Vahid Halilhodzic'),
(26,'Rusia','Moscu',1912,'Fabio Capello'),
(27,'Ghana','Acra',1957,'Kwesi Appiah'),
(28,'Corea del Sur','Seul',1933,'Hong Myung-bo'),
(29,'Inglaterra','Londres',1863,'Roy Hodgson'),
(30,'Italia','Roma',1898,'Cesare Prandelli'),
(31,'Estados Unidos','Chicago',1913,'Jurgen Klinsmann'),
(32,'Portugal','Lisboa',1914,'Paulo Bento'),
(33,'Albania','Tirana',1930,'Sylvinho'),
(34,'Austria','Viena',1904,'Ralf Rangnick'),
(35,'Dinamarca','Copenhague',1889,'Kasper Hjulmand'),
(36,'Escocia','Glasgow',1873,'Steve Clarke'),
(37,'Eslovaquia','Bratislava',1993,'Francesco Calzona'),
(38,'Eslovenia','Liubliana',1920,'Matjaz Kek'),
(39,'Georgia','Tiflis',1936,'Willy Sagnol'),
(40,'Hungria','Budapest',1901,'Marco Rossi'),
(41,'Polonia','Varsovia',1919,'Michal Probierz'),
(42,'Republica Checa','Praga',1901,'Ivan Hasek'),
(43,'Rumania','Bucarest',1909,'Edward Iordanescu'),
(44,'Serbia','Belgrado',1919,'Dragan Stojkovic'),
(45,'Turquia','Estambul',1923,'Vincenzo Montella'),
(46,'Ucrania','Kiev',1991,'Serhiy Rebrov'),
(47,'Bolivia','La Paz',1925,'Antonio Carlos Zago'),
(48,'Canada','Toronto',1912,'Jesse Marsch'),
(49,'Jamaica','Kingston',1910,'Heimir Hallgrimsson'),
(50,'Panama','Ciudad de Panama',1937,'Thomas Christiansen'),
(51,'Paraguay','Asuncion',1906,'Daniel Garnero'),
(52,'Peru','Lima',1922,'Jorge Fossati'),
(53,'Venezuela','Caracas',1926,'Fernando Batista');
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadio`
--

DROP TABLE IF EXISTS `estadio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadio` (
  `id_estadio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `ubicacion` varchar(150) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `tipo_superficie` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_estadio`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadio`
--

LOCK TABLES `estadio` WRITE;
/*!40000 ALTER TABLE `estadio` DISABLE KEYS */;
INSERT INTO `estadio` VALUES
(1,'Estadio do Maracana','Rio de Janeiro',78838,'Cesped natural'),
(2,'Estadio Nacional Mane Garrincha','Brasilia',70042,'Cesped natural'),
(3,'Estadio Mineirao','Belo Horizonte',62547,'Cesped natural'),
(4,'Arena de Sao Paulo','Sao Paulo',65807,'Cesped natural'),
(5,'Arena Fonte Nova','Salvador',52000,'Cesped natural'),
(6,'Estadio Castelao','Fortaleza',67037,'Cesped natural'),
(7,'Arena Pernambuco','Recife',46154,'Cesped natural'),
(8,'Arena Pantanal','Cuiaba',42968,'Cesped natural'),
(9,'Arena da Baixada','Curitiba',42372,'Cesped natural'),
(10,'Estadio Beira-Rio','Porto Alegre',51300,'Cesped natural'),
(11,'Arena Amazonia','Manaus',40549,'Cesped natural'),
(12,'Estadio das Dunas','Natal',42386,'Cesped natural'),
(13,'Olympiastadion Berlin','Berlin',71000,'Cesped natural'),
(14,'Munich Football Arena','Munich',66000,'Cesped natural'),
(15,'BVB Stadion Dortmund','Dortmund',62000,'Cesped natural'),
(16,'Stuttgart Arena','Stuttgart',54000,'Cesped natural'),
(17,'Arena AufSchalke','Gelsenkirchen',50000,'Cesped natural'),
(18,'Volksparkstadion Hamburg','Hamburgo',49000,'Cesped natural'),
(19,'Frankfurt Arena','Francfort',47000,'Cesped natural'),
(20,'Dusseldorf Arena','Dusseldorf',47000,'Cesped natural'),
(21,'Cologne Stadium','Colonia',43000,'Cesped natural'),
(22,'Leipzig Stadium','Leipzig',40000,'Cesped natural'),
(23,'MetLife Stadium','East Rutherford',82560,'Cesped natural'),
(24,'AT&T Stadium','Arlington',80000,'Cesped natural'),
(25,'GEHA Field at Arrowhead Stadium','Kansas City',76410,'Cesped natural'),
(26,'Bank of America Stadium','Charlotte',74860,'Cesped natural'),
(27,'NRG Stadium','Houston',72220,'Cesped natural'),
(28,'Mercedes-Benz Stadium','Atlanta',71000,'Cesped natural'),
(29,'SoFi Stadium','Inglewood',70240,'Cesped natural'),
(30,'Levi\'s Stadium','Santa Clara',68500,'Cesped natural'),
(31,'Hard Rock Stadium','Miami Gardens',64760,'Cesped natural'),
(32,'State Farm Stadium','Glendale',63400,'Cesped natural'),
(33,'Allegiant Stadium','Paradise',61000,'Cesped natural'),
(34,'Inter&Co Stadium','Orlando',25500,'Cesped natural'),
(35,'Q2 Stadium','Austin',20730,'Cesped natural'),
(36,'Children\'s Mercy Park','Kansas City',18460,'Cesped natural');
/*!40000 ALTER TABLE `estadio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugador`
--

DROP TABLE IF EXISTS `jugador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugador` (
  `id_persona` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL,
  `posicion` varchar(30) NOT NULL,
  `numero` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `id_equipo` (`id_equipo`),
  CONSTRAINT `jugador_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`),
  CONSTRAINT `jugador_ibfk_2` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugador`
--

LOCK TABLES `jugador` WRITE;
/*!40000 ALTER TABLE `jugador` DISABLE KEYS */;
INSERT INTO `jugador` VALUES
(1,1,'portero',1,'1986-03-27'),
(2,1,'mediocampista',8,'1990-01-04'),
(3,1,'mediocampista',13,'1989-09-13'),
(4,1,'delantero',11,'1978-06-09'),
(5,2,'delantero',10,'1987-06-24'),
(6,2,'mediocampista',7,'1988-02-14'),
(7,3,'delantero',10,'1992-02-05'),
(8,3,'defensa',4,'1987-04-22'),
(9,5,'mediocampista',10,'1991-07-12'),
(10,5,'delantero',11,'1988-05-26'),
(11,4,'delantero',11,'1984-01-23'),
(12,4,'delantero',9,'1983-08-06'),
(21,6,'mediocampista',19,'1993-03-15'),
(22,6,'delantero',10,'1987-12-19'),
(23,6,'defensa',4,'1993-04-25'),
(24,6,'delantero',11,'1991-03-21'),
(25,7,'delantero',10,'1991-01-07'),
(26,7,'mediocampista',7,'1991-06-28'),
(27,7,'portero',1,'1992-05-11'),
(28,7,'delantero',9,'1993-05-13'),
(29,19,'delantero',9,'1987-01-24'),
(30,19,'delantero',21,'1987-02-14'),
(31,19,'defensa',3,'1986-02-16'),
(32,19,'portero',1,'1986-06-16'),
(33,14,'mediocampista',8,'1987-05-22'),
(34,14,'delantero',7,'1988-12-19'),
(35,14,'portero',1,'1983-04-13'),
(36,14,'defensa',17,'1987-08-03'),
(37,32,'delantero',7,'1985-02-05'),
(38,32,'defensa',3,'1983-02-26'),
(39,32,'mediocampista',8,'1986-09-08'),
(40,32,'delantero',17,'1986-11-17'),
(41,29,'delantero',10,'1985-10-24'),
(42,29,'mediocampista',4,'1980-05-30'),
(43,29,'delantero',15,'1989-09-01'),
(44,29,'portero',1,'1987-04-19'),
(45,30,'mediocampista',21,'1979-05-19'),
(46,30,'portero',1,'1978-01-28'),
(47,30,'delantero',9,'1990-08-12'),
(48,30,'defensa',3,'1984-08-14'),
(49,16,'mediocampista',6,'1984-05-11'),
(50,16,'mediocampista',8,'1980-01-25'),
(51,16,'portero',1,'1981-05-20'),
(52,16,'defensa',15,'1986-03-30'),
(53,8,'portero',1,'1986-12-15'),
(54,8,'delantero',10,'1985-08-18'),
(55,10,'portero',13,'1985-07-13'),
(56,10,'delantero',14,'1988-06-01'),
(57,16,'delantero',19,'2007-07-13'),
(58,16,'delantero',17,'2002-07-12'),
(59,16,'mediocampista',16,'1996-06-22'),
(60,16,'defensa',2,'1992-01-11'),
(61,29,'mediocampista',10,'2003-06-29'),
(62,29,'delantero',9,'1993-07-28'),
(63,29,'delantero',7,'2001-09-05'),
(64,29,'mediocampista',11,'2000-05-28'),
(65,6,'delantero',10,'1998-12-20'),
(66,6,'delantero',7,'1991-03-21'),
(67,6,'mediocampista',8,'2000-01-27'),
(68,6,'defensa',17,'2001-03-24'),
(69,1,'mediocampista',10,'2003-02-26'),
(70,1,'mediocampista',17,'2003-05-03'),
(71,1,'mediocampista',21,'1990-10-24'),
(72,1,'defensa',2,'1993-03-03'),
(73,32,'mediocampista',8,'1994-09-08'),
(74,32,'mediocampista',10,'1994-08-10'),
(75,32,'defensa',3,'1997-05-14'),
(76,32,'portero',1,'1999-09-19'),
(77,4,'defensa',4,'1991-07-08'),
(78,4,'delantero',11,'1999-05-07'),
(79,4,'mediocampista',7,'2003-04-21'),
(80,4,'delantero',10,'1994-02-13'),
(81,30,'mediocampista',18,'1997-02-07'),
(82,30,'delantero',14,'1997-10-25'),
(83,30,'portero',1,'1999-02-25'),
(84,30,'defensa',23,'1999-04-13'),
(85,7,'delantero',22,'2002-05-27'),
(86,7,'delantero',11,'1993-09-04'),
(87,7,'mediocampista',24,'2001-08-16'),
(88,7,'delantero',9,'1994-12-04'),
(89,9,'mediocampista',10,'1985-09-09'),
(90,9,'defensa',4,'2002-01-23'),
(91,9,'mediocampista',8,'1994-05-06'),
(92,9,'delantero',14,'1989-02-02'),
(93,19,'portero',23,'1992-09-02'),
(94,19,'delantero',9,'2000-01-31'),
(95,19,'delantero',22,'1997-02-10'),
(96,19,'mediocampista',20,'1998-12-05'),
(97,19,'mediocampista',8,'2001-01-17'),
(98,14,'delantero',7,'2000-07-12'),
(99,14,'delantero',10,'2001-12-14'),
(100,14,'mediocampista',8,'1997-09-02'),
(101,14,'delantero',11,'2001-07-19'),
(102,14,'portero',1,'1992-10-02'),
(103,32,'mediocampista',15,'1998-02-22'),
(104,32,'delantero',9,'1999-06-24'),
(105,32,'defensa',4,'1999-03-07'),
(106,32,'defensa',2,'1995-01-20'),
(107,8,'delantero',7,'1997-01-13'),
(108,8,'mediocampista',10,'1991-05-12'),
(109,8,'mediocampista',19,'1997-09-17'),
(110,8,'mediocampista',16,'1994-01-06'),
(111,8,'defensa',4,'1996-05-28'),
(112,10,'delantero',7,'1988-12-19'),
(113,10,'mediocampista',8,'2000-03-08'),
(114,5,'mediocampista',23,'2001-11-02'),
(115,5,'defensa',3,'2002-01-09'),
(116,5,'mediocampista',10,'2007-07-03');
/*!40000 ALTER TABLE `jugador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partido`
--

DROP TABLE IF EXISTS `partido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `partido` (
  `id_partido` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `duracion` int(11) DEFAULT NULL,
  `marcador` varchar(10) DEFAULT NULL,
  `num_espectadores` int(11) DEFAULT NULL,
  `id_estadio` int(11) NOT NULL,
  `id_equipo_local` int(11) NOT NULL,
  `id_equipo_visitante` int(11) NOT NULL,
  `id_torneo` int(11) NOT NULL,
  `id_arbitro` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_partido`),
  KEY `id_estadio` (`id_estadio`),
  KEY `id_equipo_local` (`id_equipo_local`),
  KEY `id_equipo_visitante` (`id_equipo_visitante`),
  KEY `id_torneo` (`id_torneo`),
  KEY `fk_partido_arbitro` (`id_arbitro`),
  CONSTRAINT `fk_partido_arbitro` FOREIGN KEY (`id_arbitro`) REFERENCES `arbitro` (`id_persona`),
  CONSTRAINT `partido_ibfk_1` FOREIGN KEY (`id_estadio`) REFERENCES `estadio` (`id_estadio`),
  CONSTRAINT `partido_ibfk_2` FOREIGN KEY (`id_equipo_local`) REFERENCES `equipo` (`id_equipo`),
  CONSTRAINT `partido_ibfk_3` FOREIGN KEY (`id_equipo_visitante`) REFERENCES `equipo` (`id_equipo`),
  CONSTRAINT `partido_ibfk_4` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`id_torneo`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partido`
--

LOCK TABLES `partido` WRITE;
/*!40000 ALTER TABLE `partido` DISABLE KEYS */;
INSERT INTO `partido` VALUES
(1,'2014-06-12',90,'3-1',62103,4,3,9,1,13),
(2,'2014-06-13',90,'1-0',39216,12,10,13,1,13),
(3,'2014-06-17',90,'0-0',60342,6,3,10,1,13),
(4,'2014-06-18',90,'0-4',39982,11,13,9,1,13),
(5,'2014-06-23',90,'1-4',69903,2,13,3,1,13),
(6,'2014-06-23',90,'1-3',44212,7,9,10,1,13),
(7,'2014-06-13',90,'1-5',48173,5,16,4,1,13),
(8,'2014-06-13',90,'1-3',40005,8,14,15,1,13),
(9,'2014-06-18',90,'0-2',70161,10,15,4,1,14),
(10,'2014-06-18',90,'0-2',74240,3,16,14,1,14),
(11,'2014-06-23',90,'0-3',39369,9,15,16,1,14),
(12,'2014-06-23',90,'2-0',71436,4,4,14,1,14),
(13,'2014-06-14',90,'3-0',57174,3,5,18,1,14),
(14,'2014-06-14',90,'2-1',68346,7,11,12,1,14),
(15,'2014-06-19',90,'2-1',51003,2,5,11,1,14),
(16,'2014-06-19',90,'0-0',40285,12,12,18,1,14),
(17,'2014-06-24',90,'1-4',39674,8,12,5,1,15),
(18,'2014-06-24',90,'2-1',41242,6,18,11,1,15),
(19,'2014-06-14',90,'1-3',58817,6,19,8,1,15),
(20,'2014-06-14',90,'1-2',41468,4,29,30,1,15),
(21,'2014-06-19',90,'2-1',40476,4,19,29,1,15),
(22,'2014-06-20',90,'0-1',40285,7,30,8,1,15),
(23,'2014-06-24',90,'0-1',39706,12,30,19,1,15),
(24,'2014-06-24',90,'0-0',39310,3,8,29,1,15),
(25,'2014-06-15',90,'3-0',50699,10,21,22,1,16),
(26,'2014-06-15',90,'3-0',43021,6,6,23,1,16),
(27,'2014-06-20',90,'2-5',51003,5,21,6,1,16),
(28,'2014-06-20',90,'1-2',40350,9,23,22,1,16),
(29,'2014-06-25',90,'0-3',40340,11,23,21,1,16),
(30,'2014-06-25',90,'0-0',73804,1,22,6,1,16),
(31,'2014-06-15',90,'2-1',74738,1,2,17,1,16),
(32,'2014-06-16',90,'0-0',39216,9,24,20,1,16),
(33,'2014-06-21',90,'1-0',62567,3,2,24,1,17),
(34,'2014-06-21',90,'1-0',39760,8,20,17,1,17),
(35,'2014-06-25',90,'2-3',43285,10,20,2,1,17),
(36,'2014-06-25',90,'3-1',41232,5,17,24,1,17),
(37,'2014-06-16',90,'4-0',51081,5,1,32,1,17),
(38,'2014-06-16',90,'1-2',39760,12,27,31,1,17),
(39,'2014-06-21',90,'2-2',58067,6,1,27,1,17),
(40,'2014-06-22',90,'2-2',40248,11,31,32,1,17),
(41,'2014-06-26',90,'0-1',41876,7,31,1,1,18),
(42,'2014-06-26',90,'2-1',39727,2,32,27,1,18),
(43,'2014-06-17',90,'2-1',52624,3,7,25,1,18),
(44,'2014-06-17',90,'1-1',37603,8,26,28,1,18),
(45,'2014-06-22',90,'1-0',73819,1,7,26,1,18),
(46,'2014-06-22',90,'2-4',57053,10,28,25,1,18),
(47,'2014-06-26',90,'0-1',61397,4,28,7,1,18),
(48,'2014-06-26',90,'1-1',39224,9,25,26,1,18),
(49,'2014-06-28',120,'1-1',57714,3,3,14,1,19),
(50,'2014-06-28',90,'2-0',73804,1,5,19,1,19),
(51,'2014-06-29',120,'2-1',58817,6,6,20,1,19),
(52,'2014-06-30',120,'2-1',43063,10,1,25,1,19),
(53,'2014-06-29',120,'2-1',58817,7,4,10,1,19),
(54,'2014-06-29',120,'1-1',41242,7,8,18,1,19),
(55,'2014-07-01',120,'1-0',63267,4,2,21,1,19),
(56,'2014-07-01',120,'2-1',51227,5,7,31,1,19),
(57,'2014-07-04',90,'0-1',67882,6,6,1,1,20),
(58,'2014-07-04',90,'2-1',51081,5,3,5,1,20),
(59,'2014-07-05',90,'1-0',68551,2,2,7,1,20),
(60,'2014-07-05',120,'0-0',60342,4,4,8,1,20),
(61,'2014-07-08',90,'7-1',58141,3,3,1,1,20),
(62,'2014-07-09',120,'0-0',63267,4,2,4,1,20),
(63,'2014-07-12',90,'0-3',68034,2,3,4,1,20),
(64,'2014-07-13',120,'1-0',74738,1,1,2,1,20),
(65,'2024-06-14',90,'5-1',65052,14,1,36,2,127),
(66,'2024-06-15',90,'1-3',41625,21,40,21,2,133),
(67,'2024-06-19',90,'2-0',54000,16,1,40,2,119),
(68,'2024-06-19',90,'1-1',43000,21,36,21,2,122),
(69,'2024-06-23',90,'1-1',46685,19,21,1,2,128),
(70,'2024-06-23',90,'0-1',54000,16,36,40,2,131),
(71,'2024-06-15',90,'3-0',68844,13,16,9,2,120),
(72,'2024-06-15',90,'2-1',60512,15,30,33,2,124),
(73,'2024-06-19',90,'2-2',46512,18,9,33,2,130),
(74,'2024-06-20',90,'1-0',49528,17,16,30,2,117),
(75,'2024-06-24',90,'0-1',46586,20,33,16,2,134),
(76,'2024-06-24',90,'1-1',38322,22,9,30,2,121),
(77,'2024-06-16',90,'1-1',54000,16,38,35,2,126),
(78,'2024-06-16',90,'0-1',48953,17,44,29,2,125),
(79,'2024-06-20',90,'1-1',63000,14,38,44,2,129),
(80,'2024-06-20',90,'1-1',47225,19,35,29,2,118),
(81,'2024-06-25',90,'0-0',43000,21,29,38,2,132),
(82,'2024-06-25',90,'0-0',64200,14,35,44,2,123),
(83,'2024-06-16',90,'1-2',48117,18,41,4,2,122),
(84,'2024-06-17',90,'0-1',46425,20,34,6,2,117),
(85,'2024-06-21',90,'1-3',69455,13,41,34,2,133),
(86,'2024-06-21',90,'0-0',38512,22,4,6,2,126),
(87,'2024-06-25',90,'2-3',67411,13,4,34,2,120),
(88,'2024-06-25',90,'1-1',60122,15,6,41,2,129),
(89,'2024-06-17',90,'3-0',61000,14,43,46,2,124),
(90,'2024-06-17',90,'0-1',46511,19,7,37,2,118),
(91,'2024-06-21',90,'1-2',43910,20,37,46,2,131),
(92,'2024-06-22',90,'2-0',43000,21,7,43,2,134),
(93,'2024-06-26',90,'1-1',45033,19,37,43,2,125),
(94,'2024-06-26',90,'0-0',54000,16,46,7,2,121),
(95,'2024-06-18',90,'3-1',61000,15,45,39,2,119),
(96,'2024-06-18',90,'2-1',38000,22,32,42,2,128),
(97,'2024-06-22',90,'1-1',46522,18,39,42,2,132),
(98,'2024-06-22',90,'0-3',61000,15,45,32,2,127),
(99,'2024-06-26',90,'2-0',49000,17,39,32,2,123),
(100,'2024-06-26',90,'1-2',47512,18,42,45,2,130),
(101,'2024-06-29',90,'2-0',67122,13,21,30,2,118),
(102,'2024-06-29',90,'2-0',61522,15,1,35,2,134),
(103,'2024-06-30',120,'2-1',47228,17,29,37,2,121),
(104,'2024-06-30',90,'4-1',43000,21,16,39,2,126),
(105,'2024-07-01',90,'1-0',46810,20,6,7,2,122),
(106,'2024-07-01',120,'0-0',46522,19,32,38,2,117),
(107,'2024-07-02',90,'0-3',64000,14,43,4,2,124),
(108,'2024-07-02',90,'1-2',38125,22,34,45,2,129),
(109,'2024-07-05',120,'2-1',54000,16,16,1,2,123),
(110,'2024-07-05',120,'0-0',49000,18,32,6,2,133),
(111,'2024-07-06',120,'1-1',46155,20,29,21,2,130),
(112,'2024-07-06',90,'2-1',70011,13,4,45,2,119),
(113,'2024-07-09',90,'2-1',62012,14,16,6,2,120),
(114,'2024-07-10',90,'1-2',60155,15,4,29,2,125),
(115,'2024-07-14',90,'2-1',71000,13,16,29,2,117),
(116,'2024-06-20',90,'2-0',70564,23,2,48,3,149),
(117,'2024-06-21',90,'0-0',43030,24,52,14,3,150),
(118,'2024-06-25',90,'0-1',18653,25,52,48,3,136),
(119,'2024-06-25',90,'0-1',81106,26,14,2,3,144),
(120,'2024-06-29',90,'2-0',64972,27,2,52,3,151),
(121,'2024-06-29',90,'0-0',41243,28,48,14,3,140),
(122,'2024-06-22',90,'1-2',29864,29,22,53,3,135),
(123,'2024-06-22',90,'1-0',53763,30,10,49,3,141),
(124,'2024-06-26',90,'2-3',24073,31,49,53,3,147),
(125,'2024-06-26',90,'1-0',72773,32,10,22,3,145),
(126,'2024-06-30',90,'0-3',45054,33,49,22,3,137),
(127,'2024-06-30',90,'0-1',30123,33,53,10,3,148),
(128,'2024-06-23',90,'3-1',33425,27,50,47,3,139),
(129,'2024-06-23',90,'2-0',47812,26,31,47,3,152),
(130,'2024-06-27',90,'5-0',48033,26,19,47,3,143),
(131,'2024-06-27',90,'2-1',59145,23,50,31,3,138),
(132,'2024-07-01',90,'0-1',55460,32,31,19,3,146),
(133,'2024-07-01',90,'1-3',19122,28,47,50,3,135),
(134,'2024-06-24',90,'2-1',68073,30,5,51,3,142),
(135,'2024-06-24',90,'0-0',67158,32,3,8,3,144),
(136,'2024-06-28',90,'3-0',31322,33,5,8,3,150),
(137,'2024-06-28',90,'1-4',46080,31,51,3,3,141),
(138,'2024-07-02',90,'1-1',70971,29,3,5,3,136),
(139,'2024-07-02',90,'2-1',35000,33,8,51,3,149),
(140,'2024-07-04',90,'1-1',69456,30,2,22,3,139),
(141,'2024-07-05',90,'1-1',36187,24,53,48,3,140),
(142,'2024-07-06',90,'5-0',63973,33,5,50,3,152),
(143,'2024-07-06',90,'0-0',50012,31,19,3,3,138),
(144,'2024-07-09',90,'2-0',80102,26,2,48,3,143),
(145,'2024-07-10',90,'0-1',70965,27,19,5,3,147),
(146,'2024-07-13',90,'2-2',24303,27,48,19,3,135),
(147,'2024-07-14',120,'1-0',65300,27,2,5,3,141);
/*!40000 ALTER TABLE `partido` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER validar_equipos_partido
BEFORE INSERT ON partido
FOR EACH ROW
BEGIN
    IF NEW.id_equipo_local = NEW.id_equipo_visitante THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El equipo local y visitante no pueden ser el mismo';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `partido_arbitro`
--

DROP TABLE IF EXISTS `partido_arbitro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `partido_arbitro` (
  `id_partido` int(11) NOT NULL,
  `id_arbitro` int(11) NOT NULL,
  `rol` varchar(20) NOT NULL,
  PRIMARY KEY (`id_partido`,`id_arbitro`),
  KEY `id_arbitro` (`id_arbitro`),
  CONSTRAINT `partido_arbitro_ibfk_1` FOREIGN KEY (`id_partido`) REFERENCES `partido` (`id_partido`),
  CONSTRAINT `partido_arbitro_ibfk_2` FOREIGN KEY (`id_arbitro`) REFERENCES `arbitro` (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partido_arbitro`
--

LOCK TABLES `partido_arbitro` WRITE;
/*!40000 ALTER TABLE `partido_arbitro` DISABLE KEYS */;
INSERT INTO `partido_arbitro` VALUES
(1,13,'Principal'),
(2,13,'Principal'),
(3,13,'Principal'),
(4,13,'Principal'),
(5,13,'Principal'),
(6,13,'Principal'),
(7,13,'Principal'),
(8,13,'Principal'),
(9,14,'Principal'),
(10,14,'Principal'),
(11,14,'Principal'),
(12,14,'Principal'),
(13,14,'Principal'),
(14,14,'Principal'),
(15,14,'Principal'),
(16,14,'Principal'),
(17,15,'Principal'),
(18,15,'Principal'),
(19,15,'Principal'),
(20,15,'Principal'),
(21,15,'Principal'),
(22,15,'Principal'),
(23,15,'Principal'),
(24,15,'Principal'),
(25,16,'Principal'),
(26,16,'Principal'),
(27,16,'Principal'),
(28,16,'Principal'),
(29,16,'Principal'),
(30,16,'Principal'),
(31,16,'Principal'),
(32,16,'Principal'),
(33,17,'Principal'),
(34,17,'Principal'),
(35,17,'Principal'),
(36,17,'Principal'),
(37,17,'Principal'),
(38,17,'Principal'),
(39,17,'Principal'),
(40,17,'Principal'),
(41,18,'Principal'),
(42,18,'Principal'),
(43,18,'Principal'),
(44,18,'Principal'),
(45,18,'Principal'),
(46,18,'Principal'),
(47,18,'Principal'),
(48,18,'Principal'),
(49,19,'Principal'),
(50,19,'Principal'),
(51,19,'Principal'),
(52,19,'Principal'),
(53,19,'Principal'),
(54,19,'Principal'),
(55,19,'Principal'),
(56,19,'Principal'),
(57,20,'Principal'),
(58,20,'Principal'),
(59,20,'Principal'),
(60,20,'Principal'),
(61,20,'Principal'),
(62,20,'Principal'),
(63,20,'Principal'),
(64,20,'Principal'),
(65,127,'Principal'),
(66,133,'Principal'),
(67,119,'Principal'),
(68,122,'Principal'),
(69,128,'Principal'),
(70,131,'Principal'),
(71,120,'Principal'),
(72,124,'Principal'),
(73,130,'Principal'),
(74,117,'Principal'),
(75,134,'Principal'),
(76,121,'Principal'),
(77,126,'Principal'),
(78,125,'Principal'),
(79,129,'Principal'),
(80,118,'Principal'),
(81,132,'Principal'),
(82,123,'Principal'),
(83,122,'Principal'),
(84,117,'Principal'),
(85,133,'Principal'),
(86,126,'Principal'),
(87,120,'Principal'),
(88,129,'Principal'),
(89,124,'Principal'),
(90,118,'Principal'),
(91,131,'Principal'),
(92,134,'Principal'),
(93,125,'Principal'),
(94,121,'Principal'),
(95,119,'Principal'),
(96,128,'Principal'),
(97,132,'Principal'),
(98,127,'Principal'),
(99,123,'Principal'),
(100,130,'Principal'),
(101,118,'Principal'),
(102,134,'Principal'),
(103,121,'Principal'),
(104,126,'Principal'),
(105,122,'Principal'),
(106,117,'Principal'),
(107,124,'Principal'),
(108,129,'Principal'),
(109,123,'Principal'),
(110,133,'Principal'),
(111,130,'Principal'),
(112,119,'Principal'),
(113,120,'Principal'),
(114,125,'Principal'),
(115,117,'Principal'),
(116,149,'Principal'),
(117,150,'Principal'),
(118,136,'Principal'),
(119,144,'Principal'),
(120,151,'Principal'),
(121,140,'Principal'),
(122,135,'Principal'),
(123,141,'Principal'),
(124,147,'Principal'),
(125,145,'Principal'),
(126,137,'Principal'),
(127,148,'Principal'),
(128,139,'Principal'),
(129,152,'Principal'),
(130,143,'Principal'),
(131,138,'Principal'),
(132,146,'Principal'),
(133,135,'Principal'),
(134,142,'Principal'),
(135,144,'Principal'),
(136,150,'Principal'),
(137,141,'Principal'),
(138,136,'Principal'),
(139,149,'Principal'),
(140,139,'Principal'),
(141,140,'Principal'),
(142,152,'Principal'),
(143,138,'Principal'),
(144,143,'Principal'),
(145,147,'Principal'),
(146,135,'Principal'),
(147,141,'Principal');
/*!40000 ALTER TABLE `partido_arbitro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `id_persona` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES
(1,'Manuel','Neuer'),
(2,'Toni','Kroos'),
(3,'Thomas','Muller'),
(4,'Miroslav','Klose'),
(5,'Lionel','Messi'),
(6,'Angel','Di Maria'),
(7,'Neymar','Jr'),
(8,'David','Luiz'),
(9,'James','Rodriguez'),
(10,'Juan','Cuadrado'),
(11,'Arjen','Robben'),
(12,'Robin','van Persie'),
(13,'Nicola','Rizzoli'),
(14,'Nestor','Pitana'),
(15,'Howard','Webb'),
(16,'Bjorn','Kuipers'),
(17,'Cuneyt','Cakir'),
(18,'Ravshan','Irmatov'),
(19,'Joel','Aguilar'),
(20,'Mark','Geiger'),
(21,'Paul','Pogba'),
(22,'Karim','Benzema'),
(23,'Raphael','Varane'),
(24,'Antoine','Griezmann'),
(25,'Eden','Hazard'),
(26,'Kevin','De Bruyne'),
(27,'Thibaut','Courtois'),
(28,'Romelu','Lukaku'),
(29,'Luis','Suarez'),
(30,'Edinson','Cavani'),
(31,'Diego','Godin'),
(32,'Fernando','Muslera'),
(33,'Arturo','Vidal'),
(34,'Alexis','Sanchez'),
(35,'Claudio','Bravo'),
(36,'Gary','Medel'),
(37,'Cristiano','Ronaldo'),
(38,'Pepe','Ferreira'),
(39,'Joao','Moutinho'),
(40,'Nani','da Cunha'),
(41,'Wayne','Rooney'),
(42,'Steven','Gerrard'),
(43,'Daniel','Sturridge'),
(44,'Joe','Hart'),
(45,'Andrea','Pirlo'),
(46,'Gianluigi','Buffon'),
(47,'Mario','Balotelli'),
(48,'Giorgio','Chiellini'),
(49,'Andres','Iniesta'),
(50,'Xavi','Hernandez'),
(51,'Iker','Casillas'),
(52,'Sergio','Ramos'),
(53,'Keylor','Navas'),
(54,'Bryan','Ruiz'),
(55,'Guillermo','Ochoa'),
(56,'Javier','Hernandez'),
(57,'Lamine','Yamal'),
(58,'Nico','Williams'),
(59,'Rodri','Hernandez'),
(60,'Dani','Carvajal'),
(61,'Jude','Bellingham'),
(62,'Harry','Kane'),
(63,'Bukayo','Saka'),
(64,'Phil','Foden'),
(65,'Kylian','Mbappe'),
(66,'Antoine','Griezmann'),
(67,'Aurelien','Tchouameni'),
(68,'William','Saliba'),
(69,'Jamal','Musiala'),
(70,'Florian','Wirtz'),
(71,'Ilkay','Gundogan'),
(72,'Antonio','Rudiger'),
(73,'Bruno','Fernandes'),
(74,'Bernardo','Silva'),
(75,'Ruben','Dias'),
(76,'Diogo','Costa'),
(77,'Virgil','van Dijk'),
(78,'Cody','Gakpo'),
(79,'Xavi','Simons'),
(80,'Memphis','Depay'),
(81,'Nicolo','Barella'),
(82,'Federico','Chiesa'),
(83,'Gianluigi','Donnarumma'),
(84,'Alessandro','Bastoni'),
(85,'Jeremy','Doku'),
(86,'Yannick','Carrasco'),
(87,'Amadou','Onana'),
(88,'Leandro','Trossard'),
(89,'Luka','Modric'),
(90,'Josko','Gvardiol'),
(91,'Mateo','Kovacic'),
(92,'Ivan','Perisic'),
(93,'Emiliano','Martinez'),
(94,'Julian','Alvarez'),
(95,'Lautaro','Martinez'),
(96,'Alexis','Mac Allister'),
(97,'Enzo','Fernandez'),
(98,'Vinicius','Junior'),
(99,'Rodrygo','Goes'),
(100,'Bruno','Guimaraes'),
(101,'Gabriel','Martinelli'),
(102,'Alisson','Becker'),
(103,'Federico','Valverde'),
(104,'Darwin','Nunez'),
(105,'Ronald','Araujo'),
(106,'Jose Maria','Gimenez'),
(107,'Luis','Diaz'),
(108,'James','Rodriguez'),
(109,'Jhon','Arias'),
(110,'Jefferson','Lerma'),
(111,'Daniel','Munoz'),
(112,'Alexis','Sanchez'),
(113,'Marcelino','Nunez'),
(114,'Moises','Caicedo'),
(115,'Piero','Hincapie'),
(116,'Kendry','Paez'),
(117,'Szymon','Marciniak'),
(118,'Michael','Oliver'),
(119,'Anthony','Taylor'),
(120,'Daniele','Orsato'),
(121,'Clément','Turpin'),
(122,'François','Letexier'),
(123,'Slavko','Vincic'),
(124,'Felix','Zwayer'),
(125,'Danny','Makkelie'),
(126,'Artur','Soares Dias'),
(127,'Istvan','Kovacs'),
(128,'Glenn','Nyberg'),
(129,'Halil Umut','Meler'),
(130,'Sandro','Schärer'),
(131,'Jesús','Gil Manzano'),
(132,'Daniel','Siebert'),
(133,'Marco','Guida'),
(134,'Facundo','Tello'),
(135,'Wilmar','Roldán'),
(136,'Piero','Maza'),
(137,'Darío','Herrera'),
(138,'Yael','Falcón Pérez'),
(139,'Wilton','Sampaio'),
(140,'Raphael','Claus'),
(141,'Andrés','Matonte'),
(142,'Gustavo','Tejera'),
(143,'Jesús','Valenzuela'),
(144,'Alexis','Herrera'),
(145,'Augusto','Aragón'),
(146,'Kevin','Ortega'),
(147,'Mauricio','Mariani'),
(148,'Iván','Barton'),
(149,'Mario','Escobar'),
(150,'Ismail','Elfath'),
(151,'Tori','Penso'),
(152,'César Arturo','Ramos');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torneo`
--

DROP TABLE IF EXISTS `torneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `torneo` (
  `id_torneo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `año_edicion` int(11) NOT NULL,
  PRIMARY KEY (`id_torneo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneo`
--

LOCK TABLES `torneo` WRITE;
/*!40000 ALTER TABLE `torneo` DISABLE KEYS */;
INSERT INTO `torneo` VALUES
(1,'FIFA World Cup','Profesional',2014),
(2,'UEFA EURO','Profesional',2024),
(3,'CONMEBOL COPA AMERICA','Profesional',2024);
/*!40000 ALTER TABLE `torneo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torneo_equipo`
--

DROP TABLE IF EXISTS `torneo_equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `torneo_equipo` (
  `id_torneo` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL,
  PRIMARY KEY (`id_torneo`,`id_equipo`),
  KEY `id_equipo` (`id_equipo`),
  CONSTRAINT `torneo_equipo_ibfk_1` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`id_torneo`),
  CONSTRAINT `torneo_equipo_ibfk_2` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneo_equipo`
--

LOCK TABLES `torneo_equipo` WRITE;
/*!40000 ALTER TABLE `torneo_equipo` DISABLE KEYS */;
INSERT INTO `torneo_equipo` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(1,10),
(1,11),
(1,12),
(1,13),
(1,14),
(1,15),
(1,16),
(1,17),
(1,18),
(1,19),
(1,20),
(1,21),
(1,22),
(1,23),
(1,24),
(1,25),
(1,26),
(1,27),
(1,28),
(1,29),
(1,30),
(1,31),
(1,32),
(2,1),
(2,4),
(2,6),
(2,7),
(2,9),
(2,16),
(2,21),
(2,29),
(2,30),
(2,32),
(2,33),
(2,34),
(2,35),
(2,36),
(2,37),
(2,38),
(2,39),
(2,40),
(2,41),
(2,42),
(2,43),
(2,44),
(2,45),
(2,46),
(3,2),
(3,3),
(3,5),
(3,8),
(3,10),
(3,14),
(3,19),
(3,22),
(3,31),
(3,47),
(3,48),
(3,49),
(3,50),
(3,51),
(3,52),
(3,53);
/*!40000 ALTER TABLE `torneo_equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'torneos_futbol'
--
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP FUNCTION IF EXISTS `partidos_jugados` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `partidos_jugados`(p_id_equipo INT, p_id_torneo INT) RETURNS int(11)
    READS SQL DATA
    DETERMINISTIC
BEGIN
    DECLARE total INT;
    SELECT COUNT(*) INTO total
    FROM partido
    WHERE id_torneo = p_id_torneo
      AND (id_equipo_local = p_id_equipo OR id_equipo_visitante = p_id_equipo);
    RETURN total;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `partidos_por_torneo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `partidos_por_torneo`(IN p_id_torneo INT)
BEGIN
    SELECT 
        p.id_partido,
        p.fecha,
        p.marcador,
        e_local.nombre AS equipo_local,
        e_visitante.nombre AS equipo_visitante,
        est.nombre AS estadio,
        CONCAT(per.nombre, ' ', per.apellidos) AS arbitro
    FROM partido p
    JOIN equipo e_local ON p.id_equipo_local = e_local.id_equipo
    JOIN equipo e_visitante ON p.id_equipo_visitante = e_visitante.id_equipo
    JOIN estadio est ON p.id_estadio = est.id_estadio
    LEFT JOIN arbitro a ON p.id_arbitro = a.id_persona
    LEFT JOIN persona per ON a.id_persona = per.id_persona
    WHERE p.id_torneo = p_id_torneo
    ORDER BY p.id_partido ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-24 13:26:15
