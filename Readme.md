# Blog JS

Este é um projeto de blog simples utilizando Node.js, Express, EJS e Sequelize com MySQL.

## Estrutura do Projeto

- `index.js`: Arquivo principal do servidor Express.
- `database/database.js`: Configuração da conexão com o banco de dados MySQL usando Sequelize.
- `views/index.ejs`: View principal renderizada na rota `/`.
- `public/`: Pasta para arquivos estáticos (CSS, JS, imagens).

## Instalação

1. Clone o repositório.
2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure o banco de dados MySQL conforme as credenciais em [`database/database.js`](database/database.js).

## Uso

Inicie o servidor:

```sh
node index.js
```

Ou, para desenvolvimento com reinicialização automática:

```sh
npx nodemon index.js
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Dependências

- express
- ejs
- body-parser
- sequelize
- mysql2

## Licença

ISC

---

Autor: Mailson