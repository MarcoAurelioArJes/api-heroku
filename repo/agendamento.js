const query = require('../DB/queries');

class Agendamento {

    cria(id, valores) {
        const insert = `INSERT INTO AGENDAMENTO SET ?;`;
        const agendamento = {id, ...valores};
        return query(insert, agendamento);
    }

    listaAgendamento(id, nome, sobrenome) {
        const select = `SELECT AGD.* FROM AGENDAMENTO AGD
                        INNER JOIN CADASTRO CAD ON AGD.ID = CAD.ID
                        WHERE CAD.ID = ${id} AND CAD.NOME = '${nome}' AND CAD.SOBRENOME = '${sobrenome}';`;

        return query(select);
    }
};

module.exports = new Agendamento();