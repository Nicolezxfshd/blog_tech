'use client';

import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio do formulário
    setTimeout(() => {
      setEnviado(true);
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Entre em Contato
        </h1>
        <p className="text-xl text-gray-600">
          Tem alguma dúvida, sugestão ou quer colaborar? Adoraríamos ouvir você!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulário */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
          
          {enviado ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Mensagem enviada com sucesso! Responderemos em breve.
              </div>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                Assunto *
              </label>
              <select
                id="assunto"
                name="assunto"
                required
                value={formData.assunto}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione um assunto</option>
                <option value="duvida">Dúvida Técnica</option>
                <option value="sugestao">Sugestão de Artigo</option>
                <option value="colaboracao">Colaboração</option>
                <option value="feedback">Feedback</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={6}
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Outras Formas de Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-gray-700">contato@blogtech.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">São Paulo, SP - Brasil</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Redes Sociais</h3>
            <p className="text-gray-600 mb-4">
              Siga-nos nas redes sociais para ficar por dentro das novidades!
            </p>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border">
                <span className="text-gray-700 font-medium">Instagram: @blogtechartigos</span>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <span className="text-gray-700 font-medium">Twitter: @blogtechartigos</span>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <span className="text-gray-700 font-medium">LinkedIn: @blogtechartigos</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ Rápido</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-900">Posso sugerir temas para artigos?</p>
                <p className="text-gray-600">Sim! Adoramos receber sugestões da comunidade.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Vocês aceitam artigos de convidados?</p>
                <p className="text-gray-600">Sim, entre em contato para discutir colaborações.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Quanto tempo para resposta?</p>
                <p className="text-gray-600">Respondemos em até 48 horas úteis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
