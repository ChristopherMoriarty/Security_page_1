FROM node:18

WORKDIR /app

COPY ../front/package.json /app

COPY ../front/package-lock.json /app

RUN npm install

COPY ../front /app

# RUN npm run build

EXPOSE 3000

EXPOSE 5173

CMD ["npm", "run", "dev"]
