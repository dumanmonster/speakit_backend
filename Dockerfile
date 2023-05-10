# Use Node.js LTS version
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install app dependencies

COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]
