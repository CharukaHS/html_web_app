const knex = require('knex')(require('../knexfile').development);

exports.findByUsername = (username) => knex('users').where({ username }).first();
exports.createUser = (user) => knex('users').insert(user);
exports.countUsers = () => knex('users').count('id as count').first();