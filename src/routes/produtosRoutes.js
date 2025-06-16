import express from 'express';

export function createProdutosRoutes(produtosController) {
  const router = express.Router();

  router.get('/produtos', produtosController.getProdutos);
  router.get('/produtos/:id', produtosController.getProdutoById);

  return router;
}