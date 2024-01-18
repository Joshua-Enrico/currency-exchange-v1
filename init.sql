CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `exchange_rates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `currency` varchar(255) NOT NULL,
  `currencyId` varchar(255) NOT NULL,
  `exchangeRates` json NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO exchange_rates (currency, exchangeRates, currencyId)
VALUES
    ('sol', '{"dolar": 4.0, "euro": 3.5, "libra": 3.8, "yen": 0.035, "bitcoin": 0.00025}', 'currency_sol'),
    ('dolar', '{"sol": 0.25, "euro": 0.88, "libra": 0.78, "yen": 110.0, "bitcoin": 0.000007}', 'currency_dolar'),
    ('euro', '{"sol": 0.29, "dolar": 1.14, "libra": 0.89, "yen": 128.5, "bitcoin": 0.000009}', 'currency_euro'),
    ('libra', '{"sol": 0.26, "dolar": 1.29, "euro": 1.12, "yen": 144.0, "bitcoin": 0.000011}', 'currency_libra'),
    ('yen', '{"sol": 28.5, "dolar": 0.0091, "euro": 0.0078, "libra": 0.0069, "bitcoin": 0.000075}', 'currency_yen');
