# Container Image that is going to be executed
FROM postgres:latest

#Copy entrypoint.sh to the container '/' directory
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Code file that is going to be executed when Docker Container is running 
ENTRYPOINT ["/docker-entrypoint.sh"]
