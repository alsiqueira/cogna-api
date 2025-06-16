FROM node:22-alpine

WORKDIR /app

# Instalar dependências do sistema
RUN apk add --no-cache openssl netcat-openbsd

# Copiar arquivos de dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install

# Copiar o resto dos arquivos
COPY . .

# Gerar cliente Prisma
RUN npx prisma generate

# Expor a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "dev"] 