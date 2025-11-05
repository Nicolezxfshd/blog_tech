import Link from "next/link";
import { Metadata } from "next";
import artigos from "../../data/artigos.json";

export const metadata: Metadata = {
  title: "Top Artigos - BlogTech",
  description: "Os artigos mais populares e bem avaliados do BlogTech",
};

export default function TopArtigosPage() {
  // Ordenar artigos por visualizações e likes
  const artigosPorVisualizacoes = [...artigos].sort((a, b) => b.visualizacoes - a.visualizacoes);
  const artigosPorLikes = [...artigos].sort((a, b) => b.likes - a.likes);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Top Artigos
        </h1>
        <p className="text-xl text-gray-600">
          Os conteúdos mais populares e bem avaliados da nossa comunidade
        </p>
      </header>

      {/* Mais Visualizados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
          Mais Visualizados
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artigosPorVisualizacoes.map((artigo, index) => (
            <article key={artigo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                    #{index + 1}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    {artigo.visualizacoes.toLocaleString()}
                  </span>
                </div>
                
                <Link href={`/artigos/${artigo.slug}`} className="group">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {artigo.titulo}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {artigo.resumo}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{artigo.autor}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {artigo.categoria}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mais Curtidos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
          </svg>
          Mais Curtidos
        </h2>
        
        <div className="space-y-4">
          {artigosPorLikes.map((artigo, index) => (
            <div key={artigo.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="bg-red-100 text-red-800 px-3 py-2 rounded-full text-lg font-bold">
                    #{index + 1}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <Link href={`/artigos/${artigo.slug}`} className="group">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {artigo.titulo}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {artigo.resumo}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>{artigo.autor}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                      {artigo.likes} likes
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      {artigo.visualizacoes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estatísticas */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Estatísticas do Blog
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">
              {artigos.length}
            </div>
            <div className="text-gray-600">Artigos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">
              {artigos.reduce((sum, artigo) => sum + artigo.visualizacoes, 0).toLocaleString()}
            </div>
            <div className="text-gray-600">Visualizações</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">
              {artigos.reduce((sum, artigo) => sum + artigo.likes, 0)}
            </div>
            <div className="text-gray-600">Likes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">
              {new Set(artigos.map(artigo => artigo.categoria)).size}
            </div>
            <div className="text-gray-600">Categorias</div>
          </div>
        </div>
      </section>
    </main>
  );
}
