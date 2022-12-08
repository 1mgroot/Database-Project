# Database-Project

## Before running this project
Follow the instructions to [download and install Docker](https://docs.docker.com/get-docker/).

## Run with docker
1. `docker-compose build`
2. `docker-compose up`


## Check data in MySQL database
1. While this container is running(After you do`docker-compose up`), Open another terminal.

2. `docker exec -it mysql_container /bin/bash`

3. `mysql -u root`

4. Now, you can use any mysql script. For example, `show databases;` `use libraryDB;` `show tables;` `select * from author;`

## Host URL
http://127.0.0.1/
