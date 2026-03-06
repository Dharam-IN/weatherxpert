FROM node:18-alpine
WORKDIR /app

# Dependency files copy karo
COPY package*.json ./

# Sab dependencies install karo
RUN npm install

# Saara code copy karo (Except jo .dockerignore mein hai)
COPY . .

# Production build generate karo (Ye .next folder banayega)
RUN npm run build

EXPOSE 3000

# Container start hote hi production server chalao
CMD ["npm", "run", "start"]