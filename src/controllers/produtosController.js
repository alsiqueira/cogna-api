export class ProdutosController {
  constructor(produtosService) {
    this.produtosService = produtosService;
  }

  getProdutos = async (req, res) => {
    try {
      const produtos = await this.produtosService.listarProdutos();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getProdutoById = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
      }

      const produto = await this.produtosService.obterProdutoPorId(id);
      res.json(produto);
    } catch (error) {
      if (error.message === 'Produto não encontrado') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  };
}