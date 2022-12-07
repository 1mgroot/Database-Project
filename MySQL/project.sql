-- SQLINES DEMO *** le SQL Developer Data Modeler 22.2.0.165.1149
-- SQLINES DEMO *** -11-06 01:17:32 EDT
-- SQLINES DEMO *** le Database 21c
-- SQLINES DEMO *** le Database 21c

create database if not exists libraryDB;

use libraryDB;

-- SQLINES DEMO *** no DDL - MDSYS.SDO_GEOMETRY

-- SQLINES DEMO *** no DDL - XMLTYPE

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE author (
    author_id       BIGINT NOT NULL,
    lname           VARCHAR(20) NOT NULL,
    fname           VARCHAR(20) NOT NULL,
    email_address   VARCHAR(20),
    mailing_country VARCHAR(20),
    mailing_city    VARCHAR(20),
    mailing_street  VARCHAR(20),
    mailing_room    VARCHAR(20)
);

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.author_id IS
--     'unique author id'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.lname IS
--     'last name of author'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.fname IS
--     'first name of author'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.email_address IS
--     'email address of the author'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.mailing_country IS
--     'country of the author'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.mailing_city IS
--     'city of the author'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.mailing_street IS
--     'street of the author'; */

-- /* Moved to CREATE TABLE
-- COMMENT ON COLUMN author.mailing_room IS
--     'room of the author'; */

