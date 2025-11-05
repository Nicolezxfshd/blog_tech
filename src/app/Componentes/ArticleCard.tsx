import Link from 'next/link';
import { Article } from '../types/article';

interface ArticleCardProps {
  article: Article;
  rank?: number;
}

export default function ArticleCard({ article, rank }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-20">
            {rank || article.id}
          </div>
        </div>
        {rank && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            #{rank}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {article.categoria}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {article.visualizacoes.toLocaleString()}
          </div>
        </div>
        
        <Link href={`/artigos/${article.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
            {article.titulo}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.resumo}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{article.autor}</span>
            <span className="mx-1">•</span>
            <span>{new Date(article.data).toLocaleDateString('pt-BR')}</span>
          </div>
          
          <div className="flex items-center text-red-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {article.likes}
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
