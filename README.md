# Database-Project

#Before running this project
Follow the instructions to [download and install Docker](https://docs.docker.com/get-docker/).

#Start this project
`docker-compose build`
`docker-compose up`


#Check data in MySQL database
While this container is running(After you do`docker-compose up`), Open another terminal.
Then
`docker exec -it mysql_container /bin/bash`
`mysql -u root`
Then you can use any mysql script. For example, `show databases;` `use libraryDB;` `show tables;` `select * from author;`