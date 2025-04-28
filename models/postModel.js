const knex = require('knex')(require('../knexfile').development);

exports.getAll = () => knex('posts').orderBy('created_at', 'desc');
exports.getById = (id) => knex('posts').where({ id }).first();
exports.create = (post) => knex('posts').insert(post);
exports.update = (id, post) => knex('posts').where({ id }).update(post);
exports.delete = (id) => knex('posts').where({ id }).del();
// New method to get latest posts with limit
exports.getLatest = (limit) => knex('posts').orderBy('created_at', 'desc').limit(limit);