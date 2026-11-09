FROM node:24-alpine
RUN apk upgrade --no-cache
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && rm -rf /usr/local/lib/node_modules /usr/local/bin/npm /usr/local/bin/npx /opt/yarn-*
COPY server.js app.js schemas.js ./
COPY middleware ./middleware
COPY routes ./routes
COPY controllers ./controllers
COPY data ./data
COPY public ./public
USER node
EXPOSE 8000
CMD ["node", "server.js"]