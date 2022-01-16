const query = require('../DB/queries');

class Cadastrar {

    cria(cadastro) {
        const insereCadastro = `INSERT INTO CADASTRO SET ?`;

        return query(insereCadastro, cadastro);
    }

    verificaLogin(login) {
        const verificaLogin = `SELECT ID, NOME, SOBRENOME, EMAIL, SENHA FROM CADASTRO
                                WHERE CADASTRO.EMAIL = '${login.email}' AND 
                                CADASTRO.SENHA = '${login.senha}'`;

        return query(verificaLogin);
    }
};

module.exports = new Cadastrar();