ALTER TABLE author ADD CONSTRAINT author_pk PRIMARY KEY ( author_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE book (
--     book_id BIGINT NOT NULL,
--     topic   VARCHAR(30) NOT NULL,
--     type    VARCHAR(10) NOT NULL
-- );

-- ALTER TABLE book ADD CONSTRAINT book_pk PRIMARY KEY ( book_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE book_author (
--     book_id   BIGINT NOT NULL,
--     author_id BIGINT NOT NULL
-- );

-- ALTER TABLE book_author ADD CONSTRAINT book_author_pk PRIMARY KEY ( book_id,
--                                                                     author_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE borrowing (
--     borrow_id           BIGINT NOT NULL,
--     status              VARCHAR(10) NOT NULL,
--     borrow_date         DATETIME NOT NULL,
--     expect_return_date  DATETIME NOT NULL,
--     fee                 DECIMAL(4, 2),
--     customer_id         BIGINT NOT NULL,
--     actural_return_date DATETIME,
--     copy_id             BIGINT NOT NULL
-- --     invoice_id          BIGINT NOT NULL 
-- );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- -- CREATE UNIQUE INDEX borrowing__idx ON
-- --     borrowing (
-- --         invoice_id
-- --     ASC );

-- ALTER TABLE borrowing ADD CONSTRAINT borrowing_pk PRIMARY KEY ( borrow_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE copy (
--     copy_id BIGINT NOT NULL,
--     status  VARCHAR(10) NOT NULL,
--     book_id BIGINT NOT NULL
-- );

-- ALTER TABLE copy ADD CONSTRAINT copy_pk PRIMARY KEY ( copy_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE customer (
--     customer_id         BIGINT NOT NULL,
--     fname               VARCHAR(20) NOT NULL,
--     lname               VARCHAR(20) NOT NULL,
--     phone_number        BIGINT,
--     email_address       VARCHAR(20),
--     identification_type VARCHAR(20) NOT NULL,
--     identification_num  BIGINT NOT NULL
-- );

-- ALTER TABLE customer ADD CONSTRAINT customer_pk PRIMARY KEY ( customer_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE customer_event (
--     customer_id BIGINT NOT NULL,
--     event_id    BIGINT NOT NULL
-- );

-- ALTER TABLE customer_event ADD CONSTRAINT customer_event_pk PRIMARY KEY ( customer_id,
--                                                                           event_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE event (
--     event_id       BIGINT NOT NULL,
--     topic          VARCHAR(20) NOT NULL,
--     name           VARCHAR(20) NOT NULL,
--     type           VARCHAR(1) NOT NULL,
--     start_datetime DATETIME NOT NULL,
--     stop_datetime  DATETIME NOT NULL
-- );

-- ALTER TABLE event
--     ADD CONSTRAINT ch_inh_event CHECK ( type IN ( 'E', 'S' ) );

-- ALTER TABLE event ADD CONSTRAINT event_pk PRIMARY KEY ( event_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE exhibition (
--     event_id BIGINT NOT NULL,
--     expense  BIGINT NOT NULL
-- );

-- ALTER TABLE exhibition ADD CONSTRAINT exhibition_pk PRIMARY KEY ( event_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE invitation (
--     invitation_id BIGINT NOT NULL,
--     author_id     BIGINT NOT NULL,
--     event_id      BIGINT NOT NULL
-- );

-- ALTER TABLE invitation ADD CONSTRAINT invitation_pk PRIMARY KEY ( invitation_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE invoice (
--     invoice_id BIGINT NOT NULL,
--     `DATE`     DATETIME NOT NULL,
--     borrow_id BIGINT NOT NULL,
--     amount     DECIMAL(10, 3)
-- );

-- CREATE UNIQUE INDEX invoice__idx ON
--     invoice (
--         borrow_id
--     ASC );

-- ALTER TABLE invoice ADD CONSTRAINT invoice_pk PRIMARY KEY ( invoice_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE payment (
--     invoice_id        BIGINT NOT NULL,
--     payment_id        BIGINT NOT NULL,
--     amount            DECIMAL(4, 2) NOT NULL,
--     `DATE`            DATETIME NOT NULL,
--     card_holder_lname VARCHAR(20) NOT NULL,
--     card_holder_fname VARCHAR(20) NOT NULL
-- );

-- ALTER TABLE payment ADD CONSTRAINT payment_pk PRIMARY KEY ( payment_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE reservation (
--     reservation_id   BIGINT NOT NULL,
--     `DATE`           DATETIME NOT NULL,
--     time_slot        VARCHAR(10) NOT NULL,
--     number_of_people SMALLINT NOT NULL,
--     room_id          BIGINT NOT NULL,
--     customer_id      BIGINT NOT NULL
-- );

-- ALTER TABLE reservation ADD CONSTRAINT reservation_pk PRIMARY KEY ( reservation_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE seminar (
--     event_id BIGINT NOT NULL
-- );

-- ALTER TABLE seminar ADD CONSTRAINT seminar_pk PRIMARY KEY ( event_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE sponsor (
--     sponsor_id        VARCHAR(10) NOT NULL,
--     type              VARCHAR(15) NOT NULL,
--     lname             VARCHAR(20),
--     fname             VARCHAR(20),
--     organization_name VARCHAR(20),
--     amount            INT NOT NULL
-- );

-- ALTER TABLE sponsor ADD CONSTRAINT sponsor_pk PRIMARY KEY ( sponsor_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE sponsor_seminar (
--     event_id   BIGINT NOT NULL,
--     sponsor_id VARCHAR(10) NOT NULL
-- );

-- ALTER TABLE sponsor_seminar ADD CONSTRAINT sponsor_seminar_pk PRIMARY KEY ( event_id,
--                                                                             sponsor_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- CREATE TABLE study_room (
--     room_id  BIGINT NOT NULL,
--     capacity SMALLINT NOT NULL
-- );

-- ALTER TABLE study_room ADD CONSTRAINT study_room_pk PRIMARY KEY ( room_id );

-- ALTER TABLE book_author
--     ADD CONSTRAINT book_author_author_fk FOREIGN KEY ( author_id )
--         REFERENCES author ( author_id );

-- ALTER TABLE book_author
--     ADD CONSTRAINT book_author_book_fk FOREIGN KEY ( book_id )
--         REFERENCES book ( book_id );

-- ALTER TABLE borrowing
--     ADD CONSTRAINT borrowing_copy_fk FOREIGN KEY ( copy_id )
--         REFERENCES copy ( copy_id );

-- ALTER TABLE borrowing
--     ADD CONSTRAINT borrowing_customer_fk FOREIGN KEY ( customer_id )
--         REFERENCES customer ( customer_id );

-- -- ALTER TABLE borrowing
-- --     ADD CONSTRAINT borrowing_invoice_fk FOREIGN KEY ( invoice_id )
-- --         REFERENCES invoice ( invoice_id );

-- ALTER TABLE copy
--     ADD CONSTRAINT copy_book_fk FOREIGN KEY ( book_id )
--         REFERENCES book ( book_id );

-- ALTER TABLE customer_event
--     ADD CONSTRAINT customer_event_customer_fk FOREIGN KEY ( customer_id )
--         REFERENCES customer ( customer_id );

-- ALTER TABLE customer_event
--     ADD CONSTRAINT customer_event_event_fk FOREIGN KEY ( event_id )
--         REFERENCES event ( event_id );

-- ALTER TABLE exhibition
--     ADD CONSTRAINT exhibition_event_fk FOREIGN KEY ( event_id )
--         REFERENCES event ( event_id );

-- ALTER TABLE invitation
--     ADD CONSTRAINT invitation_author_fk FOREIGN KEY ( author_id )
--         REFERENCES author ( author_id );

-- ALTER TABLE invitation
--     ADD CONSTRAINT invitation_exhibition_fk FOREIGN KEY ( event_id )
--         REFERENCES exhibition ( event_id );

-- ALTER TABLE invoice
--     ADD CONSTRAINT invoice_borrowing_fk FOREIGN KEY ( borrow_id )
--         REFERENCES borrowing ( borrow_id );

-- ALTER TABLE payment
--     ADD CONSTRAINT payment_invoice_fk FOREIGN KEY ( invoice_id )
--         REFERENCES invoice ( invoice_id );

-- ALTER TABLE reservation
--     ADD CONSTRAINT reservation_customer_fk FOREIGN KEY ( customer_id )
--         REFERENCES customer ( customer_id );

-- ALTER TABLE reservation
--     ADD CONSTRAINT reservation_study_room_fk FOREIGN KEY ( room_id )
--         REFERENCES study_room ( room_id );

-- ALTER TABLE seminar
--     ADD CONSTRAINT seminar_event_fk FOREIGN KEY ( event_id )
--         REFERENCES event ( event_id );

-- ALTER TABLE sponsor_seminar
--     ADD CONSTRAINT sponsor_seminar_seminar_fk FOREIGN KEY ( event_id )
--         REFERENCES seminar ( event_id );

-- ALTER TABLE sponsor_seminar
--     ADD CONSTRAINT sponsor_seminar_sponsor_fk FOREIGN KEY ( sponsor_id )
--         REFERENCES sponsor ( sponsor_id );

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY




-- -- (e)

-- ALTER TABLE author 
-- 	ADD CONSTRAINT c_author_lNAME check (lNAME=upper(lNAME));
-- ALTER TABLE author 
-- 	ADD CONSTRAINT c_author_fNAME check (fNAME=upper(fNAME));
-- ALTER TABLE customer 
-- 	ADD CONSTRAINT c_customer_lNAME check (lNAME=upper(lNAME));
-- ALTER TABLE customer 
-- 	ADD CONSTRAINT c_customer_fNAME check (fNAME=upper(fNAME));
-- ALTER TABLE sponsor 
-- 	ADD CONSTRAINT c_sponsor_lNAME check (lNAME=upper(lNAME));
-- ALTER TABLE sponsor 
-- 	ADD CONSTRAINT c_sponsor_fNAME check (fNAME=upper(fNAME));
-- ALTER TABLE event 
-- 	ADD CONSTRAINT c_event_check_dates check (start_datetime <= stop_datetime);
-- ALTER TABLE borrowing 
-- 	ADD CONSTRAINT c_borrowing_check_dates check (borrow_date <= expect_return_date);
-- ALTER TABLE borrowing 
-- 	ADD CONSTRAINT c_borrowing_check_actual_dates check (borrow_date <= actural_return_date);
-- ALTER TABLE sponsor
--     ADD CONSTRAINT c_inh_sponsor CHECK ( type IN ( 'individual', 'organization' ) );
-- ALTER TABLE customer
--     ADD CONSTRAINT c_inh_customer CHECK ( identification_type IN ( 'Passport', 'SSN', 'Driver License' ) );
    
-- -- (f)
-- DELIMITER $$
-- CREATE TRIGGER caculate_invoice
-- AFTER UPDATE ON borrowing FOR EACH ROW
-- BEGIN
-- 	IF new.actural_return_date <= old.expect_return_date THEN
-- 		INSERT INTO invoice(invoice_id, date, borrow_id, amount) 
-- 			VALUES(new.borrow_id*10, new.actural_return_date, new.borrow_id, DATEDIFF(new.actural_return_date,new.borrow_date)*0.2);
-- 	ELSE
-- 		INSERT INTO invoice(invoice_id, date, borrow_id, amount) 
-- 			VALUES(new.borrow_id*10, new.actural_return_date, new.borrow_id,(DATEDIFF(new.expect_return_date,new.borrow_date)*0.2 + DATEDIFF(new.actural_return_date,new.expect_return_date)*0.4));
-- 	END IF;
-- END$$
-- DELIMITER ;

-- DELIMITER $$
-- CREATE TRIGGER caculate_invoice_insert
-- AFTER INSERT ON borrowing FOR EACH ROW
-- BEGIN
-- 	IF new.actural_return_date <= new.expect_return_date THEN
-- 		INSERT INTO invoice(invoice_id, date, borrow_id, amount) 
-- 			VALUES(new.borrow_id*10, new.actural_return_date, new.borrow_id, DATEDIFF(new.actural_return_date,new.borrow_date)*0.2);
-- 	ELSE
-- 		INSERT INTO invoice(invoice_id, date, borrow_id, amount) 
--  			VALUES(new.borrow_id*10, new.actural_return_date, new.borrow_id,(DATEDIFF(new.expect_return_date,new.borrow_date)*0.2 + DATEDIFF(new.actural_return_date,new.expect_return_date)*0.4));
-- 	END IF;
-- END$$
-- DELIMITER ;

-- -- SQLINES LICENSE FOR EVALUATION USE ONLY
-- DROP TRIGGER IF EXISTS arc_fkarc_1_exhibition;

-- DELIMITER //
-- CREATE TRIGGER arc_fkarc_1_exhibition 
-- BEFORE INSERT ON exhibition FOR EACH ROW
-- BEGIN
-- 	DECLARE d VARCHAR(1);
--     -- SQLINES LICENSE FOR EVALUATION USE ONLY
--     SELECT
--         a.type
--     INTO d
--     FROM
--         event a
--     WHERE
--         a.event_id = new.event_id;

--     IF ( d IS NULL OR d <> 'E') THEN
--         signal sqlstate '01608' set message_text = 'FK EXHIBITION_EVENT_FK in Table EXHIBITION violates Arc constraint on Table EVENT - discriminator column TYPE doesn''t have value ''E''';
--     END IF;
-- END;
-- /
-- -- END$$
-- -- DELIMITER ;


-- DROP TRIGGER IF EXISTS arc_fkarc_1_exhibition;
-- DELIMITER //
-- CREATE TRIGGER arc_fkarc_1_exhibition 

-- BEFORE UPDATE ON exhibition FOR EACH ROW
-- BEGIN
-- 	DECLARE d VARCHAR(1);
--     -- SQLINES LICENSE FOR EVALUATION USE ONLY
--     SELECT
--         a.type
--     INTO d
--     FROM
--         event a
--     WHERE
--         a.event_id = new.event_id;

--     IF ( d IS NULL OR d <> 'E') THEN
--         signal sqlstate '01608' set message_text = 'FK EXHIBITION_EVENT_FK in Table EXHIBITION violates Arc constraint on Table EVENT - discriminator column TYPE doesn''t have value ''E''';
--     END IF;
-- END;
-- //

-- DROP TRIGGER IF EXISTS arc_fkarc_1_seminar;
-- DELIMITER //
-- CREATE TRIGGER arc_fkarc_1_seminar 
-- BEFORE INSERT ON seminar FOR EACH ROW
-- BEGIN
-- 	DECLARE d VARCHAR(1);
--     -- SQLINES LICENSE FOR EVALUATION USE ONLY
--     SELECT
--         a.type
--     INTO d
--     FROM
--         event a
--     WHERE
--         a.event_id = new.event_id;

--     IF ( d IS NULL OR d <> 'S') THEN
--         signal sqlstate '01608' set message_text = 'FK EXHIBITION_EVENT_FK in Table EXHIBITION violates Arc constraint on Table EVENT - discriminator column TYPE doesn''t have value ''E''';
--     END IF;
-- END;
-- /

-- DROP TRIGGER IF EXISTS arc_fkarc_1_seminar;
-- DELIMITER //
-- CREATE TRIGGER arc_fkarc_1_seminar 

-- BEFORE UPDATE ON seminar FOR EACH ROW
-- BEGIN
-- 	DECLARE d VARCHAR(1);
--     -- SQLINES LICENSE FOR EVALUATION USE ONLY
--     SELECT
--         a.type
--     INTO d
--     FROM
--         event a
--     WHERE
--         a.event_id = new.event_id;

--     IF ( d IS NULL OR d <> 'S') THEN
--         signal sqlstate '01608' set message_text = 'FK EXHIBITION_EVENT_FK in Table EXHIBITION violates Arc constraint on Table EVENT - discriminator column TYPE doesn''t have value ''E''';
--     END IF;
-- END;
-- //


-- -- (g)


-- -- INSERT INTO author VALUES('111','A','A','11111@qq.com','China','Beijing','A street','Apt 1A');
-- -- INSERT INTO author VALUES('222','B','B','22222@qq.com','China','Shanghai','B street','Apt 1B');
-- -- INSERT INTO author VALUES('333','C','C','33333@qq.com','China','Taiyuan','C street','Apt 1C');
-- -- INSERT INTO author VALUES('444','D','D','44444@qq.com','China','Shenzhen','D street','Apt 1D');
-- -- INSERT INTO author VALUES('555','E','E','55555@qq.com','China','Guangzhou','E street','Apt 1E');
-- -- INSERT INTO author VALUES('666','F','F','66666@qq.com','China','Chengdu','F street','Apt 1F');
-- -- INSERT INTO author VALUES('777','G','G','77777@qq.com','China','Changsha','G street','Apt 1G');
-- -- INSERT INTO author VALUES('888','H','H','88888@qq.com','China','Wuhan','H street','Apt 1H');
-- -- INSERT INTO author VALUES('999','I','I','99999@qq.com','China','HaErbin','I street','Apt 1I');
-- -- INSERT INTO author VALUES('000','Y','Y','00000@qq.com','the US','New York','Y street','Apt 0Y');
-- -- INSERT INTO author VALUES('456','j','j','00000@qq.com','the US','New York','Y street','Apt 0Y');
-- -- INSERT INTO invitation (INVITATION_ID) VALUES('123'),('124'),('125'),('126'),('127'),('128'),('129'),('132'),('133'),('134');
-- -- insert into book  values('456','Lss','t');
-- -- insert into copy values('78','y','456');
-- -- insert into customer (customer_id,fName,Lname,phone_number, email_address, identification_type,identification_num) values('131','Lss','t','541456789','myemail.com','SSN','41234');
-- -- insert into borrowing values('111','Y','1999-01-01','1999-02-02',30,'131','1999-02-02','78');
-- -- insert into borrowing values('121','Y','1999-01-01','1999-02-01',30,'131','1999-02-02','78');
-- -- insert into event values('999999','A','AA','E','1999-01-01','1999-01-02');

INSERT INTO author VALUES('111','A','A','11111@qq.com','China','Beijing','A street','Apt 1A');
INSERT INTO author VALUES('222','B','B','22222@qq.com','China','Shanghai','B street','Apt 1B');
INSERT INTO author VALUES('333','C','C','33333@qq.com','China','Taiyuan','C street','Apt 1C');
INSERT INTO author VALUES('444','D','D','44444@qq.com','China','Shenzhen','D street','Apt 1D');
-- INSERT INTO author VALUES('555','E','E','55555@qq.com','China','Guangzhou','E street','Apt 1E');
-- INSERT INTO author VALUES('666','F','F','66666@qq.com','China','Chengdu','F street','Apt 1F');
-- INSERT INTO author VALUES('777','G','G','77777@qq.com','China','Changsha','G street','Apt 1G');
-- INSERT INTO author VALUES('888','H','H','88888@qq.com','China','Wuhan','H street','Apt 1H');
-- INSERT INTO author VALUES('999','I','I','99999@qq.com','China','HaErbin','I street','Apt 1I');
-- INSERT INTO author VALUES('000','Y','Y','00000@qq.com','the US','New York','Y street','Apt 0Y');
-- INSERT INTO author VALUES('456','j','j','00000@qq.com','the US','New York','Y street','Apt 0Y');
-- INSERT INTO book VALUES('1991','English','Education'),('1992','Chinese','Fiction'),('1993','New York','Nonfiction'),('1994','Italy','History'),('1995','Australia','Horror'),('1996','California','Humor'),('1997','Santa Cruz','Math'),('1998','Irvine','Memoir'),('1999','Texas','Mystery'),('1990','French','Journal');
-- Insert into book_author Values('1991','111'),('1992','222'),('1993','333'),('1994','444'),('1995','555'),('1996','666'),('1997','777'),('1998','888'),('1999','999'),('1990','000');
-- insert into customer (customer_id,fName,Lname,identification_type,identification_num) values('1','Lss','t','SSN',111),('2','Laaa','t','SSN',1),('3','sdL','t','SSN',1234),('4','L','tsss','SSN',13),('5','sasdL','t','SSN',1234),('6','Lsdd','t','SSN',1),('7','L','t','SSN',1),('8','L','sss','SSN',12),('9','L','s','SSN',12),('0','s','s','SSN',123);

-- insert into copy  values('11111','Y','1991'),('22222','N','1992'),('33333','Y','1993'),('44444','Y','1994'),('55555','Y','1995'),('66666','Y','1996'),('77777','Y','1997'),('88888','Y','1998'),('99999','N','1999'),('00000','N','1990');
-- insert into borrowing values('11','Y','1999-01-01','1999-02-02',30,'1','1999-02-02','11111'),('22','Y','1999-01-01','1999-02-02',30,'2','1999-02-02','22222'),('33','Y','1999-01-01','1999-02-02',30,'3','1999-02-02','33333'),('44','Y','1999-01-01','1999-02-02',30,'4','1999-02-02','44444'),('55','Y','1999-01-01','1999-02-02',30,'5','1999-02-02','55555'),('66','Y','1999-01-01','1999-02-02',30,'6','1999-02-02','66666'),('77','Y','1999-01-01','1999-02-02',30,'7','1999-02-02','77777'),('88','Y','1999-01-01','1999-02-02',30,'8','1999-02-02','88888'),('99','Y','1999-01-01','1999-02-02',30,'9','1999-02-02','99999'),('00','Y','1999-01-01','1999-02-02',30,'0','1999-02-02','00000');
-- insert into customer (customer_id,fName,Lname,phone_number, email_address, identification_type,identification_num) values('131','Lss','t','541456789','myemail.com','SSN','41234');
-- insert into sponsor values('A11','individual','LL','TT','LT',30),('A2','individual','LLL','TTT','LT1',30),('A3','individual','LLL','TTT','LT1',30),('A4','individual','LLL','TTsd','LT',30),('A5','individual','sL','sss','LT1',30123),('A6','individual','sL','s','LT1',320),('A7','individual','Ls','Ts','Ls',30),('A8','individual','LLL','TrrT','LTr',303),('A9','individual','LLL','WWW','LTw',3980),('A0','individual','LLL','T','LTq',320);
-- insert into study_room values('0001',10),('0002',102),('0003',103),('0004',104),('0005',105),('0006',106),('0007',107),('0008',104),('0009',102),('0000',101);
-- insert into reservation values('0011','1999-01-01','8:00','5','0001','1'),('0022','1999-01-02','2:00','2','0002','2'),('0033','1999-01-01','3:00','3','003','3'),('0044','1999-01-01','4:00','4','004','4'),('0055','1999-05-01','8:00','5','005','5'),('0066','1999-01-01','6:00','6','006','6'),('0077','1999-01-07','8:00','7','007','7'),('0088','1999-01-18','8:00','8','008','8'),('0099','1999-03-01','9:00','5','009','9'),('0100','1999-01-02','9:00','5','000','0');
-- insert into payment values('0','1221',30,'2000-01-01','L','T'),('110','1222',30,'2000-01-01','Lsssss','T'),('220','1223',30,'2000-01-01','Lsd','Tsd'),('330','1224',30,'2000-01-01','Lss','Tdd'),('440','1225',30,'2000-01-01','Ld','T'),('550','1226',30,'2000-01-01','Lfgh','T'),('660','1227',30,'2000-01-01','Lfg','T'),('770','1228',30,'2000-01-01','L','Thj'),('880','1229',30,'2000-01-01','Ls','Tas'),('990','1220',30,'2000-01-01','L','asdT');

-- insert into event values('999999','A','AA','E','1999-01-01','1999-01-02'),('888888','AA','AAA','S','1999-01-01','1999-01-05'),('777777','Y','YY','S','1999-01-01','1999-01-09'),('666666','T','TT','S','1999-01-01','1999-01-02'),('555555','R','RR','E','1999-01-09','1999-01-12'),('123456','R','RR','E','1999-01-01','1999-01-02'),('444444','E','EE','E','1999-01-01','1999-01-03'),('333333','W','WW','E','1999-01-01','1999-01-02'),('000000','A','AA','E','1999-01-01','1999-01-06'),('22222','Q','QQ','E','1999-01-01','1999-01-03');
-- insert into seminar values('888888'),('777777'),('666666');
-- insert into Exhibition values('999999',30),('555555',50),('123456',60),('444444',70),('333333',90),('22222',100),('000000',111);

-- SELECT COUNT(*) as author_populated_amount FROM author ;
-- SELECT COUNT(*) as book_populated_amount FROM book ;
-- SELECT COUNT(*) as book_author_populated_amount FROM book_author ;
-- SELECT COUNT(*) as borrowing_populated_amount FROM borrowing;
-- SELECT COUNT(*) as copy_populated_amount FROM copy ;
-- SELECT COUNT(*) as customer_populated_amount FROM customer ;
-- SELECT COUNT(*) as exhibition_populated_amount FROM exhibition ;
-- SELECT COUNT(*) as invoice_populated_amount FROM invoice;
-- SELECT COUNT(*) as payment_nvoice_populated_amount FROM payment;
-- SELECT COUNT(*) as reservation_populated_amount FROM reservation;
-- SELECT COUNT(*) as seminar_populated_amount FROM seminar;
-- SELECT COUNT(*) as sponsor_populated_amount FROM sponsor;
-- SELECT COUNT(*) as study_room_populated_amount FROM study_room;

-- -- SELECT a.TABLE_SCHEMA,a.TABLE_NAME,a.COLUMN_NAME,a.COLUMN_DEFAULT,a.COLUMN_TYPE,a.IS_NULLABLE,a.COLUMN_COMMENT,b.CONSTRAINT_NAME,b.CONSTRAINT_TYPE FROM information_schema.COLUMNS a ,information_schema.table_constraints b WHERE a.TABLE_SCHEMA ='projectJZ';



