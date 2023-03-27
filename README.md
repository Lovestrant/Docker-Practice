RUN APP VIA npm install to create node modules

// To buid the Image, create a Dockerfile first, then 
// Run the command: docker build -t express_site:latest .

-t is for the tag
express_site is the image tag name 
the dot at the end specifies the directory where the Dockerfile will be located


//Refer to the link below for a guide on how to create docker images
// The image will run instances of a container

https://docs.docker.com/engine/reference/builder/#:~:text=A%20Dockerfile%20is%20a%20text,can%20use%20in%20a%20Dockerfile%20.