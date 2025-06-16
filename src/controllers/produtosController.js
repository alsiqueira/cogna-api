import { listarProdutos, obterProdutoPorId } from '../services/produtosService.js';

export const getProdutos = (req, res) => {
  const lista = listarProdutos();
  res.json(lista);
};

export const getProdutoById = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const produto = obterProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  res.json(produto);
};