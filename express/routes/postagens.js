const express = require('express');
const router = express.Router();
const db = require('../config/db');
const path = require('path');

router.get('/', async (req, res) => {

  try {

    console.log('Executando query...');

    const [resultado] = await db.query(`
      SELECT postagens.id, usuarios.nome_usuario, postagens.caminho_arquivo, 
            postagens.legenda, postagens.tipo_arquivo, postagens.data_postagem
      FROM postagens, usuarios
      WHERE postagens.usuario_id = usuarios.id
      ORDER BY postagens.data_postagem DESC
    `);

    console.log('Resultado da query:', resultado);
    res.json(resultado);

    } catch (erro) {

      res.status(500).json({ erro: 'Erro ao buscar postagens', detalhe: erro.message });

    };

});

router.get('/:id', async (req, res) => {

  const id = req.params.id;

  try {

    const [resultado] = await db.query(`
      SELECT postagens.id, postagens.usuario_id, postagens.caminho_arquivo, postagens.legenda,
             postagens.tipo_arquivo, postagens.data_postagem, usuarios.nome_usuario
      FROM postagens, usuarios
      WHERE postagens.usuario_id = usuarios.id
        AND postagens.id = ${id}
    `);

    if (resultado.length === 0) {
      return res.status(404).json({ erro: 'Postagem não encontrada' });
    };

    res.json(resultado[0]);

  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar a postagem', detalhe: erro.message });
  };

});


router.post('/', async (req, res) => {

  const usuario_id = req.body.usuario_id;
  const legenda = req.body.legenda;
  const tipo_arquivo = req.body.tipo_arquivo;

  console.log('Dados recebidos para nova postagem:');
  console.log({ usuario_id, legenda, tipo_arquivo });

  if (!req.files || !req.files.arquivo) {
    console.log('Nenhum arquivo foi enviado.');
    return res.status(400).json({ erro: 'Arquivo não enviado' });
  };

  const arquivo = req.files.arquivo;
  const nomeArquivo = Date.now() + '-' + arquivo.name;
  const caminho = path.join(__dirname, '..', 'uploads', nomeArquivo);

  console.log(`Salvando arquivo em: ${caminho}`);

  arquivo.mv(caminho, async (erroArquivo) => {

    if (erroArquivo) {

      console.log('Erro ao salvar o arquivo:', erroArquivo.message);
      return res.status(500).json({ erro: 'Erro ao salvar o arquivo', detalhe: erroArquivo.message });

    };

    try {

      const caminhoRelativo = 'uploads/' + nomeArquivo;
      const sql = `
        INSERT INTO postagens (usuario_id, caminho_arquivo, legenda, tipo_arquivo)
        VALUES (${usuario_id}, '${caminhoRelativo}', '${legenda}', '${tipo_arquivo}')
      `;

      console.log('Executando SQL de inserção:');
      console.log(sql);

      const [resultado] = await db.query(sql);

      console.log(`Postagem criada com sucesso. ID gerado: ${resultado.insertId}`);

      res.status(201).json({
        mensagem: 'Postagem criada com sucesso!',
        id: resultado.insertId,
        arquivo: caminhoRelativo
      });

    } catch (erroSQL) {

      console.log('Erro ao salvar no banco:', erroSQL.message);
      res.status(500).json({ erro: 'Erro ao salvar no banco', detalhe: erroSQL.message });

    };

  });

});

router.put('/:id', async (req, res) => {

  const id = req.params.id;
  const { legenda, tipo_arquivo } = req.body;
  let caminho_arquivo;


  try {

    if (req.files && req.files.arquivo) {

      const arquivo = req.files.arquivo;
      const nomeArquivo = Date.now() + '-' + arquivo.name;
      const destino = path.join(__dirname, '..', 'uploads', nomeArquivo);

      await arquivo.mv(destino);
      caminho_arquivo = 'uploads/' + nomeArquivo;
      console.log('Novo arquivo salvo em:', caminho_arquivo);

    } else if ( typeof req.body.caminho_arquivo === 'string' && req.body.caminho_arquivo.trim() !== '' && req.body.caminho_arquivo !== 'undefined') {

      caminho_arquivo = req.body.caminho_arquivo;
      console.log('Usando caminho existente:', caminho_arquivo);

    };

    const [resultado] = await db.query(`
      UPDATE postagens
      SET legenda = '${legenda}',
          tipo_arquivo = '${tipo_arquivo}',
          caminho_arquivo = '${caminho_arquivo}'
      WHERE id = ${id}
    `);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Postagem não encontrada' });
    };

    res.json({ mensagem: 'Postagem atualizada com sucesso', caminho_arquivo });

  } catch (erro) {

    console.log('Erro ao atualizar a postagem:', erro.message);
    res.status(500).json({
      erro: 'Erro ao atualizar a postagem',
      detalhe: erro.message
    });

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