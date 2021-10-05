FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . .
RUN npm install
RUN ls -la
# EXPOSE 80
CMD ["npm","start"]
