import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=20');
    const products = await response.json();
    return products.map(product => ({
      nome: product.title,
      descricao: product.description,
      valor: product.price,
      foto: product.image
    }));
  } catch (error) {
    console.error('Erro ao buscar produtos da Fake API:', error);
    throw error;
  }
}

async function main() {
  try {
    console.log('Iniciando seed do banco de dados...');
    
    // Buscar produtos da Fake API
    const produtos = await fetchProducts();
    
    // Limpar tabela existente
    await prisma.produto.deleteMany();
    
    // Inserir novos produtos
    await prisma.produto.createMany({
      data: produtos
    });
    
    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 