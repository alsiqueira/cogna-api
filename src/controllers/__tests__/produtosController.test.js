
import { getProdutos, getProdutoById } from '../produtosController.js';
import { jest } from '@jest/globals';

describe('produtosController', () => {
  test('getProdutos deve retornar JSON com lista de produtos', () => {
    const req = {};
    const jsonMock = jest.fn();
    const res = { json: jsonMock };

    getProdutos(req, res);

    expect(jsonMock).toHaveBeenCalled();
    const data = jsonMock.mock.calls[0][0];
    expect(Array.isArray(data)).toBe(true);
  });

  test('getProdutoById deve retornar 400 para id inválido', () => {
    const req = { params: { id: 'abc' } };
    const statusMock = jest.fn(() => ({ json: jest.fn() }));
    const res = { status: statusMock };

    getProdutoById(req, res);

    expect(statusMock).toHaveBeenCalledWith(400);
  });

  test('getProdutoById deve retornar 404 para produto não encontrado', () => {
    const req = { params: { id: '999' } };
    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));
    const res = { status: statusMock };

    getProdutoById(req, res);

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Produto não encontrado' });
  });

  test('getProdutoById deve retornar produto válido', () => {
    const req = { params: { id: '1' } };
    const jsonMock = jest.fn();
    const res = { json: jsonMock };

    getProdutoById(req, res);

    expect(jsonMock).toHaveBeenCalledWith({ id: 1, nome: 'Produto A', preco: 100 });
  });
});