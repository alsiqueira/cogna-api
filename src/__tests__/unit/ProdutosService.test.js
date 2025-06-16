import { ProdutosService } from '../../services/produtosService.js';

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
}

describe('ProdutosService', () => {
  let service;
  let repository;

  beforeEach(() => {
    repository = new MockProdutoRepository();
    service = new ProdutosService(repository);
  });

  describe('listarProdutos', () => {
    it('deve retornar lista vazia quando não há produtos', async () => {
      const produtos = await service.listarProdutos();
      expect(produtos).toEqual([]);
    });

    it('deve retornar todos os produtos', async () => {
      const produto1 = { id: 1, nome: 'Produto 1', preco: 100 };
      const produto2 = { id: 2, nome: 'Produto 2', preco: 200 };
      
      repository.produtos = [produto1, produto2];

      const produtos = await service.listarProdutos();
      expect(produtos).toHaveLength(2);
      expect(produtos).toEqual([produto1, produto2]);
    });
  });

  describe('obterProdutoPorId', () => {
    it('deve lançar erro quando produto não existe', async () => {
      await expect(service.obterProdutoPorId(1)).rejects.toThrow('Produto não encontrado');
    });

    it('deve retornar produto quando existe', async () => {
      const produto = { id: 1, nome: 'Produto 1', preco: 100 };
      repository.produtos = [produto];

      const encontrado = await service.obterProdutoPorId(1);
      expect(encontrado).toEqual(produto);
    });
  });
}); 