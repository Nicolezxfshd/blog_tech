import Link from "next/link";
import { Metadata } from "next";
import artigos from "../../data/artigos.json";

export const metadata: Metadata = {
  title: "Temas - BlogTech",
  description: "Explore artigos organizados por categorias e temas de tecnologia",
};

export default function TemasPage() {
  // Agrupar artigos por categoria
  const categorias = artigos.reduce((acc, artigo) => {
    if (!acc[artigo.categoria]) {
      acc[artigo.categoria] = [];
    }
    acc[artigo.categoria].push(artigo);
    return acc;
  }, {} as Record<string, typeof artigos>);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Temas e Categorias
        </h1>
        <p className="text-xl text-gray-600">
          Explore nossos artigos organizados por área de conhecimento
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(categorias).map(([categoria, artigosCategoria]) => (
          <div key={categoria} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{categoria}</h2>
              <p className="text-gray-600">{artigosCategoria.length} artigos disponíveis</p>
            </div>
            
            <div className="space-y-3 mb-6">
              {artigosCategoria.slice(0, 3).map((artigo) => (
                <Link 
                  key={artigo.id}
                  href={`/artigos/${artigo.slug}`}
                  className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {artigo.titulo}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {artigo.autor} • {artigo.visualizacoes.toLocaleString()} views
                  </p>
                </Link>
              ))}
            </div>

            {artigosCategoria.length > 3 && (
              <p className="text-sm text-gray-500 text-center">
                +{artigosCategoria.length - 3} artigos adicionais
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Seção de tags populares */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Tags Populares
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {Array.from(new Set(artigos.flatMap(artigo => artigo.tags))).map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
