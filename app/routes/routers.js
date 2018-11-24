const index = require('./index.router');
const users = require('./user.router');
const filmes = require('./filme.router');

const router = [index, users, filmes];

module.exports = router;