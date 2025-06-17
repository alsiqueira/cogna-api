import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();


function gerarProduto() {
  
  
  return {
    name: `${faker.commerce.productName()}`,
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })) * 100,
    photo: faker.image.urlLoremFlickr({ width: 640, height: 480, category: 'fashion' }),
 
  };
}

async function main() {
  try {
    console.log('Iniciando seed do banco de dados...');

    // Limpar dados existentes
    await prisma.produto.deleteMany();
    console.log('Dados antigos removidos.');

    // Gerar e inserir produtos
    const produtos = Array.from({ length: 50 }, () => gerarProduto());
    
    for (const produto of produtos) {
      await prisma.produto.create({
        data: produto
      });
    }

    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 