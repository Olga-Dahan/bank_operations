-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2024 at 12:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam4`
--
CREATE DATABASE IF NOT EXISTS `exam4` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `exam4`;

-- --------------------------------------------------------

--
-- Table structure for table `account_operations`
--

CREATE TABLE `account_operations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account_operations`
--

INSERT INTO `account_operations` (`id`, `name`) VALUES
(1, 'deposit'),
(2, 'loan'),
(3, 'withdrawal');

-- --------------------------------------------------------

--
-- Table structure for table `bank_accounts`
--

CREATE TABLE `bank_accounts` (
  `objectId` int(11) NOT NULL,
  `accountNumber` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `date_of_operation` datetime DEFAULT NULL,
  `sum` decimal(9,2) DEFAULT NULL,
  `interest` decimal(6,2) DEFAULT NULL,
  `payments` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank_accounts`
--

INSERT INTO `bank_accounts` (`objectId`, `accountNumber`, `type`, `date_of_operation`, `sum`, `interest`, `payments`) VALUES
(2, '56745', 1, '2024-05-20 17:13:26', 400.00, NULL, NULL),
(3, '56723', 3, '2024-05-20 17:13:52', 25.00, NULL, NULL),
(4, '42389', 2, '2024-05-20 17:14:12', 1000.00, 9.20, 23),
(11, '75896', 2, '2024-05-22 19:32:39', 40.00, 9.00, 20),
(12, '75896', 1, '2024-05-22 09:32:39', 750.00, NULL, NULL),
(13, '12345', 1, '2024-05-20 21:14:07', 34.00, NULL, NULL),
(14, '12345', 2, '2024-05-20 21:14:42', 300.00, 2.30, 4),
(18, '12345', 2, '2024-05-31 00:00:15', 300.00, 23.00, 5),
(20, '12345', 3, '2024-05-31 00:16:55', 57.00, NULL, NULL),
(21, '75896', 1, '2024-05-31 00:42:26', 400.00, NULL, NULL),
(22, '45689', 2, '2024-05-31 01:08:30', 9999.99, 5.50, 60),
(23, '12345', 1, '2024-05-31 01:09:40', 9999.99, NULL, NULL),
(24, '75896', 3, '2024-05-31 01:13:19', 500000.00, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_operations`
--
ALTER TABLE `account_operations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  ADD PRIMARY KEY (`objectId`),
  ADD KEY `type` (`type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_operations`
--
ALTER TABLE `account_operations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  MODIFY `objectId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  ADD CONSTRAINT `bank_accounts_ibfk_1` FOREIGN KEY (`type`) REFERENCES `account_operations` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
