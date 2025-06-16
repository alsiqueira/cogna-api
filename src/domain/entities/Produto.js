export class Produto {
  constructor({ id, nome, descricao, valor, foto }) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.foto = foto;
  }

  static fromPrisma(prismaProduto) {
    return new Produto({
      id: prismaProduto.id,
      nome: prismaProduto.nome,
      descricao: prismaProduto.descricao,
      valor: prismaProduto.valor,
      foto: prismaProduto.foto
    });
  }
} 