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
INSERT INTO `nptellinks` VALUES (1,'electron',_binary '‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0\È\0\0\0\È\0\0\0­X®\0\0\0sRGB\0®\Î\é\0\0IDATx^\íœ\Ñv\ã8;ÿÿ\ÑÙ“LÏ¬\ãX\"Q Êª}\rA‚…{	R\îÙ\Ï\Ï\Ï\Ï?şOxI\àCƒ¨	l\Ğ ªC;4ˆò€Q`\ì Œ›Q7! AnRh·\Éh\ÆÍ¨›\Ğ 7)´\Ûd4\ãf\ÔMh›\Úm2\Z„q3\ê&\Âùøø¸<šŠ~¶\Çeo½wˆ»Š H\İ5HRu\ßA\è\Ô\ÈIË§\Ñ “ˆ	¨\Ñ\Ô\ZdD\èü¿“º\ÛA’\ê¦A’@N£A&\áP£©5Èˆ\Ğù\'u·ƒ$\ÕMƒ$,œFƒL\Â% FSk¡óÿN\ê\ÚAHUØ®\"Ø½ıw\ï¡\"—ªún\ÍK™m\ÎıOn³¨Hóì«%\İCE.Uõ\Õ \ÉR‘t\ÇUˆ’\î¡\"—ƒe‡g\ï\İ+\ÖS	(`\ZW!Ê•r	+ü`@ö\Ş5ˆ™’d¶ğ¦ƒ²ó\Ô \ZdJ†\ÙÂ›Z\Ê\ÎSƒh)fojQ0(;\Ï6ƒTü+`ú\ë\Ş\ás4}»\ì\ÅUğ¼z\İ58¥2C²O¼¯Ü¨(5\È\ï\ÊjLµƒ¹4HZ…‘7W\éú¡j\İW‚x¹Eh8?\r2É¬\ÔdJ\áa\Z$Œ\ìOgİ½b\Å\ë“\Z¡A\â85\È$³NP“)…‡i02;\È,²\nƒ¬ôVš\å5\î\İy’\Ïû^±?R!R\á\ÑõhÍ“Æ­”§_±\\¥ T@4r¡q+\å©A4\ÈPT\è4n˜\Ğ\Æ\0ºW¬ ôñ\ë\äµ*ß§\Ñ ôPş«8™W:p4ˆ\Ñ ;ÿ×¸\Z$Á {\n£\×ªÚŠõ\èœq”KE§ó‘>ùH\× ¾A	ø;H\à£§h`‰C+Ö£sV\ÄQ.vIr ¾R¢\"™\ÜÎ¯a\ë\Ñ9+\â(—Îº\ÛAU¢\"	,a™€¥A& U}–ô\r\â\Ä7\È\ç\ç¤³ƒ¼\ÆFOtT„¢\ßkNÿŠEa\Ğ8*fú\ÃV·H(—½8ºòûBEş\ïÄ¶7HM\ç\ÃŒ4H\î\ë*u·ƒ< \'e\Å\é\Û- Š=\ØA¨Ò«K·hv;\È)t\r\ÒM ¾\í¬v;\ÈPmT\\Ã‰\Ğ=h\r2”)\×p\â\Æt\Zd\Ò µ<´T…*\Ş<W\ÉóP1\Zƒ‰‘S?ó6\îõ\ĞRW\ŞUò<TŒ\Æ`\r2	û*Â»J“\ØO¦A&Kp\á]%\ÏI\ì§\Ó “%¸Šğ®’\ç$öÓ‡i\É\\ExW\Ésû\é\Ã4\Èd	®\"¼«\ä9‰ıôa-9}—\'&@ÿ\Ê^Ê¤h_ó\Ñ\Ï\Ê\'\â»\ä\Ò\áÏ¼—\ÜeR\Ò\Z$	ä…¦\Ñ bi\0¬7ªA…\Ô Xo2Tƒ\n©A°\Şd¨	Rƒ`½\ÉP\r(¤	Àz“¡aƒTˆ„²¤¿\Ğõ\è\ç\Úw`FY¯G\ê®Aµ1TI\ËOOCó|‡¸iH5¡¦A~ ?ZvÇ‘RkBMƒh-İ¼\Ã}:\É?¦¡WŠ\\*\ŞJt+\Å\ÖvB\Íb±ƒÄœCO\Ê\Ø*\ÇG\Ó<\ß!\ĞK\í \"½\rW\ÅT<8+¸\Ğ+2­-ı\×\Ê{{§¬I\í5¡ö\"†­B°T\\Ôt\ï}\çz\Z„V\é)Mƒ\Ä@Y\ÇWúóGƒjv”G:E¯A\ÈU\Üaia\èÕ…\Ş\ßé•‡\æI\×\ë\ìW\ë\ÙA’\ÜB‹\æ+^\0\Ê:¾’W,\Â\ìe-š‰—€²¯tqƒt‹‹^]\è5‘\îaµ˜U®¥—¾bQQÁj>iIÖ«€\Z¥[\Ñö\é0\Êõ\n_¥\îv$µh$§\Ñ “<W5JWƒŒ\Åş¾J\İ\í ±ºm\Ö I \í 1«œ$£¬5ÈˆP\ì\ï«\Ô=µƒ\ì!Xe\Ã_9Vˆ¹û]/&\Óÿ¦õ«øbH÷Nr\Ñ O´	Ä‘\èV2\ä(×­¿kIrô\Ó#L»R\ç)3B§AF„òş\Í\Úb™R\'=\à*:r\ç\á§A4ˆ\Ù! A4ˆ\Ñ ?	d\ßSG\n[i½Q®>ÒŸ´ò¼$\ÒG:-}¤SQ®´¿•˜½C.A©o¹íŠµ`ú\à¬\ØC÷œ+\í½;\rò 6;\Èk\ëu‹²\â@\r¢A†\Ú\Ñ CD?x\Åz\â\å$& #£»\Íj±ƒõ\Ú-J¯XÃ’\Ô\r Å¦qu;\é›y¥½w\ç²t!\É}fûø\ØT³Oÿ¬Tqm£{§¹P1¯G\ê\Şö©((“€:CEI¯\'{q4—•„\Şyhj#ÊŸŒ¥¢\Ô ¯	h„\Çö¤v[†i\\¡k\r24.½^R³z\Å\Z–\äØƒ³¢ t\ÎÉ­¦\r£¢ôŠ•\ÛyHA}ƒjÁ\r’+ô\Ë^±h\ê\íğp\Úy¨\Ğ+Ö£¬i\Üa\èÁ	*ò$uH\í ›\nr\ZN@ù=£b=Êš\ÆMMT‘\'©ƒ	\Õ€up¨9ğH89I\ì Gˆ\Çc5HœYZ„‰?š\Ó\àON¤A&AU\Ó \ZdVW¾AfIøG‡†¤\',`JZ‘\'©C›Aö¨\Ñ\ï\Úq{y®R´‘\éÇ„wß»y¨p·˜©(I\Ñ4\È6zhn\Íh©\íD\ÓRû1”š\Õò›€	¨°»+R\Ó 	\ØA¤@a\ĞVƒ\ä~ı\ê¾^’õ\ì cZƒh¡\\\è©\íW¬\×È©6*í¾AN|ƒT‹š\na$Lò÷«ˆ™\ìmC;rÅ¡rúW,\r’{=¡&¯0\ä\È[\× 	j\nŸ\n¡ótú\Ú\ÍSƒPe\Ä\â\Ú\év;\È3;ˆdx\\\ÙA\âGg—·ƒ<Õ§¾W¬\Ï\Í¤û\Æ\á#}x–ÿ3@ƒL‚Jö–W¬.KOAO.zU¢†¤\ë\Ñ\Ç=-\ZÍ“r¡y¦u\ìV›Oƒ\äVDƒ\äò<}6\r’[\r’\Ëóô\Ù4Hn	4H.\Ï\Óg\Ó ¹%\Ğ ¹<OŸMƒ\ä–@ƒ\äò<}6\r’[‚\Û„n8û±\ÙVúşNy\ÒÏ @O\Ê%û3v\ê/\é\Çd\Û]QPš=‚‰\'\Ì4\Ègz\Â\Æ\ËõO„yMr±ƒP%>\Ä\ÙA^C¬\àB\r’ t:E…h.T\äº0\êX\\4UÆ‰qB \Û\Ñ ^±¨v\Ê\â4ˆW¬Yq¥>\ÒiÛŸM62¶ö½5\èœ]¢\"—Šú­´÷ˆ~ş«A\Ô*DI¿ºT\ä¢A~WCƒhÿh\ròM€\n¡\âÔ¶ƒô½‡g\áC\í j\Z$\0\ë\ïP\ß \Ì\è\É\Ç> bö‘>f¡A4\ÈğÚ¶’H*z¨t_/#\ÆnÿŠEE\Ò\r‘\æY\Ñ=©˜\éˆ€Ä¬ô{\Ô\Ö>\Ú\Ş E«\0Ló\Ô q«T\Ô/\Å~„y\â£A²%¶=Ÿy`C…\ç+÷3hŸü\Ç+i\r2V\É\Î\ß ñ\Ã\áğÁ^±¼bekjz>;ˆdZ,¯\ÚA\ì ‡TqU¼•º\ßQ‡ n¿ƒYÉ—F¯XIW,*\Ê\n“\Ó\\ö\â4\È$Õ•@Uˆ\ËòZ+\Õ}Rª¿†\ÙA&\ß<\ÔX´0^±*\È\Å\ç\Ô \Z$®š\É;\ÈA\ÑN@\ã&…†\Ñ\\\ÈiJ,ğ6£{8’‰%\Ì|¤„@Š2Š¡\â\"\Å\å\â#ı7\r0\ÈJ¢¤\ïš#&É¥D:\r¢A²u?=Ÿ™|4O}\ZXq’\Ğ\Ç(\İ½\Ö\ØA^È®Ÿ\ÄR\á\í©9\í v)¡l\rªĞ¡„’ƒ+ögy(’W¬×Š\íş˜@}£A\ì T;\ßq:”Prp\Åş.\ÛA’\Ù§£ h}lWœöTxô\áß½^\'\ë¶GúP\Ñ\É¨\Ği\\g\ÑF¨ºÛ½^\'k\r\Òğ«\ÂtT$#smı¾÷*Ö£{\'\İZƒh)\rk)LûG\â\Ğ\Ée\Ã\Ã\è©M\ã:OµŒ\î+O÷z¬\í v‘ß¾ÿn™\Âd™\ÄôcXEW¢§(\É_ƒ¨U´\ÓÀò)C+NÃŠ9\éf»¯ºW\Ñ\á’zÅ¢í«sÅœ”]\ë+Nƒ<Ğ»\nŒ½‚Wˆ¹bN*Z\ròš\áb	<Ò»M§A(\rrˆ\\\Åi_1\'\İ$9)\éZ^±’N\Ø#È­sÅœt\ß\Z\ÄBµóW!\æŠ9\é&5È‰¡E3NW$~¤_q“\æ,J@ƒPr\Æİ‚€¹E™\İ$% A(9\ãnA@ƒÜ¢\Ìn’\Ğ ”œq·  AnQf7I	hJÎ¸[\Ğ ·(³›¤4%g\Ü-h[”\ÙMR\Z„’3\îşI¿§™\àx\0\0\0\0\0IEND®B`‚');
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
INSERT INTO `recentupdates` VALUES (1,'electron',_binary '‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0\È\0\0\0\È\0\0\0­X®\0\0\0sRGB\0®\Î\é\0\0IDATx^\íœ\Ñv\ã8;ÿÿ\ÑÙ“LÏ¬\ãX\"Q Êª}\rA‚…{	R\îÙ\Ï\Ï\Ï\Ï?şOxI\àCƒ¨	l\Ğ ªC;4ˆò€Q`\ì Œ›Q7! AnRh·\Éh\ÆÍ¨›\Ğ 7)´\Ûd4\ãf\ÔMh›\Úm2\Z„q3\ê&\Âùøø¸<šŠ~¶\Çeo½wˆ»Š H\İ5HRu\ßA\è\Ô\ÈIË§\Ñ “ˆ	¨\Ñ\Ô\ZdD\èü¿“º\ÛA’\ê¦A’@N£A&\áP£©5Èˆ\Ğù\'u·ƒ$\ÕMƒ$,œFƒL\Â% FSk¡óÿN\ê\ÚAHUØ®\"Ø½ıw\ï¡\"—ªún\ÍK™m\ÎıOn³¨Hóì«%\İCE.Uõ\Õ \ÉR‘t\ÇUˆ’\î¡\"—ƒe‡g\ï\İ+\ÖS	(`\ZW!Ê•r	+ü`@ö\Ş5ˆ™’d¶ğ¦ƒ²ó\Ô \ZdJ†\ÙÂ›Z\Ê\ÎSƒh)fojQ0(;\Ï6ƒTü+`ú\ë\Ş\ás4}»\ì\ÅUğ¼z\İ58¥2C²O¼¯Ü¨(5\È\ï\ÊjLµƒ¹4HZ…‘7W\éú¡j\İW‚x¹Eh8?\r2É¬\ÔdJ\áa\Z$Œ\ìOgİ½b\Å\ë“\Z¡A\â85\È$³NP“)…‡i02;\È,²\nƒ¬ôVš\å5\î\İy’\Ïû^±?R!R\á\ÑõhÍ“Æ­”§_±\\¥ T@4r¡q+\å©A4\ÈPT\è4n˜\Ğ\Æ\0ºW¬ ôñ\ë\äµ*ß§\Ñ ôPş«8™W:p4ˆ\Ñ ;ÿ×¸\Z$Á {\n£\×ªÚŠõ\èœq”KE§ó‘>ùH\× ¾A	ø;H\à£§h`‰C+Ö£sV\ÄQ.vIr ¾R¢\"™\ÜÎ¯a\ë\Ñ9+\â(—Îº\ÛAU¢\"	,a™€¥A& U}–ô\r\â\Ä7\È\ç\ç¤³ƒ¼\ÆFOtT„¢\ßkNÿŠEa\Ğ8*fú\ÃV·H(—½8ºòûBEş\ïÄ¶7HM\ç\ÃŒ4H\î\ë*u·ƒ< \'e\Å\é\Û- Š=\ØA¨Ò«K·hv;\È)t\r\ÒM ¾\í¬v;\ÈPmT\\Ã‰\Ğ=h\r2”)\×p\â\Æt\Zd\Ò µ<´T…*\Ş<W\ÉóP1\Zƒ‰‘S?ó6\îõ\ĞRW\ŞUò<TŒ\Æ`\r2	û*Â»J“\ØO¦A&Kp\á]%\ÏI\ì§\Ó “%¸Šğ®’\ç$öÓ‡i\É\\ExW\Ésû\é\Ã4\Èd	®\"¼«\ä9‰ıôa-9}—\'&@ÿ\Ê^Ê¤h_ó\Ñ\Ï\Ê\'\â»\ä\Ò\áÏ¼—\ÜeR\Ò\Z$	ä…¦\Ñ bi\0¬7ªA…\Ô Xo2Tƒ\n©A°\Şd¨	Rƒ`½\ÉP\r(¤	Àz“¡aƒTˆ„²¤¿\Ğõ\è\ç\Úw`FY¯G\ê®Aµ1TI\ËOOCó|‡¸iH5¡¦A~ ?ZvÇ‘RkBMƒh-İ¼\Ã}:\É?¦¡WŠ\\*\ŞJt+\Å\ÖvB\Íb±ƒÄœCO\Ê\Ø*\ÇG\Ó<\ß!\ĞK\í \"½\rW\ÅT<8+¸\Ğ+2­-ı\×\Ê{{§¬I\í5¡ö\"†­B°T\\Ôt\ï}\çz\Z„V\é)Mƒ\Ä@Y\ÇWúóGƒjv”G:E¯A\ÈU\Üaia\èÕ…\Ş\ßé•‡\æI\×\ë\ìW\ë\ÙA’\ÜB‹\æ+^\0\Ê:¾’W,\Â\ìe-š‰—€²¯tqƒt‹‹^]\è5‘\îaµ˜U®¥—¾bQQÁj>iIÖ«€\Z¥[\Ñö\é0\Êõ\n_¥\îv$µh$§\Ñ “<W5JWƒŒ\Åş¾J\İ\í ±ºm\Ö I \í 1«œ$£¬5ÈˆP\ì\ï«\Ô=µƒ\ì!Xe\Ã_9Vˆ¹û]/&\Óÿ¦õ«øbH÷Nr\Ñ O´	Ä‘\èV2\ä(×­¿kIrô\Ó#L»R\ç)3B§AF„òş\Í\Úb™R\'=\à*:r\ç\á§A4ˆ\Ù! A4ˆ\Ñ ?	d\ßSG\n[i½Q®>ÒŸ´ò¼$\ÒG:-}¤SQ®´¿•˜½C.A©o¹íŠµ`ú\à¬\ØC÷œ+\í½;\rò 6;\Èk\ëu‹²\â@\r¢A†\Ú\Ñ CD?x\Åz\â\å$& #£»\Íj±ƒõ\Ú-J¯XÃ’\Ô\r Å¦qu;\é›y¥½w\ç²t!\É}fûø\ØT³Oÿ¬Tqm£{§¹P1¯G\ê\Şö©((“€:CEI¯\'{q4—•„\Şyhj#ÊŸŒ¥¢\Ô ¯	h„\Çö¤v[†i\\¡k\r24.½^R³z\Å\Z–\äØƒ³¢ t\ÎÉ­¦\r£¢ôŠ•\ÛyHA}ƒjÁ\r’+ô\Ë^±h\ê\íğp\Úy¨\Ğ+Ö£¬i\Üa\èÁ	*ò$uH\í ›\nr\ZN@ù=£b=Êš\ÆMMT‘\'©ƒ	\Õ€up¨9ğH89I\ì Gˆ\Çc5HœYZ„‰?š\Ó\àON¤A&AU\Ó \ZdVW¾AfIøG‡†¤\',`JZ‘\'©C›Aö¨\Ñ\ï\Úq{y®R´‘\éÇ„wß»y¨p·˜©(I\Ñ4\È6zhn\Íh©\íD\ÓRû1”š\Õò›€	¨°»+R\Ó 	\ØA¤@a\ĞVƒ\ä~ı\ê¾^’õ\ì cZƒh¡\\\è©\íW¬\×È©6*í¾AN|ƒT‹š\na$Lò÷«ˆ™\ìmC;rÅ¡rúW,\r’{=¡&¯0\ä\È[\× 	j\nŸ\n¡ótú\Ú\ÍSƒPe\Ä\â\Ú\év;\È3;ˆdx\\\ÙA\âGg—·ƒ<Õ§¾W¬\Ï\Í¤û\Æ\á#}x–ÿ3@ƒL‚Jö–W¬.KOAO.zU¢†¤\ë\Ñ\Ç=-\ZÍ“r¡y¦u\ìV›Oƒ\äVDƒ\äò<}6\r’[\r’\Ëóô\Ù4Hn	4H.\Ï\Óg\Ó ¹%\Ğ ¹<OŸMƒ\ä–@ƒ\äò<}6\r’[‚\Û„n8û±\ÙVúşNy\ÒÏ @O\Ê%û3v\ê/\é\Çd\Û]QPš=‚‰\'\Ì4\Ègz\Â\Æ\ËõO„yMr±ƒP%>\Ä\ÙA^C¬\àB\r’ t:E…h.T\äº0\êX\\4UÆ‰qB \Û\Ñ ^±¨v\Ê\â4ˆW¬Yq¥>\ÒiÛŸM62¶ö½5\èœ]¢\"—Šú­´÷ˆ~ş«A\Ô*DI¿ºT\ä¢A~WCƒhÿh\ròM€\n¡\âÔ¶ƒô½‡g\áC\í j\Z$\0\ë\ïP\ß \Ì\è\É\Ç> bö‘>f¡A4\ÈğÚ¶’H*z¨t_/#\ÆnÿŠEE\Ò\r‘\æY\Ñ=©˜\éˆ€Ä¬ô{\Ô\Ö>\Ú\Ş E«\0Ló\Ô q«T\Ô/\Å~„y\â£A²%¶=Ÿy`C…\ç+÷3hŸü\Ç+i\r2V\É\Î\ß ñ\Ã\áğÁ^±¼bekjz>;ˆdZ,¯\ÚA\ì ‡TqU¼•º\ßQ‡ n¿ƒYÉ—F¯XIW,*\Ê\n“\Ó\\ö\â4\È$Õ•@Uˆ\ËòZ+\Õ}Rª¿†\ÙA&\ß<\ÔX´0^±*\È\Å\ç\Ô \Z$®š\É;\ÈA\ÑN@\ã&…†\Ñ\\\ÈiJ,ğ6£{8’‰%\Ì|¤„@Š2Š¡\â\"\Å\å\â#ı7\r0\ÈJ¢¤\ïš#&É¥D:\r¢A²u?=Ÿ™|4O}\ZXq’\Ğ\Ç(\İ½\Ö\ØA^È®Ÿ\ÄR\á\í©9\í v)¡l\rªĞ¡„’ƒ+ögy(’W¬×Š\íş˜@}£A\ì T;\ßq:”Prp\Åş.\ÛA’\Ù§£ h}lWœöTxô\áß½^\'\ë¶GúP\Ñ\É¨\Ği\\g\ÑF¨ºÛ½^\'k\r\Òğ«\ÂtT$#smı¾÷*Ö£{\'\İZƒh)\rk)LûG\â\Ğ\Ée\Ã\Ã\è©M\ã:OµŒ\î+O÷z¬\í v‘ß¾ÿn™\Âd™\ÄôcXEW¢§(\É_ƒ¨U´\ÓÀò)C+NÃŠ9\éf»¯ºW\Ñ\á’zÅ¢í«sÅœ”]\ë+Nƒ<Ğ»\nŒ½‚Wˆ¹bN*Z\ròš\áb	<Ò»M§A(\rrˆ\\\Åi_1\'\İ$9)\éZ^±’N\Ø#È­sÅœt\ß\Z\ÄBµóW!\æŠ9\é&5È‰¡E3NW$~¤_q“\æ,J@ƒPr\Æİ‚€¹E™\İ$% A(9\ãnA@ƒÜ¢\Ìn’\Ğ ”œq·  AnQf7I	hJÎ¸[\Ğ ·(³›¤4%g\Ü-h[”\ÙMR\Z„’3\îşI¿§™\àx\0\0\0\0\0IEND®B`‚');
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
