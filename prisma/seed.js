import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        nome: 'Caderno Universitário',
        descricao: 'Caderno com 200 folhas',
        valor: 29.9,
        foto: 'https://exemplo.com/caderno.jpg',
      },
      {
        nome: 'Caneta Azul',
        descricao: 'Caneta esferográfica azul',
        valor: 2.5,
        foto: 'https://exemplo.com/caneta.jpg',
      },
      {
        nome: 'Mochila Escolar',
        descricao: 'Mochila resistente para estudantes',
        valor: 99.0,
        foto: 'https://exemplo.com/mochila.jpg',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 