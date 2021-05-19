const Sequence = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const connection = new Sequence(dbConfig);

User.init(connection);

module.exports = connection;
