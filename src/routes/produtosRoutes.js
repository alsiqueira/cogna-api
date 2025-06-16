import express from 'express';
import { getProdutos, getProdutoById } from '../controllers/produtosController.js';

const router = express.Router();

router.get('/produtos', getProdutos);
router.get('/produtos/:id', getProdutoById);

export default router;