const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const db = require('./create/create');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rota para o ping
app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
});

// Roteamento
const rota = require('./rotas');
app.use('/', rota);

// Fechar a conexão com o banco de dados ao final do servidor
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Conexão com o banco de dados fechada.');
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});
