
DROP DATABASE IF EXISTS weight_a_minute;
CREATE DATABASE weight_a_minute;
USE weight_a_minute;


CREATE TABLE `images` ( 
 `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
 `image_name` varchar(255) DEFAULT NULL
)