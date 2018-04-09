#!/bin/bash

# Variables
PROJECT_NAME=carborn-admin
SOURCE_DIR=/usr/share/nginx/html
TARGET=develop
TARGET_PORT=4200
IMAGE_NAME=${PROJECT_NAME}:${TARGET}

echo "TARGET: ${TARGET}"
echo "CONTAINER: ${PROJECT_NAME}"
echo "IMAGE: ${IMAGE_NAME}"

git checkout --track origin/${TARGET}

git pull

docker stop ${PROJECT_NAME}

docker rm ${PROJECT_NAME}

docker rmi ${IMAGE_NAME}

docker build -t ${IMAGE_NAME} .

docker run --name ${PROJECT_NAME} -d -p ${TARGET_PORT}:80 ${IMAGE_NAME}
