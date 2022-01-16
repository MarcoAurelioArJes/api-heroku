const repo = require('../repo/cadastro');

class Cadastramento {

    criaCadastro(cadastro) {

        return repo.cria(cadastro);
    };

    login(email, senha) {
        const login = { email, senha }
        
        return repo.verificaLogin(login);
    };
};

module.exports = new Cadastramento();