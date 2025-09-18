// db.js
const { Sequelize } = require('sequelize');

const connection = new Sequelize('blog', 'root', '123456', {
  host: 'localhost',
  port: 3306,          // porta padrão do MySQL
  dialect: 'mysql',
  logging: false,      // opcional
  pool: { max: 10, min: 0, idle: 10000 },
  dialectOptions: {
    // útil se precisar tratar DATETIME como string e não Date:
    // dateStrings: true,
    // typeCast: true,
  },
  timezone: '+00:00',  // ajuste se quiser salvar como UTC
  define: {
    // charset/collation padrão das tabelas:
    // charset: 'utf8mb4',
    // collate: 'utf8mb4_unicode_ci',
    // underscored: true, // se quiser snake_case em colunas
    // timestamps: true,  // createdAt/updatedAt
  }
});

module.exports = connection;
