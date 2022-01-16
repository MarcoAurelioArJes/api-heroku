const Agendamento = require('../models/agendamento');

module.exports = app => {
    app.post('/cria-agendamento/:nomeusuario-:id', (req, res) => {
        const id = req.params.id;
        const agendamento = req.body;

        Agendamento.criaAgendamento(id, agendamento)
        .then(results => res.json(results))
        .catch(error => res.json(error))
    });

    app.get('/user/agendamentos/:nomeusuario-:sobrenome-:id', (req, res) => {
        const id = Number(req.params.id);
        const nomeusuario = req.params.nomeusuario;
        const sobrenome = req.params.sobrenome;

        Agendamento.listaAgendamento(id, nomeusuario, sobrenome)
            .then(results => {
                if (results.length > 0) {
                    res.status(200).json(results[0])
                } else {
                    res.status(400).json({msg: 'Sem agendamentos cadastrados'})
                }
            })
            .catch(error => res.status(400).json(error))
    });
};  