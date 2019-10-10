require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: '5434',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
