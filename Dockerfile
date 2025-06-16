# Estágio de build
FROM node:22-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install --frozen-lockfile

# Copiar código fonte
COPY . .

# Estágio de produção
FROM node:22-alpine AS production

# Definir diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos necessários do estágio de build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/src ./src

# Instalar apenas dependências de produção
RUN yarn install --frozen-lockfile --production

# Expor porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"] 