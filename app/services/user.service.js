const userModel = require('../models/user');

function findAll(){
    return new Promise((resolve, reject) => {
        userModel.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`Erro ao buscar os usuários: ${err}`);
        })
    });
}

module.exports = {findAll};