const moment = require('moment');

const connection = require('../DB/connection');
const repo = require('../repo/agendamento');

class Agendamento {
    
    criaAgendamento(id, valores) {

        moment(valores.data, 'DD/MM/YYYY').format('YYYY/MM/DD HH:mm:ss');

        return repo.cria(id, valores);
    };

    listaAgendamento(id, nome, sobrenome) {

        return repo.listaAgendamento(id, nome, sobrenome)
    }
};

module.exports = new Agendamento();