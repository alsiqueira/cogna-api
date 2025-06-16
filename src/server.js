import express from 'express';
import produtosRoutes from './routes/produtosRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use(produtosRoutes);

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware de tratamento de erro básico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});