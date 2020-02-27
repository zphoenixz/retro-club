-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2020-02-25 00:43:07.493

-- tables
-- Table: Customer
CREATE TABLE Customer (
    id_c int NOT NULL AUTO_INCREMENT,
    Person_id_p int NOT NULL,
    register_date date NOT NULL,
    customer_status boolean NOT NULL,
    CONSTRAINT Customer_pk PRIMARY KEY (id_c)
);

-- Table: Discount
CREATE TABLE Discount (
    id_d int NOT NULL AUTO_INCREMENT,
    discount double(3,2) NOT NULL,
    superior_limit int NOT NULL,
    CONSTRAINT Discount_pk PRIMARY KEY (id_d)
);

-- Table: Edition
CREATE TABLE Edition (
    id_et int NOT NULL AUTO_INCREMENT,
    Employee_id_e int NOT NULL,
    Type_of_Edition_id_te int NOT NULL,
    edition_date date NOT NULL,
    CONSTRAINT Edition_pk PRIMARY KEY (id_et)
);

-- Table: Edition_Customer
CREATE TABLE Edition_Customer (
    id_ec int NOT NULL AUTO_INCREMENT,
    Edition_id_et int NOT NULL,
    Customer_id_c int NOT NULL,
    CONSTRAINT Edition_Customer_pk PRIMARY KEY (id_ec)
);

-- Table: Edition_Movie
CREATE TABLE Edition_Movie (
    id_em int NOT NULL AUTO_INCREMENT,
    Edition_id_et int NOT NULL,
    Movie_id_m int NOT NULL,
    CONSTRAINT Edition_Movie_pk PRIMARY KEY (id_em)
);

-- Table: Employee
CREATE TABLE Employee (
    id_e int NOT NULL AUTO_INCREMENT,
    Person_id_p int NOT NULL,
    user varchar(10) NOT NULL,
    password varchar(20) NOT NULL,
    CONSTRAINT Employee_pk PRIMARY KEY (id_e)
);

-- Table: Genre
CREATE TABLE Genre (
    id_g int NOT NULL AUTO_INCREMENT,
    genre_name varchar(30) NOT NULL,
    CONSTRAINT Genre_pk PRIMARY KEY (id_g)
);

-- Table: Loan
CREATE TABLE Loan (
    id_l int NOT NULL AUTO_INCREMENT,
    Employee_id_e int NOT NULL,
    Customer_id_c int NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    CONSTRAINT Loan_pk PRIMARY KEY (id_l)
);

-- Table: Loan_Movie
CREATE TABLE Loan_Movie (
    id_lm int NOT NULL AUTO_INCREMENT,
    Loan_id_l int NOT NULL,
    Movie_id_m int NOT NULL,
    CONSTRAINT Loan_Movie_pk PRIMARY KEY (id_lm)
);

-- Table: Movie
CREATE TABLE Movie (
    id_m int NOT NULL AUTO_INCREMENT,
    duration varchar(30) NOT NULL,
    premier_year int NOT NULL,
    unit_price int NOT NULL,
    stock int NOT NULL,
    movie_status boolean NOT NULL,
    CONSTRAINT Movie_pk PRIMARY KEY (id_m)
);

-- Table: Movie_Genre
CREATE TABLE Movie_Genre (
    id_mg int NOT NULL AUTO_INCREMENT,
    Movie_id_m int NOT NULL,
    Genre_id_g int NOT NULL,
    CONSTRAINT Movie_Genre_pk PRIMARY KEY (id_mg)
);

-- Table: Movie_Prize
CREATE TABLE Movie_Prize (
    id_mp int NOT NULL AUTO_INCREMENT,
    Movie_id_m int NOT NULL,
    Nomination_id_pr int NOT NULL,
    year int NOT NULL,
    winner bool NOT NULL,
    CONSTRAINT Movie_Prize_pk PRIMARY KEY (id_mp)
);

-- Table: Movie_Starring
CREATE TABLE Movie_Starring (
    id_ms int NOT NULL AUTO_INCREMENT,
    Movie_id_m int NOT NULL,
    Stars_id_s int NOT NULL,
    CONSTRAINT Movie_Starring_pk PRIMARY KEY (id_ms)
);

