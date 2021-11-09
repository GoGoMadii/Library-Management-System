-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: lms
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `RegNo` int NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `MobileNo` bigint DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RegNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (2050502020,'Admin','2001-01-18',9876543210,'testAdmin@test.com');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book-transaction`
--

DROP TABLE IF EXISTS `book-transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book-transaction` (
  `bookid` int NOT NULL,
  `studentid` int DEFAULT NULL,
  `borrowDate` date DEFAULT NULL,
  `returnDate` date DEFAULT NULL,
  `Returned` varchar(10) DEFAULT NULL,
  `ReturnedDate` date DEFAULT NULL,
  `RenewDate` date DEFAULT NULL,
  PRIMARY KEY (`bookid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book-transaction`
--

LOCK TABLES `book-transaction` WRITE;
/*!40000 ALTER TABLE `book-transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `book-transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nptellinks`
--

DROP TABLE IF EXISTS `nptellinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nptellinks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) DEFAULT NULL,
  `qr` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nptellinks`
--

LOCK TABLES `nptellinks` WRITE;
/*!40000 ALTER TABLE `nptellinks` DISABLE KEYS */;
INSERT INTO `nptellinks` VALUES (1,'electron',_binary '�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0\�\0\0\0\�\0\0\0�X��\0\0\0sRGB\0�\�\�\0\0IDATx^\�\�v\�8;��\�ٓLϬ\�X\"Q ʪ}\rA��{	R\�ُ\�\�\�\�?�OxI\�C��	l\� �C;4��Q`\� ��Q7!�AnRh�\�h\�ͨ�\� 7)�\�d4\�f\�Mh��\�m2\Z�q3\�&\�����<��~�\�eo�w��� H\�5HRu\�A\�\�\�I˧\� ��	�\�\�\ZdD\�����\�A�\�A�@N�A&\�P��5Ȉ\��\'u��$\�M�$�,�F�L\�%�FSk����N\�\�AHUخ\"ؽ�w\�\"���n\�K�m\��On��H�쎫%\�CE.U�\� \�R�t\�U��\�\"��e�g\�\�+\�S	(`\ZW!ʕr	+�`@�\�5���d�����\� \ZdJ�\�Z\�\�S�h�)fojQ0(;\�6�T�+`��\�\�\�s4}�\�\�U�z\�58�2C�O��ܨ(5\�\�\�j�L���4HZ��7W\�����j\�W�x��Eh�8?\r2ɬ\�dJ\�a\Z$�\�Ogݽb\�\�\Z�A\�85\�$�NP�)��i�02;\�,�\n���V�\�5\�\�y�\��^�?R!R\�\��h͓ƭ��_�\\��T@4�r�q+\�A4\�P�T\�4n�\�\�\0��W����\�\�*߁�\� �P���8�W:p4�\� ;�׸\Z$� {\n�\��ڊ�\�q�KE��>�H\� �A	�;H\���h`�C+֣sV\�Q.v�Ir���R�\"�\�ίa\�\�9+\�(�κ\�AU�\"	,a���A& U}��\r\�\�7\�\�\����\�FOtT��\�kN��Ea\�8*f�\�V�H(��8���BE�\�Ķ7H�M\�\��4H\�\�*u��<�\'e\�\�\�-��=\�A�ҫK�h�v;\�)�t\r\�M �\�v;\�PmT\\É\�=h\r2�)\�p\�\�t\Zd\� ��<�T�*\�<W\��P1\Z���S?�6\��\�RW\�U�<T�\�`\r2	�*»J��\�O�A&Kp\�]%\�I\�\� �%���\�$�Ӈi�\�\\ExW\�s�\�\�4\�d	�\"��\�9���a-9}�\'&@�\�^ʤh_�\�\�\�\'\�\�\�\�ϼ�\�eR\�\Z$	䅦\� �bi�\0�7�A�\� Xo2T�\n�A�\�d�	R�`�\�P\r(�	�z��a�T�����\��\�\�\�w`FY�G\�A�1TI\�OOC�|��iH5��A~�?ZvǑRkBM�h�-ݼ\�}:\�?��W��\\*\�Jt+\�\�vB\�b��ĜCO\�\�*\�G\�<\�!�\�K\� \"��\rW\�T<8+�\�+2�-�\�\�{{��I\�5��\"��B�T\\Ԑt\�}\�z\Z�V\�)�M�\�@Y\�W��G�jv��G:E�A\�U\�aia\�Յ\�\�镇\�I\�\�\�W��\�\�A�\�B�\�+^\0\�:��W,\�\�e-�������tq�t��^]\�5�\�a��U����bQQ�j�>i�I֫�\Z�[\��\�0\��\n_�\�v�$�h�$��\� �<W5JW��\���J\�\� ��m�\� I \� 1���$��5ȈP\�\�\�=��\�!Xe\�_9V���]/&\�������bH�Nr\� O�	đ\�V2\�(׭�k�Ir�\�#L�R\�)3B�AF����\�\�b�R\'=\�*:r\�\�A4�\�!�A4�\� ?	d\�SG\n[i�Q�>ҟ���$\�G:-}�SQ������C.A�o�튵`�\�\�C��+\�;\r�6;\�k\�u��\�@\r�A�\�\� CD?x\�z\�\�$&�#��\�j���\�-J�XÒ\�\r�Ŧqu;\�y��w\�t!\�}f��\�T��O���Tqm�{��P1�G\�\���((���:CEI�\'{q4���\�yhj�#ʟ���\� �	h��\���v[�i�\\�k\r24.�^R�z\�\Z�\�؃���t\�ɭ�\r���\�yHA}�j�\r�+�\�^�h\�\��p\�y�\�+֣�i\�a\��	*�$uH\� �\nr�\ZN@�=�b=ʚ\�M�MT�\'��	\��up�9�H89I\� G�\�c5H�YZ��?�\�\�ON�A&AU\� \ZdVW�AfI�G���\',�`JZ�\'�C�A��\�\�\�q{y�R��\�Ǆw߻y�p���(I\�4\�6zhn\�h�\�D\�R�1��\��	���+R\� 	\�A�@a\�V�\�~�\�^��\� �cZ�h��\\\�\�W�\�ȩ6*퐾AN|�T���\na$L�����\�mC;ršr�W,\r�{=�&�0\�\�[\� 	j\n�\n��t�\�\�S�Pe\�\�\�\�v;\�3;�dx\\\�A\�Gg���<է�W�\�\���\�\�#}x��3@�L�J��W�.KOAO.zU���\�\�\�=-\Z͓r�y�u�\�V�O�\�VD�\��<}6\r�[\r�\���\�4Hn	4H.\�\�g\� �%\� �<O�M�\�@�\��<}6\r�[�\��n8��\�V��Ny\�Ϡ@O\�%�3v\�/\�\�d\�]QP�=��\'\�4\�gz\�\�\��O�yM�r��P%>\�\�A^C�\�B\r� t:E�h.T\�0\�X\\4UƉqB�\�\� ^��v\�\�4�W�Yq�>\�i۟M62����5\�]�\"�������~��A\�*DI��T\�A~WC�h��h\r�M�\n�\�Զ����g\�C\� j\Z$\0\�\�P\� \�\�\�\�>��b��>f�A4\��ڶ�H*z�t_/#\�n��EE\�\r�\�Y\�=��\����Ĭ�{\�\�>\�\� E�\0L�\� q�T\�/�\�~�y\�A�%�=�y`C�\�+�3h��\�+i\r2V\�\�\� �\�\���^��bekjz>;�dZ,�\�A\� �TqU���\�Q��n��YɗF�XIW,*\�\n�\�\\�\�4\�$Օ@U�\��Z+\�}R���\�A&\�<\�X�0^�*\�\�\�\� \Z$��\�;\�A\�N@\�&��\�\\\�iJ,�6�{8��%\�|��@�2��\�\"\�\�\�#�7\r0\�J��\�#&Ɏ�D:\r�A�u?=��|4O}\ZXq�\�\�(\��\�\�A^Ȯ�\�R\�\�9\� v�)�l\r�С���+�gy(�W�׊\���@}�A\� T;\�q:�Prp\��.\�A�\����h}lW��Tx�\�߽^\'\�G�P\�\��\�i\\g\�F��۽^\'k\r\���\�tT$#sm����*֣{\'\�Z�h�)\rk�)L�G\�\�\�e\�\�\�M\�:O��\�+O�z��\� v��߾�n�\�d�\��cXEW��(\�_��U�\���)C+NÊ9\�f���W\�\�zŢ펫sŜ�]\�+N�<л\n���W��bN*Z\r�\�b	<һM�A(\rr�\\\�i_1\'\�$9)\�Z^��N\�#Ȏ�sŜt\�\Z\�B��W!\�9\�&5ȉ�E3NW$~�_q�\�,J@�Pr\�݂��E�\�$%�A(9\�nA@�ܢ\�n�\� ��q� �AnQf7I	hJθ[\� �(���4%g\�-h�[�\�MR\Z��3\��I���\�x\0\0\0\0\0IEND�B`�');
/*!40000 ALTER TABLE `nptellinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recentupdates`
--

DROP TABLE IF EXISTS `recentupdates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recentupdates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `qr` longblob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recentupdates`
--

LOCK TABLES `recentupdates` WRITE;
/*!40000 ALTER TABLE `recentupdates` DISABLE KEYS */;
INSERT INTO `recentupdates` VALUES (1,'electron',_binary '�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0\�\0\0\0\�\0\0\0�X��\0\0\0sRGB\0�\�\�\0\0IDATx^\�\�v\�8;��\�ٓLϬ\�X\"Q ʪ}\rA��{	R\�ُ\�\�\�\�?�OxI\�C��	l\� �C;4��Q`\� ��Q7!�AnRh�\�h\�ͨ�\� 7)�\�d4\�f\�Mh��\�m2\Z�q3\�&\�����<��~�\�eo�w��� H\�5HRu\�A\�\�\�I˧\� ��	�\�\�\ZdD\�����\�A�\�A�@N�A&\�P��5Ȉ\��\'u��$\�M�$�,�F�L\�%�FSk����N\�\�AHUخ\"ؽ�w\�\"���n\�K�m\��On��H�쎫%\�CE.U�\� \�R�t\�U��\�\"��e�g\�\�+\�S	(`\ZW!ʕr	+�`@�\�5���d�����\� \ZdJ�\�Z\�\�S�h�)fojQ0(;\�6�T�+`��\�\�\�s4}�\�\�U�z\�58�2C�O��ܨ(5\�\�\�j�L���4HZ��7W\�����j\�W�x��Eh�8?\r2ɬ\�dJ\�a\Z$�\�Ogݽb\�\�\Z�A\�85\�$�NP�)��i�02;\�,�\n���V�\�5\�\�y�\��^�?R!R\�\��h͓ƭ��_�\\��T@4�r�q+\�A4\�P�T\�4n�\�\�\0��W����\�\�*߁�\� �P���8�W:p4�\� ;�׸\Z$� {\n�\��ڊ�\�q�KE��>�H\� �A	�;H\���h`�C+֣sV\�Q.v�Ir���R�\"�\�ίa\�\�9+\�(�κ\�AU�\"	,a���A& U}��\r\�\�7\�\�\����\�FOtT��\�kN��Ea\�8*f�\�V�H(��8���BE�\�Ķ7H�M\�\��4H\�\�*u��<�\'e\�\�\�-��=\�A�ҫK�h�v;\�)�t\r\�M �\�v;\�PmT\\É\�=h\r2�)\�p\�\�t\Zd\� ��<�T�*\�<W\��P1\Z���S?�6\��\�RW\�U�<T�\�`\r2	�*»J��\�O�A&Kp\�]%\�I\�\� �%���\�$�Ӈi�\�\\ExW\�s�\�\�4\�d	�\"��\�9���a-9}�\'&@�\�^ʤh_�\�\�\�\'\�\�\�\�ϼ�\�eR\�\Z$	䅦\� �bi�\0�7�A�\� Xo2T�\n�A�\�d�	R�`�\�P\r(�	�z��a�T�����\��\�\�\�w`FY�G\�A�1TI\�OOC�|��iH5��A~�?ZvǑRkBM�h�-ݼ\�}:\�?��W��\\*\�Jt+\�\�vB\�b��ĜCO\�\�*\�G\�<\�!�\�K\� \"��\rW\�T<8+�\�+2�-�\�\�{{��I\�5��\"��B�T\\Ԑt\�}\�z\Z�V\�)�M�\�@Y\�W��G�jv��G:E�A\�U\�aia\�Յ\�\�镇\�I\�\�\�W��\�\�A�\�B�\�+^\0\�:��W,\�\�e-�������tq�t��^]\�5�\�a��U����bQQ�j�>i�I֫�\Z�[\��\�0\��\n_�\�v�$�h�$��\� �<W5JW��\���J\�\� ��m�\� I \� 1���$��5ȈP\�\�\�=��\�!Xe\�_9V���]/&\�������bH�Nr\� O�	đ\�V2\�(׭�k�Ir�\�#L�R\�)3B�AF����\�\�b�R\'=\�*:r\�\�A4�\�!�A4�\� ?	d\�SG\n[i�Q�>ҟ���$\�G:-}�SQ������C.A�o�튵`�\�\�C��+\�;\r�6;\�k\�u��\�@\r�A�\�\� CD?x\�z\�\�$&�#��\�j���\�-J�XÒ\�\r�Ŧqu;\�y��w\�t!\�}f��\�T��O���Tqm�{��P1�G\�\���((���:CEI�\'{q4���\�yhj�#ʟ���\� �	h��\���v[�i�\\�k\r24.�^R�z\�\Z�\�؃���t\�ɭ�\r���\�yHA}�j�\r�+�\�^�h\�\��p\�y�\�+֣�i\�a\��	*�$uH\� �\nr�\ZN@�=�b=ʚ\�M�MT�\'��	\��up�9�H89I\� G�\�c5H�YZ��?�\�\�ON�A&AU\� \ZdVW�AfI�G���\',�`JZ�\'�C�A��\�\�\�q{y�R��\�Ǆw߻y�p���(I\�4\�6zhn\�h�\�D\�R�1��\��	���+R\� 	\�A�@a\�V�\�~�\�^��\� �cZ�h��\\\�\�W�\�ȩ6*퐾AN|�T���\na$L�����\�mC;ršr�W,\r�{=�&�0\�\�[\� 	j\n�\n��t�\�\�S�Pe\�\�\�\�v;\�3;�dx\\\�A\�Gg���<է�W�\�\���\�\�#}x��3@�L�J��W�.KOAO.zU���\�\�\�=-\Z͓r�y�u�\�V�O�\�VD�\��<}6\r�[\r�\���\�4Hn	4H.\�\�g\� �%\� �<O�M�\�@�\��<}6\r�[�\��n8��\�V��Ny\�Ϡ@O\�%�3v\�/\�\�d\�]QP�=��\'\�4\�gz\�\�\��O�yM�r��P%>\�\�A^C�\�B\r� t:E�h.T\�0\�X\\4UƉqB�\�\� ^��v\�\�4�W�Yq�>\�i۟M62����5\�]�\"�������~��A\�*DI��T\�A~WC�h��h\r�M�\n�\�Զ����g\�C\� j\Z$\0\�\�P\� \�\�\�\�>��b��>f�A4\��ڶ�H*z�t_/#\�n��EE\�\r�\�Y\�=��\����Ĭ�{\�\�>\�\� E�\0L�\� q�T\�/�\�~�y\�A�%�=�y`C�\�+�3h��\�+i\r2V\�\�\� �\�\���^��bekjz>;�dZ,�\�A\� �TqU���\�Q��n��YɗF�XIW,*\�\n�\�\\�\�4\�$Օ@U�\��Z+\�}R���\�A&\�<\�X�0^�*\�\�\�\� \Z$��\�;\�A\�N@\�&��\�\\\�iJ,�6�{8��%\�|��@�2��\�\"\�\�\�#�7\r0\�J��\�#&Ɏ�D:\r�A�u?=��|4O}\ZXq�\�\�(\��\�\�A^Ȯ�\�R\�\�9\� v�)�l\r�С���+�gy(�W�׊\���@}�A\� T;\�q:�Prp\��.\�A�\����h}lW��Tx�\�߽^\'\�G�P\�\��\�i\\g\�F��۽^\'k\r\���\�tT$#sm����*֣{\'\�Z�h�)\rk�)L�G\�\�\�e\�\�\�M\�:O��\�+O�z��\� v��߾�n�\�d�\��cXEW��(\�_��U�\���)C+NÊ9\�f���W\�\�zŢ펫sŜ�]\�+N�<л\n���W��bN*Z\r�\�b	<һM�A(\rr�\\\�i_1\'\�$9)\�Z^��N\�#Ȏ�sŜt\�\Z\�B��W!\�9\�&5ȉ�E3NW$~�_q�\�,J@�Pr\�݂��E�\�$%�A(9\�nA@�ܢ\�n�\� ��q� �AnQf7I	hJθ[\� �(���4%g\�-h�[�\�MR\Z��3\��I���\�x\0\0\0\0\0IEND�B`�');
/*!40000 ALTER TABLE `recentupdates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `StaffID` int NOT NULL,
  `StaffName` varchar(100) NOT NULL,
  `Designation` varchar(100) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `FINE` int DEFAULT '0',
  `LendAllowed` varchar(10) DEFAULT 'Yes',
  PRIMARY KEY (`StaffID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (61119,'Test-Staff','Proffesor','1979-05-20','test@testCollegen.edu','98765432111',0,'Yes');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `RegNo` bigint NOT NULL,
  `StudentName` varchar(100) NOT NULL,
  `DOB` date NOT NULL,
  `GraduatingYear` date NOT NULL,
  `e-mailID` varchar(100) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `Fine` int DEFAULT '0',
  `LendAllowed` varchar(45) DEFAULT 'Yes',
  PRIMARY KEY (`RegNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (2050502020,'Test-Student','2001-01-18','2023-08-01','test@test.com','9876543210',0,'Yes');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 11:13:56
