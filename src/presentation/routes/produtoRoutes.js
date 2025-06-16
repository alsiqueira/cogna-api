import { Router } from 'express';

export function createProdutoRoutes(produtoController) {
  const router = Router();

  router.get('/produtos', (req, res) => produtoController.listarProdutos(req, res));
  router.get('/produtos/:id', (req, res) => produtoController.buscarProdutoPorId(req, res));
  router.post('/produtos', (req, res) => produtoController.criarProduto(req, res));
  router.put('/produtos/:id', (req, res) => produtoController.atualizarProduto(req, res));
  router.delete('/produtos/:id', (req, res) => produtoController.deletarProduto(req, res));

  return router;
} 