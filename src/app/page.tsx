import Link from "next/link";
import { Metadata } from "next";
import artigos from "../data/artigos.json";
import { Article } from "./types/article";

export const metadata: Metadata = {
  title: "BlogTech - Artigos sobre Tecnologia e Programação",
  description: "Descubra os melhores artigos sobre desenvolvimento web, programação, frameworks e tecnologias modernas. Conteúdo atualizado para desenvolvedores.",
  keywords: "blog, tecnologia, programação, desenvolvimento web, javascript, react, next.js",
  openGraph: {
    title: "BlogTech - Artigos sobre Tecnologia",
    description: "Os melhores artigos sobre tecnologia e programação",
    type: "website",
  },
};

// Server Component com async data fetching
async function getArtigos(): Promise<Article[]> {
  // Simula uma busca assíncrona (pode ser substituída por API)
  return new Promise((resolve) => {
    setTimeout(() => resolve(artigos), 100);
  });
}

export default async function Home() {
  const artigosData = await getArtigos();

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          BlogTech
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubra os melhores artigos sobre tecnologia, programação e desenvolvimento web
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artigosData.map((artigo) => (
          <article 
            key={artigo.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {artigo.categoria}
                </span>
                <time className="text-sm text-gray-500">
                  {new Date(artigo.data).toLocaleDateString('pt-BR')}
                </time>
              </div>
              
              <Link href={`/artigos/${artigo.slug}`} className="group">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {artigo.titulo}
                </h2>
              </Link>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {artigo.resumo}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="font-medium">{artigo.autor}</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    {artigo.visualizacoes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                    {artigo.likes}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {artigo.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
                {artigo.tags.length > 3 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{artigo.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
