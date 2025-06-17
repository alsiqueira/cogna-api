export class ProdutoController {
  constructor(produtoService) {
    this.produtoService = produtoService;
  }

  async listarProdutos(req, res) {
    try {
      const produtos = await this.produtoService.listarProdutos();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarProdutoPorId(req, res) {
    try {
      const produto = await this.produtoService.buscarProdutoPorId(req.params.id);
      res.json(produto);
    } catch (error) {
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }



  
} 