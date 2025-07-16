export interface Postagem {

  id: number;
  usuario_id: number;
  nome_usuario: string;
  caminho_arquivo: string;
  legenda: string;
  tipo_arquivo: 'imagem' | 'video';
  data_postagem: string;

}

export interface NovaPostagem {

  usuario_id: number;
  legenda: string;
  tipo_arquivo: 'imagem' | 'video';
  arquivo: File;

}

export interface AtualizacaoPostagem {

  legenda: string;
  tipo_arquivo: 'imagem' | 'video';
  caminho_arquivo: string;

}

export interface PostagemPerfil {

  id: number;
  caminho_arquivo: string;
  legenda: string;
  tipo_arquivo: 'imagem' | 'video'; 
  
}