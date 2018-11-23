const model = require('../models/user');
// const model = require('../models/index');

function findUsers(){
    return new Promise((resolve, reject) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`Erro ao buscar os usuários: ${err}`);
            reject(err);
        })
    });
}

module.exports = {findUsers};