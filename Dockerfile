FROM node:16-alpine
WORKDIR /frontend
COPY . ./
#RUN npm i
#RUN npm run dev
RUN yarn install
CMD ["yarn", "dev"]