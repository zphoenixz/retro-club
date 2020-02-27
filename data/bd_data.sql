INSERT INTO TITLE (Movie_id_m, name)
VALUES (1, 'El irlandes'), 
(1, 'The Irishman'), 
(2, 'Jojo Rabbit'), 
(3, 'Joker'), 
(3, 'Guasón'), 
(4, 'Little Women'), 
(4, 'Mujercitas'),
(5, 'Historia de un Matrimonio'), 
(5, 'A Marriage Story'), 
(6, '1917'), 
(7, 'Érase una vez... en Hollywood'), 
(7, 'Once Upon a Time in Hollywood'),
(8, 'Frozen 2'), 
(8, 'Frozen: Una Aventura Congelada'), 
(9, 'Glass'), 
(9, 'Cristal'), 
(10, 'La Favorita'), 
(10, 'The favourite'),
(11, 'Green Book'), 
(12, 'Como Entrenar a tu Dragón 3'), 
(12, 'How to Train your Dragon 3'), 
(13, 'Van Gogh a las puertas de la eternidad'),
(13, 'At Eternitys Gate'), 
(14, 'Capitana Marvel'), 
(14, 'Captain Marvel'), 
(15, 'The Mule'), 
(15, 'La Mula'),
(16, 'Beautiful Boy. Siempre Serás mi Hijo'), 
(16, 'Beautiful Boy'), 
(17, 'Dumbo'), 
(18, 'Vengadores: End Game'), 
(18, 'Avengers: End Game'),
(19, 'Aladdin'), 
(19, 'Aladdín'), 
(20, 'Rocketman'), 
(21, 'X-Men: Fénix Oscura'), 
(21, 'X-Men: Dark Phoenix'), 
(22, 'Toy Story 4'),
(23, 'Sonic'), 
(24, 'Vengadores: Infinity War'), 
(24, 'Avengers: Infinity War'), 
(25, 'Hereditary'), 
(25, 'El Legado del Diablo'),
(26, 'Tres Anuncios en las Afueras'), 
(26, 'Three Billboards Outside Ebbing, Missouri'), 
(27, 'Un Lugar Tranquilo'), 
(27, 'A Quiet Place'),
(28, 'Game Night'), 
(29, 'Jurassic World 2: El Reino Caído'), 
(29, 'Jurassic World 2: Fallen Kingdom'), 
(30, 'Call me by Your Name'),
(30, 'Llámame por tu nombre');

INSERT INTO GENRE (genre_name) 
VALUES ('Acción'), 
('Aventura'), 
('Comedia'), 
('Dramática'), 
('Terror'), 
('Musicales'), 
('Acción'), 
('Guerra'), 
('Películas del oeste'), 
('Crimen'), 
('Infantiles'), 
('Adultos');

INSERT INTO STARS (first_name, last_name)
VALUES ('Joaquin', 'Phoenix'), 
('Adam', 'Driver'), 
('Jonathan', 'Price'), 
('Antonio', 'Banderas'), 
('Leonardo', 'DiCaprio'), 
('Cynthia', 'Erivo'), 
('Scarlett', 'Johansson'), 
('Saoirse', 'Ronan'), 
('Reneé', 'Zellweger'), 
('Charlize', 'Theron'),  
('Brad', 'Pitt'),
('Al', 'Pacino'), 
('Joe', 'Pesci'), 
('Tom', 'Hanks'), 
('Anthony', 'Hopkins'), 
('Laura', 'Dern'), 
('Margot', 'Robbie'), 
('Florence', 'Pugh'), 
('Kathy', 'Batess'), 
('Tom', 'Cruise'), 
('Johnny', 'Depp'), 
('Angelina', 'Jolie'), 
('Will', 'Smith'), 
('Harrison', 'Ford'), 
('Clint', 'Eastwood'), 
('Nicolas', 'Cage'),  
('Meryl', 'Streep'), 
('Ryan', 'Reynolds'), 
('Keanu', 'Reeves'), 
('Nicole', 'Kidman'),  
('Mel', 'Gibson'), 
('Julia', 'Roberts'), 
('Natalie', 'Portman'), 
('Bruce', 'Willis'), 
('Natalie', 'Portman'), 
('Drew', 'Barrymore'), 
('Robert', 'Redford'), 
('Eddie', 'Murphy'), 
('Michael', 'Douglas'), 
('Ryan', 'Gosling'), 
('Jennifer', 'Lawrence'),  
('Jim', 'Carrey'), 
('Lindsay', 'Lohan'), 
('Vin', 'Diesel'), 
('Jackie', 'Chan'), 
('Morgan', 'Freeman'), 
('Jennifer', 'Aniston');

