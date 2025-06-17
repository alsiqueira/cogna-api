#!/bin/sh
set -e

# Esperar o banco de dados estar pronto
echo "Aguardando banco de dados..."
while ! nc -z db 5432; do
  sleep 0.1
done
echo "Banco de dados pronto!"

# Executar migrações do Prisma
echo "Executando migrações do Prisma..."
npx prisma migrate dev --name init

# Executar seed do Prisma
echo "Executando seed do Prisma..."
npx prisma db seed

echo "Iniciando aplicação..."
exec "$@" 