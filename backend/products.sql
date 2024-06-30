-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: products
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Nature'),(2,'Family'),(3,'Hobbies');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `category_id` int DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (33,'Travel','A picture is a powerful snapshot of a moment in time, capturing emotions, beauty, and memories that words alone cannot fully convey.',60.00,1,'/images/travel.jpg'),(34,'Baby','Memories are the cherished echoes of our past, shaping who we are and connecting us to significant moments in our lives.',89.99,2,'/images/family.jpg'),(35,'Boy','Memories are the cherished echoes of our past, shaping who we are and connecting us to significant moments in our lives.',89.99,2,'/images/b6.jpg'),(36,'Girls','Memories are the cherished echoes of our past, shaping who we are and connecting us to significant moments in our lives.',79.99,2,'/images/b5.jpg'),(37,'Dog','Memories are the cherished echoes of our past, shaping who we are and connecting us to significant moments in our lives.',104.99,2,'/images/f6.jpg'),(38,'Girl','Women embody strength, resilience, compassion, and leadership, shaping societies worldwide.',79.99,3,'/images/b1.jpg'),(39,'Process','A hobby is a delightful pursuit that brings joy and fulfillment.',89.99,3,'/images/b2.jpg'),(40,'Hobby','A hobby is a delightful pursuit that brings joy and fulfillment.',79.99,3,'/images/b3.jpg'),(41,'Women','Women embody strength, resilience, compassion, and leadership, shaping societies worldwide.',60.99,3,'/images/business.jpg'),(42,'Happy women','Women embody strength, resilience, compassion, and leadership, shaping societies worldwide.',104.99,3,'/images/b4.jpg'),(43,'Waterfall','A forest photo encapsulates the serene allure and verdant expanse of nature, inviting contemplation of its tranquil and captivating essence.',99.99,1,'/images/t4.jpg'),(44,'Cliff','A forest photo encapsulates the serene allure and verdant expanse of nature, inviting contemplation of its tranquil and captivating essence.',69.99,1,'/images/t1.jpg'),(45,'Lake','A forest photo encapsulates the serene allure and verdant expanse of nature, inviting contemplation of its tranquil and captivating essence.',80.99,1,'/images/t2.jpg'),(46,'Nature','A forest photo encapsulates the serene allure and verdant expanse of nature, inviting contemplation of its tranquil and captivating essence.',84.99,1,'/images/t3.jpg'),(47,'Big cliff','A forest photo encapsulates the serene allure and verdant expanse of nature, inviting contemplation of its tranquil and captivating essence.',69.99,1,'/images/t5.jpg'),(48,'Forest','A forest photo encapsulates the serene allure and verdant expanse of nature, inviting contemplation of its tranquil and captivating essence.',80.99,1,'/images/t6.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-30 14:50:26
