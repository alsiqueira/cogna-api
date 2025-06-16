import { ProdutoService } from '../../application/services/ProdutoService.js';
import { Produto } from '../../domain/entities/Produto.js';

// Mock do repositório
class MockProdutoRepository {
  constructor() {
    this.produtos = [];
  }

  async findAll() {
    return this.produtos;
  }

  async findById(id) {
    return this.produtos.find(p => p.id === id) || null;
  }

  async create(produto) {
    const novoProduto = { ...produto, id: this.produtos.length + 1 };
    this.produtos.push(novoProduto);
    return novoProduto;
  }

  async update(id, produto) {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index === -1) return null;
    this.produtos[index] = { ...produto, id };
    return this.produtos[index];
  }

  async delete(id) {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.produtos.splice(index, 1);
    return true;
  }
}

describe('ProdutoService', () => {
  let service;
  let repository;

  beforeEach(() => {
    repository = new MockProdutoRepository();
    service = new ProdutoService(repository);
  });

  describe('listarProdutos', () => {
    it('deve retornar lista vazia quando não há produtos', async () => {
      const produtos = await service.listarProdutos();
      expect(produtos).toEqual([]);
    });

    it('deve retornar todos os produtos', async () => {
      const produto1 = new Produto({ nome: 'Produto 1', descricao: 'Desc 1', valor: 10, foto: 'foto1.jpg' });
      const produto2 = new Produto({ nome: 'Produto 2', descricao: 'Desc 2', valor: 20, foto: 'foto2.jpg' });
      
      await repository.create(produto1);
      await repository.create(produto2);

      const produtos = await service.listarProdutos();
      expect(produtos).toHaveLength(2);
    });
  });

  describe('buscarProdutoPorId', () => {
    it('deve lançar erro quando produto não existe', async () => {
      await expect(service.buscarProdutoPorId(1)).rejects.toThrow('Produto não encontrado');
    });

    it('deve retornar produto quando existe', async () => {
      const produto = new Produto({ nome: 'Produto 1', descricao: 'Desc 1', valor: 10, foto: 'foto1.jpg' });
      const criado = await repository.create(produto);

      const encontrado = await service.buscarProdutoPorId(criado.id);
      expect(encontrado).toEqual(criado);
    });
  });
}); 