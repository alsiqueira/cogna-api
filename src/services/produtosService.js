const produtos = [
  { id: 1, nome: 'Produto A', preco: 100 },
  { id: 2, nome: 'Produto B', preco: 200 },
  { id: 3, nome: 'Produto C', preco: 300 },
];

export const listarProdutos = () => {
  return produtos;
};

export const obterProdutoPorId = (id) => {
  return produtos.find(p => p.id === id);
};
