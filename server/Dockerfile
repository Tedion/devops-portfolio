# syntax=docker/dockerfile:1
FROM node:20-alpine AS base

ENV NODE_ENV=production
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy server code
COPY server ./server

EXPOSE 5000
CMD ["node", "server/index.js"]