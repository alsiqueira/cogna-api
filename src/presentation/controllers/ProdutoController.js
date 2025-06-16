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

  async criarProduto(req, res) {
    try {
      const produto = await this.produtoService.criarProduto(req.body);
      res.status(201).json(produto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async atualizarProduto(req, res) {
    try {
      const produto = await this.produtoService.atualizarProduto(req.params.id, req.body);
      res.json(produto);
    } catch (error) {
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(400).json({ error: error.message });
      }
    }
  }

  async deletarProduto(req, res) {
    try {
      await this.produtoService.deletarProduto(req.params.id);
      res.status(204).send();
    } catch (error) {
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }
} 