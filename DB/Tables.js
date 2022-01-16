
class Tables {
    init(connection) {
        this.connection = connection;

        this.tCadastro();
        this.tAgendamento();
    };

    tCadastro() {
        const query = `
                        CREATE TABLE IF NOT EXISTS CADASTRO (
                            ID INT AUTO_INCREMENT,
                            NOME VARCHAR(100) NOT NULL,
                            SOBRENOME VARCHAR(100) NOT NULL,
                            CPF VARCHAR(14) UNIQUE KEY,
                            IDADE INT NOT NULL,
                            SEXO INT NOT NULL,
                            EMAIL VARCHAR(50) NOT NULL UNIQUE KEY,
                            SENHA VARCHAR(10) NOT NULL,
                            PRIMARY KEY (ID, CPF)
                        );`;
        
        this.connection.query(query, error => {
            if (error) {
                console.log(error);
            } else {
                console.log('Tabela de cadastro criada com sucesso');
            }
        });
    }

    tAgendamento() {
        const sql = `CREATE TABLE IF NOT EXISTS AGENDAMENTO (
                            ID INT UNIQUE KEY,
                            LOCAL VARCHAR(300) NOT NULL,
                            DATA DATETIME NOT NULL,
                            HORA TIME NOT NULL,
                            DATAATUAL DATETIME,
                            PRIMARY KEY (ID, LOCAL, DATA, HORA),
                            FOREIGN KEY (ID) REFERENCES CADASTRO(ID)
                    );`;
        
        this.connection.query(sql, error => {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela agendamento criada com sucesso");
            }
        });
    }
};

module.exports = new Tables();