# Use Node.js LTS version
FROM node:14

# Set working directory
WORKDIR /app

# Install app dependencies

COPY package*.json ./
# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./



# Copy app source code
COPY . .

RUN npm install 
RUN npx prisma generate



# Expose port and start the app
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