INSERT INTO NOMINATION (category)
VALUES ('Mejor película'), 
('Mejor director'), 
('Mejor actor principal'), 
('Mejor actriz principal'), 
('Mejor actor de reparto'), 
('Mejor actriz de reparto'), 
('Mejor guión original'), 
('Mejor guión adaptado'), 
('Mejor película de habla extranjera'), 
('Mejor película animada'), 
('Mejor fotografía'), 
('Mejor diseño de producción'), 
('Mejor vestuario'), 
('Mejor montaje'), 
('Mejor efectos especiales'),
('Mejor maquillaje y peluquería'), 
('Mejor montaje de sonido'), 
('Mejor mezcla de sonido'), 
('Mejor banda sonora'), 
('Mejor canción original'),
('Mejor documental'), 
('Mejor cortometraje documental'), 
('Mejor cortometraje de ficción'), 
('Mejor cortometraje animado');

INSERT INTO MOVIE (duration, premier_year, unit_price, stock, movie_status)
VALUES (209, 2019, 100, 10, true), 
(183, 2019, 100, 10, true), 
(192, 2019, 90, 10, true), 
(128, 2019, 80, 10, true), 
(183, 2019, 90, 10, true),
(189, 2019, 110, 10, true), 
(125, 2019, 110, 10, true), 
(182, 2019, 100, 10, true), 
(100, 2019, 80, 10, true),
(101, 2019, 70, 10, true),
(98, 2019, 90, 10, true),
(189, 2019, 100, 10, true),
(134, 2019, 100, 10, true),
(135, 2019, 110, 10, true),
(189, 2019, 90, 10, true),
(152, 2019, 110, 10, true),
(189, 2018, 100, 10, true),
(150, 2018, 100, 10, true),
(180, 2018, 80, 10, true),
(189, 2018, 70, 10, true),
(167, 2018, 70, 10, true),
(182, 2018, 80, 10, true),
(129, 2018, 80, 10, true),
(192, 2018, 90, 10, true),
(123, 2018, 110, 10, true),
(167, 2018, 100, 10, true),
(173, 2018, 100, 10, true),
(182, 2018, 80, 10, true),
(192, 2018, 100, 10, true),
(134, 2018, 80, 10, true);

INSERT INTO Movie_Genre(Movie_id_m, Genre_id_g)
VALUES (1, 2),
(1, 3),
(2, 1),
(2, 4),
(3, 2),
(3, 5),
(4, 4),
(4, 5),
(5, 7),
(5, 8),
(6, 9),
(6, 11),
(7, 12),
(7, 2),
(8, 4),
(8, 5),
(9, 10),
(9, 11),
(10, 6),
(10, 5),
(11, 4),
(11, 7),
(12, 8),
(12, 9),
(13, 3),
(13, 4),
(14, 12),
(14, 11),
(15, 10),
(15, 12),
(16, 4),
(16, 5),
(17, 6),
(17, 7),
(18, 9),
(18, 3),
(19, 2),
(19, 10),
(20, 11),
(20, 2),
(21, 3),
(21, 1),
(22, 10),
(22, 12),
(23, 2),
(23, 3),
(24, 4),
(24, 8),
(25, 9),
(25, 4),
(26, 5),
(26, 6),
(27, 7),
(27, 8),
(28, 9),
(28, 10),
(29, 2),
(29, 3),
(30, 8),
(30, 5);

INSERT INTO Movie_Staring(Movie_id_m, Stars_id_s)
VALUES (1, 2),
(1, 4),
(2, 3),
(2, 7),
(3, 12),
(3, 4),
(4, 13),
(4, 19),
(5, 22),
(5, 13),
(6, 14),
(6, 1),
(7, 6),
(7, 7),
(8, 8),
(8, 9),
(9, 10),
(9, 20),
(10, 14),
(10, 19),
(11, 18),
(11, 16),
(12, 15),
(12, 13),
(13, 2),
(13, 1),
(14, 3),
(14, 4),
(15, 7),
(15, 8),
(16, 4),
(16, 1),
(17, 14),
(17, 16),
(18, 17),
(18, 6),
(19, 13),
(19, 2),
(20, 8),
(20, 5),
(21, 19),
(21, 21),
(22, 21),
(22, 25),
(23, 23),
(23, 20),
(24, 19),
(24, 17),
(25, 16),
(25, 23),
(26, 4),
(26, 7),
(27, 8),
(27, 9),
(28, 10),
(28, 7),
(29, 10),
(29, 12),
(30, 22),
(30, 21);

