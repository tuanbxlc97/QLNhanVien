-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 13, 2019 lúc 10:38 AM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `baitapreact`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `hoten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `masv` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lop` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `anh` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `hoten`, `masv`, `lop`, `anh`) VALUES
(1, 'Vu Hai Duong', 'DTC155D4802010764', 'CNTT K14', 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDny_qCkwEQARgBMghrMocD8QZThw'),
(2, 'Nguyen Van An', 'DTC155D4802010123', 'CNTT K14', 'https://cdn.24h.com.vn/upload/4-2019/images/2019-10-09/thumbnail/ava-1570603205-661-width640height480.jpg'),
(3, 'Nguyen Van Hoan', 'DTC04', 'CNTT K14', 'https://znews-photo.zadn.vn/w480/Uploaded/mdf_kxrxdf/2019_10_09/shuyingli______thumb_thumb.jpg'),
(4, 'Phung Van Hanh', 'DTC04', 'CNTT K14', 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDny_q4mQEQARgBMgiQpSmLVHRQFw'),
(5, 'Nguyen Thi Lan', 'DTC05', 'CNTT K14', 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDny_rk3wEQARgBMgi-5zqOsOn85g'),
(6, 'Phan Thi Thuy', 'DTC06', 'CNTT K14', 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDny_qeHBABGAEyCPHQ2EV5UxIK'),
(10, 'Nguyen Thi Lan Huong', 'DTC07', 'CNTT K14', 'https://photo-atm-baomoi.zadn.vn/w200_r1x1/adtima-media.zadn.vn/2019/10/a3643bb4-6a38-4296-abe8-f8eb5196644c.png'),
(11, 'Duong Ngo Hung', 'DTC155', 'CNTT-K14G', 'https://znews-photo.zadn.vn/w480/Uploaded/mdf_kxrxdf/2019_10_09/shuyingli______thumb_thumb.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
