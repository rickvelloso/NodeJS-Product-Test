const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('***', '***', '***', {
  host: '***',
  dialect: 'postgres',
});

module.exports = sequelize;
