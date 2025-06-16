export class ProdutosService {
  constructor(produtoRepository) {
    this.produtoRepository = produtoRepository;
  }

  async listarProdutos() {
    return this.produtoRepository.findAll();
  }

  async obterProdutoPorId(id) {
    const produto = await this.produtoRepository.findById(id);
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    return produto;
  }
}
