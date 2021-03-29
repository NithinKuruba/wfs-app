ALTER USER `wfs` IDENTIFIED WITH mysql_native_password BY 'wfs';

CREATE TABLE `auditlog` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `url` TEXT NOT NULL
);
