# Use an official Node runtime as a base image
FROM node:16.13.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Print the contents of the project directory for debugging


# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Ionic app
RUN ionic build


# Expose the port that the app will run on
EXPOSE 8100

# Start the Ionic app when the container starts
CMD ["ionic", "serve", "--host", "0.0.0.0"]
