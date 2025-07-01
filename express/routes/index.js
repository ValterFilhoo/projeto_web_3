const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota de usuários
router.get('/usuarios', async (req, res) => {

  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários', detalhes: err.message });
  }

});

module.exports = router;