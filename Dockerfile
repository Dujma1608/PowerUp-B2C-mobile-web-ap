# Use a base image with Node.js for building the application
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

RUN npm install -g vite


# Build the Ionic application
RUN npm run build



# Use Nginx as the production server
FROM nginx:alpine


# Copy the production build output from the previous stage into the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx is configured to automatically start, no need for CMD or ENTRYPOINT
