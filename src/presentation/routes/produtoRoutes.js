import { Router } from 'express';

export function createProdutoRoutes(produtoController) {
  const router = Router();

  router.get('/produtos', (req, res) => produtoController.listarProdutos(req, res));
  router.get('/produtos/:id', (req, res) => produtoController.buscarProdutoPorId(req, res));
 

  return router;
} 