import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Limpar o banco de dados antes dos testes
  await prisma.produto.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
}); 