INSERT INTO Movie_Prize(Movie_id_m, Nomination_id_pr, year, winner)
VALUES (1, 21, 2020, true),
(4, 1, 2020, true),
(5, 14, 2020, false),
(6, 15, 2020, true),
(8, 19, 2020, true),
(9, 12, 2020, false),
(12, 1, 2020, true),
(13, 2, 2019, true),
(16, 3, 2019, false),
(17, 4, 2019, true),
(19, 6, 2019, false),
(21, 7, 2019, true),
(25, 8, 2019, true),
(27, 9, 2019, false),
(28, 10, 2019, true);

INSERT INTO Price (first_day_prize, addition_per_day)
VALUES (2, 1);

INSERT INTO Discount (discount, superior_limit)
VALUES (0, 3),
(5, 6),
(10, NULL);

INSERT INTO Geolocalization (lat, longitude)
VALUES (-16.522, -68.1098),
(-16.122, -68.1203),
(-16.532, -68.0192),
(-16.092, -68.3902),
(-16.903, -68.2564),
(-16.123, -68.1293),
(-16.234, -68.1204),
(-16.543, -68.2032),
(-16.234, -68.2304),
(-16.192, -68.0453),
(-16.023, -68.2042),
(-16.542, -68.0545),
(-16.513, -68.1203),
(-16.983, -68.5043),
(-16.293, -68.9232),
(-16.032, -68.9234),
(-16.312, -68.2394),
(-16.332, -68.1756),
(-16.124, -68.1456),
(-16.234, -68.4567),
(-16.392, -68.6788),
(-16.932, -68.2432);