-- Table: Nomination
CREATE TABLE Nomination (
    id_pr int NOT NULL AUTO_INCREMENT,
    category varchar(30) NOT NULL,
    CONSTRAINT Nomination_pk PRIMARY KEY (id_pr)
);

-- Table: Person
CREATE TABLE Person (
    id_p int NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    phone varchar(30) NOT NULL,
    email varchar(30) NOT NULL,
    birth_date date NOT NULL,
    address varchar(30) NOT NULL,
    idnumber varchar(30) NOT NULL,
    nit varchar(30) NOT NULL,
    lat double(10,10) NOT NULL,
    longitude double(10,10) NOT NULL,
    CONSTRAINT Person_pk PRIMARY KEY (id_p)
);

-- Table: Price
CREATE TABLE Price (
    id_p int NOT NULL AUTO_INCREMENT,
    first_day_price int NOT NULL,
    addition_per_day int NOT NULL,
    CONSTRAINT Price_pk PRIMARY KEY (id_p)
);

-- Table: Returned
CREATE TABLE Returned (
    id_r int NOT NULL AUTO_INCREMENT,
    Loan_id_l int NOT NULL,
    Employee_id_e int NOT NULL,
    return_date date NOT NULL,
    CONSTRAINT Returned_pk PRIMARY KEY (id_r)
);

-- Table: Sale
CREATE TABLE Sale (
    id_s int NOT NULL AUTO_INCREMENT,
    Loan_id_l int NOT NULL,
    Discount_id_d int NOT NULL,
    Price_id_p int NOT NULL,
    total double(5,1) NOT NULL,
    CONSTRAINT Sale_pk PRIMARY KEY (id_s)
);

-- Table: Stars
CREATE TABLE Stars (
    id_s int NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    CONSTRAINT Stars_pk PRIMARY KEY (id_s)
);

-- Table: Title
CREATE TABLE Title (
    id_t int NOT NULL AUTO_INCREMENT,
    Movie_id_m int NOT NULL,
    name varchar(30) NOT NULL,
    CONSTRAINT Title_pk PRIMARY KEY (id_t)
);

-- Table: Type_of_Edition
CREATE TABLE Type_of_Edition (
    id_te int NOT NULL AUTO_INCREMENT,
    description varchar(30) NOT NULL,
    CONSTRAINT Type_of_Edition_pk PRIMARY KEY (id_te)
);

-- foreign keys
-- Reference: Customer_People (table: Customer)
ALTER TABLE Customer ADD CONSTRAINT Customer_People FOREIGN KEY Customer_People (Person_id_p)
    REFERENCES Person (id_p);

-- Reference: Edition_Customer_Customer (table: Edition_Customer)
ALTER TABLE Edition_Customer ADD CONSTRAINT Edition_Customer_Customer FOREIGN KEY Edition_Customer_Customer (Customer_id_c)
    REFERENCES Customer (id_c);

-- Reference: Edition_Customer_Edition (table: Edition_Customer)
ALTER TABLE Edition_Customer ADD CONSTRAINT Edition_Customer_Edition FOREIGN KEY Edition_Customer_Edition (Edition_id_et)
    REFERENCES Edition (id_et);

-- Reference: Edition_Employee (table: Edition)
ALTER TABLE Edition ADD CONSTRAINT Edition_Employee FOREIGN KEY Edition_Employee (Employee_id_e)
    REFERENCES Employee (id_e);

-- Reference: Edition_Movie_Edition (table: Edition_Movie)
ALTER TABLE Edition_Movie ADD CONSTRAINT Edition_Movie_Edition FOREIGN KEY Edition_Movie_Edition (Edition_id_et)
    REFERENCES Edition (id_et);

-- Reference: Edition_Movie_Movie (table: Edition_Movie)
ALTER TABLE Edition_Movie ADD CONSTRAINT Edition_Movie_Movie FOREIGN KEY Edition_Movie_Movie (Movie_id_m)
    REFERENCES Movie (id_m);

-- Reference: Edition_Type_of_Edition (table: Edition)
ALTER TABLE Edition ADD CONSTRAINT Edition_Type_of_Edition FOREIGN KEY Edition_Type_of_Edition (Type_of_Edition_id_te)
    REFERENCES Type_of_Edition (id_te);

