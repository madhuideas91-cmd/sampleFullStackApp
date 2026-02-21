# Build and serve with Node
FROM node:20-alpine
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve globally for production serving
RUN npm install -g serve

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Serve the built application
CMD ["serve", "-s", "dist", "-l", "3000"]