INSERT INTO Person (Geolocalization_id_a, first_name, last_name, phone, email, birth_date, address, idnumber, nit)
VALUES (1, 'Mariana', 'Cardozo', '77784124', 'mcardozocosta@hotmail.com', 30/05/98, 'Los Pinos Calle 6 Bloque 70', '5951335 LP', '5951335'),
(2, 'Ramiro', 'Valdez', '78381233', 'ramirov@hotmail.com', 20/06/97, 'Los Pinos Calle 6 Bloque 70', '2132123 LP', '2132123019'),
(3, 'Renán', 'Avila', '73450394', 'renana@gmail.com', 21/10/96, 'Los Pinos Calle 6 Bloque 70', '3819231 LP', '3819231'),
(4, 'Jose', 'Teran', '7234234', 'joset@hotmail.com', 29/12/98, 'Los Pinos Calle 6 Bloque 70', '9032132 LP', '9032132'),
(5, 'Ernesto', 'Costa', '7234123', 'ernestocosta@gmail.com', 15/11/86, 'Los Pinos Calle 6 Bloque 70', '9310933 LP', '9310933'),
(6, 'Vania', 'Vera', '7546234', 'vaniv@gmail.com', 14/06/95, 'Los Pinos Calle 6 Bloque 70', '9201122 LP', '9201122'),
(7, 'Lizbeth', 'Vera', '71312455', 'liz_vera@gmail.com', 19/07/86, 'Los Pinos Calle 6 Bloque 70', '9201932 LP', '9201932019'),
(8, 'Daniel', 'Ramirez', '79239432', 'daniel_85@gmail.com', 18/08/85, 'Los Pinos Calle 6 Bloque 70', '9219303 LP', '9219303'),
(9, 'Adriana', 'Alborta', '71239814', 'adriana_a@gmail.com', 10/12/84, 'Los Pinos Calle 6 Bloque 70', '03912931 LP', '03912931'),
(10, 'Luciana', 'Altamirano', '70129312', 'lu_alta99@gmail.com', 20/11/99, 'Los Pinos Calle 6 Bloque 70', '9389123 SC', '9389123018'),
(11, 'Moira', 'Vega', '7234914', 'moira_vega@hotmail.com', 30/05/97, 'Los Pinos Calle 6 Bloque 70', 'O3219832 SC', 'O3219832'),
(12, 'Jorge', 'Orsini', '7129313', 'jor_o@hotmail.com', 26/07/91, 'Los Pinos Calle 6 Bloque 70', '3981232 SC', '3981232'),
(13, 'Mateo', 'Vilca', '7492432', 'mateo_v@hotmail.com', 06/08/92, 'Los Pinos Calle 6 Bloque 70', '32891238 OR', '32891238019'),
(14, 'Matias', 'Jimenez', '73493414', 'matias_jim@hotmail.com', 09/09/80, 'Los Pinos Calle 6 Bloque 70', '2931993 LP', '2931993'),
(15, 'Mariel', 'Ponce', '68931211', 'm_ponce81@gmail.com', 10/10/81, 'Los Pinos Calle 6 Bloque 70', '31093882 LP', '31093882'),
(16, 'Julian', 'Machicao', '63128313', 'julian_machicao@gmail.com', 12/03/82, 'Los Pinos Calle 6 Bloque 70', '3198382 LP', '3198382'),
(17, 'Lucas', 'Andrade', '77721331', 'lucas_andrade@hotmail.com', 19/03/97, 'Los Pinos Calle 6 Bloque 70', '2138912 LP', '2138912'),
(18, 'Ramiro', 'Peña', '72301233', 'ramiro95@hotmail.com', 10/05/95, 'Los Pinos Calle 6 Bloque 70', '5904392 LP', '5904392'),
(19, 'Douglas', 'Loza', '71239321', 'douglas@hotmail.com', 14/08/96, 'Los Pinos Calle 6 Bloque 70', '51309445 LP', '51309445'),
(20, 'Estefan', 'Costa', '74023123', 'estefan89@gmail.com', 18/09/95, 'Los Pinos Calle 6 Bloque 70', '1239932 LP', '1239932'),
(21, 'Mariano', 'Arancibia', '70231412', 'mariano.a@hotmail.com', 07/01/97, 'Los Pinos Calle 6 Bloque 70', '32198213 LP', '32198213'),
(22, 'Esteban', 'Kaune', '77230124', 'estefano94@hotmail.com', 08/03/94, 'Los Pinos Calle 6 Bloque 70', '52310993 LP', '52310993018');

INSERT INTO Customer (Person_id_p, register_date, customer_status)
VALUES (1, 12/12/19, true),
(2, 24/05/19, true),
(3, 20/04/18, true),
(4, 12/10/18, true),
(5, 13/11/18, true),
(6, 16/10/20, true),
(7, 07/09/19, true),
(8, 09/08/19, true),
(9, 17/07/18, true),
(10, 18/01/20, true),
(11, 20/02/19, true),
(12, 21/12/20, true),
(13, 31/04/18, true),
(14, 30/12/18, true),
(15, 2/10/18, true),
(16, 09/11/19, true),
(17, 14/12/20, true),
(18, 15/11/20, true),
(19, 16/03/19, true),
(10, 18/04/19, true);

INSERT INTO EMPLOYEE (Person_id_p, user, password)
VALUES (21, 'marianoa', 'MarianoK1998'),
(22, 'EstebanK', 'EsteKaune1986');

INSERT INTO Type_of_Edition (description)
VALUES ('crear'),
('actualizar'),
('eliminar'),
('dvd no retornado'),
('dvd retornado roto'),
('dvd retonado tarde');

