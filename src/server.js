import express from 'express';
import { PrismaProdutoRepository } from './infrastructure/repositories/PrismaProdutoRepository.js';
import { ProdutosService } from './services/produtosService.js';
import { ProdutosController } from './controllers/produtosController.js';
import { createProdutosRoutes } from './routes/produtosRoutes.js';

const app = express();
app.use(express.json());

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Inicialização das dependências
const produtoRepository = new PrismaProdutoRepository();
const produtosService = new ProdutosService(produtoRepository);
const produtosController = new ProdutosController(produtosService);

// Configuração das rotas
app.use(createProdutosRoutes(produtosController));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});