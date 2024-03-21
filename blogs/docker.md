Build an image from a Dockerfile
`docker build -t image_name:tag .`

List all Docker images:
`docker images`

Run a container from an image:
`docker run -d --name container_name image_name:tag`

To kill all processes related to Docker on macOS:
`docker ps -q | xargs docker kill`

Lists the IDs of all running containers.
`docker ps -q`

To stop all running Docker containers
`docker stop $(docker ps -q)`

List running containers:
`docker ps`

To include stopped containers, add the -a flag
`docker ps -a`


Stop a running container:
`docker stop container_name_or_id`

Remove a container:
`docker rm container_name_or_id`

Remove an image:
`docker rmi image_name:tag`

Inspect a container:
`docker inspect container_name_or_id`

