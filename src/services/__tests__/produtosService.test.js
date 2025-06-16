
import { listarProdutos, obterProdutoPorId } from '../produtosService.js';

describe('produtosService', () => {
  test('listarProdutos deve retornar array com produtos', () => {
    const produtos = listarProdutos();
    expect(Array.isArray(produtos)).toBe(true);
    expect(produtos.length).toBeGreaterThan(0);
  });

  test('obterProdutoPorId deve retornar produto correto', () => {
    const produto = obterProdutoPorId(1);
    expect(produto).toEqual({ id: 1, nome: 'Produto A', preco: 100 });
  });

  test('obterProdutoPorId deve retornar undefined para id inválido', () => {
    const produto = obterProdutoPorId(999);
    expect(produto).toBeUndefined();
  });
});