import { prisma } from '../database/prisma/index.js';
import { IProdutoRepository } from '../../domain/repositories/IProdutoRepository.js';

export class PrismaProdutoRepository extends IProdutoRepository {
  async findAll() {
    return prisma.produto.findMany();
  }

  async findById(id) {
    return prisma.produto.findUnique({
      where: { id: Number(id) }
    });
  }

  
} 