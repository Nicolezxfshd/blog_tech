'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Temas', href: '/temas' },
    { name: 'Top Artigos', href: '/top-artigos' },
    { name: 'Contato', href: '/contato' }
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              BlogTech
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="bg-beige text-brown-800 hover:bg-beige-dark px-6 py-3 rounded-md text-lg font-bold transition-all duration-200 border-2 border-beige-border hover:border-beige-border-dark transform hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f5f5dc',
                    color: '#5d4e37',
                    borderColor: '#e6dcc6',
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: '700',
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-3 rounded-md text-lg font-bold transition-all duration-200 border-2 transform hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: '#f5f5dc',
                  color: '#5d4e37',
                  borderColor: '#e6dcc6',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
