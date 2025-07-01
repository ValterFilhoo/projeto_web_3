const express = require('express');
const router = express.Router();
const db = require('../config/db');
const path = require('path');

// Listar todas as postagens
router.get('/', async (req, res) => {

  try {

    const [resultado] = await db.query(`
      SELECT postagens.id, usuarios.nome_usuario, postagens.caminho_arquivo, postagens.legenda, postagens.tipo_arquivo, postagens.data_postagem
      FROM postagens, usuarios
      WHERE postagens.usuario_id = usuarios.id
      ORDER BY postagens.data_postagem DESC
    `);

    res.json(resultado);

  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar postagens', detalhe: erro.message });
  };

});

// Criar uma nova postagem
router.post('/', async (req, res) => {

  const usuario_id = req.body.usuario_id;
  const legenda = req.body.legenda;
  const tipo_arquivo = req.body.tipo_arquivo;

  if (!req.files || !req.files.arquivo) {
    return res.status(400).json({ erro: 'Arquivo não enviado' });
  }

  const arquivo = req.files.arquivo;
  const nomeArquivo = Date.now() + '-' + arquivo.name;
  const caminho = path.join(__dirname, '..', 'uploads', nomeArquivo);

  arquivo.mv(caminho, async (erroArquivo) => {

    if (erroArquivo) {
      return res.status(500).json({ erro: 'Erro ao salvar o arquivo', detalhe: erroArquivo.message });
    }

    try {

      const caminhoRelativo = 'uploads/' + nomeArquivo;

      const sql = `
        INSERT INTO postagens (usuario_id, caminho_arquivo, legenda, tipo_arquivo)
        VALUES (${usuario_id}, '${caminhoRelativo}', '${legenda}', '${tipo_arquivo}')
      `;

      const [resultado] = await db.query(sql);

      res.status(201).json({
        mensagem: 'Postagem criada com sucesso!',
        id: resultado.insertId,
        arquivo: caminhoRelativo
      });

    } catch (erroSQL) {
      res.status(500).json({ erro: 'Erro ao salvar no banco', detalhe: erroSQL.message });
    };

  });

});

router.put('/:id', async (req, res) => {

  const id = req.params.id;
  const { legenda, tipo_arquivo } = req.body;

  try {

    const [resultado] = await db.query(
      `UPDATE postagens SET legenda = '${legenda}', tipo_arquivo = '${tipo_arquivo}' WHERE id = ${id}`
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Postagem não encontrada' });
    };

    res.json({ mensagem: 'Postagem atualizada com sucesso' });

  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar a postagem', detalhe: erro.message });
  };

});

router.delete('/:id', async (req, res) => {

  const id = req.params.id;

  try {

    const [resultado] = await db.query(
      `DELETE FROM postagens WHERE id = ${id}`
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Postagem não encontrada' });
    };

    res.json({ mensagem: 'Postagem excluída com sucesso' });

  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao excluir a postagem', detalhe: erro.message });
  };

});

module.exports = router;