const Cadastramento = require('../models/cadastro');

module.exports = app => {

/*     const infos = {
        dados: {
            "msg": "Email ou senha invalidos"
        },
        msg: {
            "msg": "Email ou senha invalidos"
        },
        erro: {
            "msg": "Email ou senha invalidos"
        }
    }
 */
    app.post('/cadastro', (req, res) => {
        const cadastro = req.body;

        Cadastramento.criaCadastro(cadastro, res)
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).json(error))
    });

    app.post('/users/login', (req, res) => {
        const email = req.body.email;
        const senha = req.body.senha;

        console.log('rew')
        Cadastramento.login(email, senha)
        .then(results => {
            if (results.length > 0) {
                res.redirect(`/user/agendamentos/${results[0].NOME}-${results[0].SOBRENOME}-${results[0].ID}`);
            } else {
                res.status(400).json({msg : 'Email ou senha invalidos'})
            }
        })
        .catch(error => res.status(400).json(error))
    });
};