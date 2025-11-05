export interface Article {
  id: number;
  titulo: string;
  slug: string;
  autor: string;
  data: string;
  categoria: string;
  visualizacoes: number;
  likes: number;
  resumo: string;
  imagem: string;
  tags: string[];
  conteudo: string;
}
