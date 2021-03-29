# Find Community Health Service Area(CHSA) - Web Application

## Description

CHSA WEB application is designed to accept latitude/longitude coordinates and provide the associated community health service area

## Getting Started

### Dependencies/Pre-requisites

- Docker [Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac/), [Win](https://hub.docker.com/editions/community/docker-ce-desktop-windows/), [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)

- Docker Compose

### Installing

In the project directory ./wfs-app, run:

#### `docker-compose up`

- Downloads mysql:latest and node:10 images

- Builds wfs-ui and wfs-api artifacts

- Creates a MySQL database instance and creates database objects by running wfs-app/Analytics.sql

- Deployes artifacts in containers


#### `docker-compose down`

- Removes database and application containers

#### `docker system prune -a` - WARNING

This will remove:

- All stopped containers

- All networks not used by at least one container

- All images without at least one container associated to them

- All build cache

#### `docker volume prune` - WARNING

- This will remove all local volumes not used by atleast one container

## License

This project is licensed under the [Apache License, Version 2.0](https://github.com/NithinKuruba/wfs-app/blob/main/LICENSE).
