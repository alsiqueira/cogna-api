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

 
} 