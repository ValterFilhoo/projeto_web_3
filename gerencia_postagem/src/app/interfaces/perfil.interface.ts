export interface Perfil {

  id: number;
  nome: string;
  biografia: string;
  postagens: {
    id: number;
    caminho_arquivo: string;
    legenda: string;
    tipo_arquivo: 'imagem' | 'video'; 
  }[];
  
}