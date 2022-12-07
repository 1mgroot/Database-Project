FROM mysql
# ENV MYSQL_ROOT_PASSWORD pass
ENV MYSQL_ALLOW_EMPTY_PASSWORD 'true'
ENV MYSQL_DATABASE 'django-app-db'
COPY ./project.sql /docker-entrypoint-initdb.d/project.sql