-- Reference: Employee_People (table: Employee)
ALTER TABLE Employee ADD CONSTRAINT Employee_People FOREIGN KEY Employee_People (Person_id_p)
    REFERENCES Person (id_p);

-- Reference: Loan_Customer (table: Loan)
ALTER TABLE Loan ADD CONSTRAINT Loan_Customer FOREIGN KEY Loan_Customer (Customer_id_c)
    REFERENCES Customer (id_c);

-- Reference: Loan_Employee (table: Loan)
ALTER TABLE Loan ADD CONSTRAINT Loan_Employee FOREIGN KEY Loan_Employee (Employee_id_e)
    REFERENCES Employee (id_e);

-- Reference: Loan_Movie_Loan (table: Loan_Movie)
ALTER TABLE Loan_Movie ADD CONSTRAINT Loan_Movie_Loan FOREIGN KEY Loan_Movie_Loan (Loan_id_l)
    REFERENCES Loan (id_l);

-- Reference: Loan_Movie_Movie (table: Loan_Movie)
ALTER TABLE Loan_Movie ADD CONSTRAINT Loan_Movie_Movie FOREIGN KEY Loan_Movie_Movie (Movie_id_m)
    REFERENCES Movie (id_m);

-- Reference: Movie_Genre_Genre (table: Movie_Genre)
ALTER TABLE Movie_Genre ADD CONSTRAINT Movie_Genre_Genre FOREIGN KEY Movie_Genre_Genre (Genre_id_g)
    REFERENCES Genre (id_g);

-- Reference: Movie_Genre_Movie (table: Movie_Genre)
ALTER TABLE Movie_Genre ADD CONSTRAINT Movie_Genre_Movie FOREIGN KEY Movie_Genre_Movie (Movie_id_m)
    REFERENCES Movie (id_m);

-- Reference: Movie_Prize_Movie (table: Movie_Prize)
ALTER TABLE Movie_Prize ADD CONSTRAINT Movie_Prize_Movie FOREIGN KEY Movie_Prize_Movie (Movie_id_m)
    REFERENCES Movie (id_m);

-- Reference: Movie_Prize_Oscar_Nomination (table: Movie_Prize)
ALTER TABLE Movie_Prize ADD CONSTRAINT Movie_Prize_Oscar_Nomination FOREIGN KEY Movie_Prize_Oscar_Nomination (Nomination_id_pr)
    REFERENCES Nomination (id_pr);

-- Reference: Movie_Starring_Movie (table: Movie_Starring)
ALTER TABLE Movie_Starring ADD CONSTRAINT Movie_Starring_Movie FOREIGN KEY Movie_Starring_Movie (Movie_id_m)
    REFERENCES Movie (id_m);

-- Reference: Movie_Starring_Stars (table: Movie_Starring)
ALTER TABLE Movie_Starring ADD CONSTRAINT Movie_Starring_Stars FOREIGN KEY Movie_Starring_Stars (Stars_id_s)
    REFERENCES Stars (id_s);

-- Reference: Nickname_Movie (table: Title)
ALTER TABLE Title ADD CONSTRAINT Nickname_Movie FOREIGN KEY Nickname_Movie (Movie_id_m)
    REFERENCES Movie (id_m);

-- Reference: Return_Employee (table: Returned)
ALTER TABLE Returned ADD CONSTRAINT Return_Employee FOREIGN KEY Return_Employee (Employee_id_e)
    REFERENCES Employee (id_e);

-- Reference: Return_Loan (table: Returned)
ALTER TABLE Returned ADD CONSTRAINT Return_Loan FOREIGN KEY Return_Loan (Loan_id_l)
    REFERENCES Loan (id_l);

-- Reference: Sale_Discount (table: Sale)
ALTER TABLE Sale ADD CONSTRAINT Sale_Discount FOREIGN KEY Sale_Discount (Discount_id_d)
    REFERENCES Discount (id_d);

-- Reference: Sale_Loan (table: Sale)
ALTER TABLE Sale ADD CONSTRAINT Sale_Loan FOREIGN KEY Sale_Loan (Loan_id_l)
    REFERENCES Loan (id_l);

-- Reference: Sale_Price (table: Sale)
ALTER TABLE Sale ADD CONSTRAINT Sale_Price FOREIGN KEY Sale_Price (Price_id_p)
    REFERENCES Price (id_p);

-- End of file.

