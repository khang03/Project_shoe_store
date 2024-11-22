-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2023 at 04:35 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlshoes`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `name_product` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `img` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `type`) VALUES
(6, 'Basas', 2),
(7, 'Vintas', 2),
(8, 'Urbas', 2),
(9, 'Pattas', 2),
(10, 'Track 6', 2),
(11, 'Phụ kiện & Thời trang', 2),
(12, 'Sale-off', 0),
(13, '123Tuan', 2),
(14, 'TT', 2),
(15, 'AA', 2),
(16, 'DÒNG SẢN PHẨM', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category_product`
--

CREATE TABLE `category_product` (
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `category_product`
--

INSERT INTO `category_product` (`category_id`, `product_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 14),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 9),
(2, 10),
(2, 13),
(2, 14),
(6, 9),
(7, 1),
(7, 2),
(7, 3),
(8, 11),
(8, 13),
(9, 7),
(10, 6),
(10, 14),
(11, 4),
(11, 5),
(11, 10),
(11, 31),
(12, 10),
(12, 13);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `code_bill` varchar(20) NOT NULL,
  `total` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT 0 COMMENT '0:chưa xác nhận,1:đã xác nhận',
  `id_user` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `code_bill`, `total`, `name`, `tel`, `email`, `address`, `status`, `id_user`) VALUES
(22, 'TKSHOES8313', 1335, 'Không tên', '123456789', 'khong@gmail.com', 'tổ 13, ấp 1, xã đông thạnh , huyện hóc môn', 1, 0),
(23, 'TKSHOES40565', 745, 'Nguyễn Duy Tuấn', '0965801255', 'tuanly.0234@gmail.com', 'tổ 13, ấp 1, xã đông thạnh , huyện hóc môn', 1, 19),
(24, 'TKSHOES5172', 2140, 'Lê Xuân Mike', '0965801255', 'tuanly.0234@gmail.com', 'tổ 13, ấp 1, xã đông thạnh , huyện hóc môn', 0, 0),
(25, 'TKSHOES88827', 95, 'Nguyễn Duy Tuấn', '0965801255', '21211tt2803@mail.tdc.edu.vn', 'tổ 13, ấp 1, xã đông thạnh , huyện hóc môn', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `id_order`, `id_product`, `quantity`, `price`) VALUES
(18, 22, 5, 1, 95),
(19, 22, 1, 2, 620),
(20, 23, 5, 1, 95),
(21, 23, 13, 1, 650),
(22, 24, 13, 1, 650),
(23, 24, 14, 1, 1490),
(24, 25, 5, 1, 95);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `image`) VALUES
(1, 'VINTAS VIVU - LOW TOP - WARM SAND', 620, 'Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.\r\nThời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.\r\nSản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.\r\nSản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.\r\nAnanas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:\r\n- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).\r\n- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.\r\nTrong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.\r\nKhông hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.', 'vintas vivu.jpeg'),
(2, 'VINTAS VIVU - LOW TOP - PLANTATION', 620, 'Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.\r\nThời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.\r\nSản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.\r\nSản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.\r\nAnanas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:\r\n- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).\r\n- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.\r\nTrong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.\r\nKhông hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.', 'PLANTATION.jpeg'),
(3, 'VINTAS NAUDA EXT - HIGH TOP - MONK\'S ROBE\r\n', 720, 'Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.\r\nThời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.\r\nSản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.\r\nSản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.\r\nAnanas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:\r\n- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).\r\n- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.\r\nTrong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.\r\nKhông hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm. ', 'MONK\'S ROBE.jpeg'),
(4, 'ANANAS \"COPY\" STORE BAG 002 - CAVIAR BLACK', 280, 'Hướng đến sự linh hoạt, phù hợp với nhiều hoàn cảnh sử dụng hay thời tiết khác nhau: dù nắng hay mưa do túi sử dụng chất liệu Ripstop có trọng lượng vừa phải và tính năng trượt nước trên bề mặt. Khoá kéo phao cũng hỗ trợ thêm cho tính năng này bên cạnh việc thuận tiện hơn trong việc cất giữ đồ đạc.', 'túi.jpg'),
(5, 'HIGH CREW SOCKS - ANANAS DAILY THINGS - BLACK BEAUTY', 95, 'Giới tính – /Unisex/\r\nHọa tiết – /Ananas Daily Things/\r\nThành phần – /53% Cotton, 40% Polyester, 3% Spandex, 2% Nylon, 2% Elastan/\r\n\r\n\r\nChúng tôi không áp dụng chính sách đổi hàng đối với các sản phẩm thuộc nhóm phụ kiện. Mong bạn thông cảm.', 'vớ.jpg'),
(6, 'TRACK 6 JAZICO - LOW TOP - ROYAL WHITE\r\n', 1190, 'Gender: Unisex\r\nSize run: 35 – 46\r\nUpper: Leather/Suede\r\nOutsole: Rubber <br>\r\nChỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.\r\nThời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.\r\nSản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.\r\nSản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.\r\nAnanas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:\r\n- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).\r\n- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.\r\nTrong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.\r\nKhông hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.\r\n', 'Track 6 (1).jpeg'),
(7, 'PATTAS TOMO - HIGH TOP - OFFWHITE', 750, 'Gender: Unisex\r\nSize run: 35 – 46\r\nUpper: Canvas NE\r\nOutsole: Rubber <br>\r\n\r\nChỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.\r\nThời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.\r\nSản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.\r\nSản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.\r\nAnanas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:\r\n- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).\r\n- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.\r\nTrong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.\r\nKhông hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.', 'OFFWHITE.jpeg'),
(9, 'BASAS WORKADAY - LOW TOP - REAL TEAL', 580, 'Gender: Unisex\r\nSize run: 35 – 46\r\nUpper: Canvas NE\r\nOutsole: Rubber\r\nMỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn\r\n<div><img style=\"height: 100px;width:auto;\" src=\"public/images/basas1.jpg\" alt=\"\"></div>', 'basas1.jpg'),
(10, 'GRAPHIC TEE - LOGOS PACKED - SNOW WHITE', 350, 'Giới tính: Unisex\r\nForm dáng: Regular\r\nChất liệu: Single Jersey, định lượng 220GSM\r\nThành phần chất liệu: 100% Cotton\r\nSize: S – M – L – XL\r\nHoạ tiết: Logos Packed\r\nSử dụng phương pháp in lụa.\r\nĐối với các sản phẩm thuộc nhóm Nửa trên và Nửa dưới, chính sách bảo hành sẽ không được áp dụng. Tuy nhiên bạn có thể áp dụng chính sách đổi hàng cho các sản phẩm này theo quy định về thời gian và phương thức được ghi rõ như trên.', 'Áo thun.jpg'),
(11, 'URBAS IRRELEVANT NE - LOW TOP - STORM/A.GOLD', 650, 'Từ tinh thần sáng tạo ngẫu hứng, Urbas Irrelevant lắp ghép các mảng sắc tách biệt để tạo nên diện mạo tổng thể tương phản cá tính. Thiết kế có chút thay đổi trong chi tiết và sử dụng chất vải canvas NE để tạo nên bản nâng cấp so với phiên bản cũ, đem lại cảm giác lên chân tự tin trong mọi trải nghiệm “bay nhảy” thường ngày.\r\n', 'urbas1.jpg'),
(13, 'URBAS CORLURAY MIX - HIGH TOP - CORLURAY MIX', 650, 'Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:\r\n\r\nĐịa chỉ: 5C Tân Cảng, P.25, Q.Bình Thạnh , TP. Hồ Chí Minh.\r\nHotline: 028 2211 0067', 'urbas2.jpeg'),
(14, 'TRACK 6 I.S.E.E - PURE WHITE/ICY BLUE', 1490, 'Gender: Unisex\r\nSize run: 35 – 46\r\nUpper: Leather/Suede\r\nOutsole: ICY Rubber\r\n\r\nCó kèm theo 01 chiếc túi bạc bí ẩn (?) trong mỗi hộp giày.\r\nMỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:\r\n\r\nĐịa chỉ: 5C Tân Cảng, P.25, Q.Bình Thạnh , TP. Hồ Chí Minh.\r\nHotline: 028 2211 0067', 'Track 6 (2).jpg'),
(31, 'Tuấn', 12, '23', '1703661708.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0:Admin, 1:User'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `role`) VALUES
(19, 'khang12', 'nguyenthekhang@gmail.com', 'user1', '$2y$10$1OcKAsOywH/OmuY5VAjx0edMAXZY1ZMhA7RUl/OdQn9rfu.vT19Z2', 1),
(17, 'ADMIN', 'nguyenthekhang@gmail.com', 'admin1', '$2y$10$Kfe43ld54BH8JXcC7jd4HeFstKg1Ml6sXSMrdsRdmsKU6NO6Utrd2', 0),
(18, 'ADMIN', 'nguyenduytuan@gmail.com', 'admin2', '$2y$10$F3ySSC76s.gtxIQlHVkRm.ldR0RJpfjEPZWPzqGr3egqnavUhBy7O', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`user_id`, `product_id`) VALUES
(3, 4),
(3, 5),
(3, 14),
(4, 2),
(4, 3),
(4, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`,`type`);

--
-- Indexes for table `category_product`
--
ALTER TABLE `category_product`
  ADD PRIMARY KEY (`category_id`,`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`user_id`,`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
