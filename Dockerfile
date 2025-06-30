# Build stage
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Configure npm to ignore SSL certificate errors if needed
RUN npm config set strict-ssl false

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including devDependencies needed for building)
RUN npm ci && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Build the application using the npm script instead of npx directly
RUN npm run build

# Production stage
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Configure npm to ignore SSL certificate errors if needed
RUN npm config set strict-ssl false

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Create a non-root user to run the application (security best practice)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001 && \
    chown -R nestjs:nodejs /usr/src/app
USER nestjs

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "dist/main.js"]
