FROM node:16-alpine
WORKDIR /frontend
COPY . ./
#RUN npm i
#RUN npm run dev
RUN yarn install
RUN yarn global add @craco/craco
CMD ["yarn", "dev"]