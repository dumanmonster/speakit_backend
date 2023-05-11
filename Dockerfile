# Use Node.js LTS version
FROM node:14

# Set working directory
WORKDIR /app

# Install app dependencies

COPY package*.json ./
RUN npm install --production
RUN npm install -g @nestjs/cli
# RUN npm run prisma:pool



# Copy app source code
COPY . .
RUN npm run prisma:generate
# RUN npm run prisma:migrate
# RUN npm run prisma:pull

# Expose port and start the app
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
