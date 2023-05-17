//importações
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();
const db = new sqlite3.Database('banco.db');

// rota.js

//ROTA DO USUARIO
router.get('/jogos/:nome', (req, res) => {
    const nome = req.params.nome.toLowerCase(); // Converte o termo de busca para minúsculas

    db.get('SELECT * FROM jogos WHERE LOWER(nome) = ?', nome, (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar o jogo.');
        } else {
            if (row) {
                const { link } = row;
                res.redirect(link); // Redireciona para a página do jogo
            } else {
                res.status(404).json({ error: 'Jogo não encontrado.' });
            }
        }
    });
});


//ROTAS DO PAINEL ADMINISTRATIVO
// Rota GET para obter todos os jogos
router.get('/jogos', (req, res) => {
    db.all('SELECT * FROM jogos', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar os dados dos jogos.');
        } else {
            res.json(rows);
        }
    });
});

// Rota POST para inserir um novo jogo
router.post('/jogos', (req, res) => {
    const { nome, genero, titulo, imagem, link } = req.body;

    db.run('INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES (?, ?, ?, ?, ?)', [nome, genero, titulo, imagem, link], function (err) {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao inserir o jogo.');
        } else {
            res.send('Jogo inserido com sucesso.');
        }
    });
});

// Rota PUT para atualizar um jogo existente
router.put('/jogos/:id', (req, res) => {
    const id = req.params.id;
    const { nome, genero, titulo, imagem, link } = req.body;

    db.run('UPDATE jogos SET nome = ?, genero = ?, titulo = ?, imagem = ?, link = ? WHERE id = ?', [nome, genero, titulo, imagem, link, id], function (err) {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao atualizar o jogo.');
        } else {
            if (this.changes > 0) {
                res.send('Jogo atualizado com sucesso.');
            } else {
                res.status(404).send('Jogo não encontrado.');
            }
        }
    });
});

// Rota DELETE para excluir um jogo
router.delete('/jogos/:id', (req, res) => {
    const id = req.params.id;

    db.run('DELETE FROM jogos WHERE id = ?', id, function (err) {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao excluir o jogo.');
        } else {
            if (this.changes > 0) {
                res.send('Jogo excluído com sucesso.');
            } else {
                res.status(404).send('Jogo não encontrado.');
            }
        }
    });
});

module.exports = router;
