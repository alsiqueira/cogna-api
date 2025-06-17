# Vitrine Cogna Backend

Este é o backend da aplicação Vitrine Cogna, desenvolvido em Node.js com Express, Prisma e PostgreSQL.

## 🚀 Tecnologias

- **Node.js**
- **Express**
- **Prisma**
- **PostgreSQL**
- **Jest** (para testes)
- **Docker**
- **Faker.js** (para dados de teste)

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- Docker e Docker Compose
- PostgreSQL (ou use o Docker)

## 🔧 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/vitrine-cogna.git
   cd vitrine-cogna/backend
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```
     DATABASE_URL=postgresql://postgres:postgres@localhost:5432/vitrine_cogna
     ```

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. (Opcional) Execute o seed para popular o banco de dados:
   ```bash
   npx prisma db seed
   ```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento

```bash
yarn dev
```

### Produção

```bash
yarn start
```

### Docker

```bash
# Iniciar os containers
docker compose up --build
```

> **Nota:** Ao executar com Docker, as migrações e o seed são executados automaticamente durante a inicialização do container.

## 🧪 Testes

- **Testes Unitários:**

  ```bash
  yarn test:unit
  ```

- **Todos os Testes:**
  ```bash
  yarn test
  ```

## 📝 Estrutura do Projeto

```
backend/
├── src/
│   ├── controllers/
│   │   └── produtosController.js
│   ├── services/
│   │   └── produtosService.js
│   ├── repositories/
│   │   └── produtosRepository.js
│   ├── routes/
│   │   └── produtosRoutes.js
│   ├── __tests__/
│   │   └── unit/
│   │       ├── setup.js
│   │       └── produtosService.test.js
│   └── server.js
├── prisma/
│   ├── schema.prisma
│   └── seed.js
├── .docker/
│   └── docker-entrypoint.sh
├── .env
├── .env.test
├── jest.config.js
├── jest.unit.config.js
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 📦 Dependências Principais

- **@prisma/client**: ORM para interação com o banco de dados
- **express**: Framework web
- **cors**: Middleware para CORS
- **@faker-js/faker**: Geração de dados fake para testes
- **jest**: Framework de testes
- **supertest**: Biblioteca para testes de API

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
