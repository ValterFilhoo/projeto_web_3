const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/:id', async (req, res) => {

  const idUsuario = req.params.id;

  try {

    const [usuarioResultado] = await db.query(
      `SELECT id, nome_usuario, biografia FROM usuarios WHERE id = ${idUsuario}`
    );


    if (usuarioResultado.length === 0) {

      return res.status(404).json({ erro: 'Usuário não encontrado' });

    }

    const usuario = usuarioResultado[0];

    const [postagens] = await db.query(
      `SELECT id, caminho_arquivo, legenda FROM postagens WHERE usuario_id = ${idUsuario}  ORDER BY data_postagem DESC`
    );

    res.json({
      id: usuario.id,
      nome: usuario.nome_usuario,
      biografia: usuario.biografia,
      postagens
    });

  } catch (erroExcecao) {

    res.status(500).json({ erro: 'Erro ao buscar o perfil desejado', detalheErro: erroExcecao.message });

  }
  
});

module.exports = router;