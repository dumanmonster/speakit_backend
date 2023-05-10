# Use Node.js LTS version
FROM node:14

# Set working directory
WORKDIR /app

# Install app dependencies

COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
