module.exports = {
  dialect: 'postgres',
  username: 'postgres',
  password: 'docker',
  host: '192.168.99.100',
  database: 'meetapp',
  port: '5434',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
