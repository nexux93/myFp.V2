-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 25 2019 г., 12:51
-- Версия сервера: 5.7.20
-- Версия PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `image_base`
--

-- --------------------------------------------------------

--
-- Структура таблицы `image_info`
--

CREATE TABLE `image_info` (
  `name` varchar(255) NOT NULL,
  `dir` varchar(255) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `image_info`
--

INSERT INTO `image_info` (`name`, `dir`, `size`) VALUES
('2XEacQn.jpg', 'img/', 172009),
('4qlhGAP.jpg', 'img/', 124602),
('639624.jpg', 'img/', 150190),
('673403.jpg', 'img/', 2090695),
('70887.jpg', 'img/', 794784),
('BWZMVcu.jpg', 'img/', 260130),
('CsJElar.jpg', 'img/', 253869),
('qHdLy8E.jpg', 'img/', 170098),
('thumb-1920-51789.jpg', 'img/', 226857);

-- --------------------------------------------------------

--
-- Структура таблицы `image_list`
--

CREATE TABLE `image_list` (
  `idIm` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `view` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `image_list`
--

INSERT INTO `image_list` (`idIm`, `name`, `view`) VALUES
(1, '2XEacQn.jpg', 0),
(2, '4qlhGAP.jpg', 0),
(3, '639624.jpg', 0),
(4, '673403.jpg', 0),
(5, '70887.jpg', 0),
(6, 'BWZMVcu.jpg', 0),
(7, 'CsJElar.jpg', 0),
(8, 'qHdLy8E.jpg', 0),
(9, 'thumb-1920-51789.jpg', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `image_list`
--
ALTER TABLE `image_list`
  ADD PRIMARY KEY (`idIm`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `image_list`
--
ALTER TABLE `image_list`
  MODIFY `idIm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
