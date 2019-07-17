-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 18 2019 г., 21:18
-- Версия сервера: 5.7.23
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `prev` text NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `prev`, `text`) VALUES
(1, 'Зеленский объяснил, почему не помог Меркель, когда ей стало плохо', ' Президент Украины Владимир Зеленский объяснил, почему ничего не сделал, когда канцлеру Германии Ангеле Меркель стало плохо на красной дорожке. Его слова приводит Bild.\r\n\"Я стоял рядом с ней, и поверьте мне, она была в безопасности\", — заявил Зеленский на пресс-конференции.\r\nРанее канцлеру стало плохо во время церемонии приветствия в Берлине. Внезапно Меркель начало колотить, и она несколько раз поменяла положение рук, пытаясь унять дрожь. При этом Зеленский никак не помог коллеге.'),
(2, 'Кудрин объяснил слова о \"социальном взрыве\" в России из-за бедности', 'Глава Счетной палаты Алексей Кудрин выразил надежду, что \"социального взрыва\" в России не будет.\r\nРанее телеведущий Владимир Познер задал вопрос политику, есть ли риски протестов россиян из-за возможного ухудшения их финансового положения. Кудрин ответил, что испытывает беспокойство по этому поводу.');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
