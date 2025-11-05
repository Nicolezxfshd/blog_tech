import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import artigos from '../../../data/artigos.json';
import { Article } from '../../types/article';

interface PageProps {
  params: {
    slug: string;
  };
}

// Função para buscar artigo por slug
async function getArtigoBySlug(slug: string): Promise<Article | null> {
  const artigo = artigos.find((article) => article.slug === slug);
  return artigo || null;
}

// Gerar metadados dinâmicos para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const artigo = await getArtigoBySlug(params.slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado - BlogTech',
      description: 'O artigo solicitado não foi encontrado.',
    };
  }

  return {
    title: `${artigo.titulo} - BlogTech`,
    description: artigo.resumo,
    keywords: artigo.tags.join(', '),
    authors: [{ name: artigo.autor }],
    openGraph: {
      title: artigo.titulo,
      description: artigo.resumo,
      type: 'article',
      publishedTime: artigo.data,
      authors: [artigo.autor],
      tags: artigo.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: artigo.titulo,
      description: artigo.resumo,
    },
  };
}

// Gerar parâmetros estáticos para SSG
export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

// Componente da página do artigo
export default async function ArtigoPage({ params }: PageProps) {
  const artigo = await getArtigoBySlug(params.slug);

  if (!artigo) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-8">
      {/* Título do artigo */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {artigo.titulo}
      </h1>
      
      {/* Autor */}
      <p className="text-xl text-gray-600 mb-6">
        Por {artigo.autor}
      </p>

      {/* Descrição/Resumo */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {artigo.resumo}
      </p>

      {/* Botão não funcional */}
      <div className="mb-8">
        <button 
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-not-allowed opacity-75"
          disabled
        >
          Acesse o artigo todo
        </button>
      </div>

      {/* Navegação */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
          </svg>
          Voltar para o blog
        </a>
      </footer>
    </article>
  );
}