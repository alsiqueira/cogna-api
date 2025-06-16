import { prisma } from '../database/prisma/index.js';
import { Produto } from '../../domain/entities/Produto.js';
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

  async create(produto) {
    const novoProduto = await prisma.produto.create({
      data: {
        nome: produto.nome,
        descricao: produto.descricao,
        valor: produto.valor,
        foto: produto.foto
      }
    });
    return Produto.fromPrisma(novoProduto);
  }

  async update(id, produto) {
    const produtoAtualizado = await prisma.produto.update({
      where: { id: Number(id) },
      data: {
        nome: produto.nome,
        descricao: produto.descricao,
        valor: produto.valor,
        foto: produto.foto
      }
    });
    return Produto.fromPrisma(produtoAtualizado);
  }

  async delete(id) {
    await prisma.produto.delete({
      where: { id: Number(id) }
    });
  }
} 