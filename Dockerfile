# Use a specific version of the node-based image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Install http-server globally
RUN npm install -g http-server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the built application files to the container
COPY dist/ .

# Expose port 4200 to allow external access
EXPOSE 4200

# Start the web server when the container launches
CMD ["http-server", "-p", "4200"]

