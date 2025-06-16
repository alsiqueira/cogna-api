import { Produto } from '../../domain/entities/Produto.js';

export class ProdutoService {
  constructor(produtoRepository) {
    this.produtoRepository = produtoRepository;
  }

  async listarProdutos() {
    return this.produtoRepository.findAll();
  }

  async buscarProdutoPorId(id) {
    const produto = await this.produtoRepository.findById(id);
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    return produto;
  }

  async criarProduto(dados) {
    const produto = new Produto(dados);
    return this.produtoRepository.create(produto);
  }

  async atualizarProduto(id, dados) {
    await this.buscarProdutoPorId(id); // Verifica se existe
    const produto = new Produto(dados);
    return this.produtoRepository.update(id, produto);
  }

  async deletarProduto(id) {
    await this.buscarProdutoPorId(id); // Verifica se existe
    return this.produtoRepository.delete(id);
  }
} 