INSERT INTO Loan (Employee_id_e, Customer_id_c, start_date, end_date, returned)
VALUES (1, 1, 10/12/19, 12/12/19, true),
(2, 3, 05/01/19, 08/01/19, true),
(2, 3, 10/02/19, 12/02/19, true),
(1, 4, 12/03/19, 13/03/19, true),
(2, 7, 13/04/19, 14/04/19, true),
(1, 9, 09/10/19, 10/10/19, true),
(2, 10, 14/12/19, 15/12/19, false),
(1, 11, 08/11/19, 10/11/19, false),
(2, 8, 19/09/19, 21/09/19, false),
(1, 5, 01/03/19, 04/03/19, false),
(2, 6, 02/07/19, 05/07/19, false),
(1, 1, 03/12/19, 04/12/19, false),
(2, 3, 02/11/19, 04/11/19, true),
(1, 6, 05/10/19, 08/10/19, true),
(1, 19, 19/09/19, 21/09/19, true),
(1, 18, 18/11/19, 20/11/19, true),
(1, 16, 16/03/19, 18/03/19, true),
(2, 15, 10/04/19, 12/04/19, true),
(2, 13, 02/05/19, 04/05/19, true),
(2, 19, 17/09/19, 19/09/19, true),
(2, 10, 23/12/19, 25/12/19, true),
(1, 20, 29/11/19, 31/11/19, true),
(1, 12, 30/08/19, 01/08/19, false),
(1, 14, 28/11/19, 29/11/19, false),
(2, 15, 25/01/19, 27/01/19, false),
(1, 16, 23/02/19, 25/02/19, false),
(2, 17, 25/04/20, 27/04/20, true),
(2, 18, 17/08/20, 19/08/20, true),
(1, 6, 09/09/20, 13/09/20, true),
(2, 4, 18/06/20, 21/06/20, true),
(2, 2, 16/05/20, 18/05/20, true),
(1, 1, 15/01/20, 19/01/20, true),
(2, 7, 24/12/20, 26/12/20, true),
(1, 6, 26/10/20, 29/10/20, true),
(2, 7, 27/07/20, 29/07/20, null),
(1, 9, 12/03/20, 14/03/20, null),
(1, 1, 23/01/20, 26/01/20, false),
(2, 4, 25/10/20, 28/10/20, null),
(2, 1, 12/12/20, 14/12/20, null);

INSERT INTO Loan_Movie (Loan_id_l, Movie_id_m)
VALUES (1, 20),
(1, 29),
(2, 19),
(2, 17),
(3, 21),
(3, 4),
(3, 5),
(4, 1),
(4, 2),
(5, 4),
(5, 30),
(6, 24),
(6, 21),
(7, 20),
(7, 19),
(8, 18),
(8, 8),
(9, 6),
(9, 5),
(10, 7),
(10, 9),
(11, 10),
(11, 11),
(11, 12),
(12, 4),
(12, 7),
(12, 8),
(13, 3),
(13, 4),
(13, 1),
(14, 7),
(14, 28),
(15, 25),
(15, 24),
(16, 21),
(17, 23),
(18, 18),
(18, 19),
(19, 27),
(20, 26),
(20, 25),
(21, 15),
(21, 12),
(22, 11),
(23, 13),
(24, 16),
(25, 14),
(26, 29),
(27, 25),
(28, 23),
(29, 2),
(29, 6),
(30, 12),
(31, 11),
(31, 9),
(32, 6),
(32, 17),
(32, 21),
(33, 9),
(33, 10),
(33, 12),
(34, 13),
(35, 6),
(36, 4),
(37, 6),
(37, 7),
(38, 4),
(39, 29),
(40, 30),
(40, 26);

INSERT INTO Sale (Loan_id_i, Discount_id_d, Pri)
VALUES (),
();

INSERT INTO Edition (Employee_id_e, Type_of_Edition_id_te, edition_date)
VALUES (1, 1, 10/01/19),
(2, 1, 10/01/19),
(3, 1, 10/01/19),
(4, 1, 10/01/19),
(5, 1, 10/01/19),
(6, 1, 10/01/19),
(7, 1, 10/01/19),
(8, 1, 10/01/19),
(9, 1, 10/01/19),
(10, 1, 10/01/19),
(11, 1, 10/01/19),
(12, 1, 10/01/19),
(13, 1, 10/01/19),
(14, 1, 10/01/19),
(15, 1, 10/01/19),
(16, 1, 10/01/19),
(17, 1, 10/01/19),
(18, 1, 10/01/19),
(19, 1, 10/01/19),
(20, 1, 10/01/19),
(21, 1, 10/01/19),
(22, 1, 10/01/19),
(23, 1, 10/01/19),
(24, 1, 10/01/19),
(25, 1, 10/01/19),
(26, 1, 10/01/19),
(27, 1, 10/01/19),
(28, 1, 10/01/19),
(29, 1, 10/01/19),
(30, 1, 10/01/19);

INSERT INTO Edition_Movie ()
VALUES (),
();

INSERT INTO Edition_Customer ()
VALUES (),
();

