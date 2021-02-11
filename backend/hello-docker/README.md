# Hello Docker!

## Spuštění kontejneru z Image různých verzí PHP

docker run --rm -d -p 8074:80 -v $(pwd)/src:/var/www/html php:7.4-apache  
docker run --rm -d -p 8080:80 -v $(pwd)/src:/var/www/html php:8-apache  

## Výpis běžících kontejnerů

docker ps

## Zastavení kontejneru pomocí ID nebo názvu

docker stop CONTAINER ID  
docker stop CONTAINER ID