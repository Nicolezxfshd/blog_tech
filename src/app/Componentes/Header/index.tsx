"use client";
import { useState } from 'react';

export default function Header() {
  const [opcao, setOpcao] = useState("home");
  return (
    <header>
      <nav>
        <button aria-current={opcao === "home" ? "page" : undefined} onClick={() => setOpcao("home")}>Início</button>
        <button aria-current={opcao === "temas" ? "page" : undefined} onClick={() => setOpcao("temas")}>Temas</button>
        <button aria-current={opcao === "top" ? "page" : undefined} onClick={() => setOpcao("top")}>Top Artigos</button>
        <button aria-current={opcao === "contato" ? "page" : undefined} onClick={() => setOpcao("contato")}>Contato</button>
        <span className="sr-only">Opção ativa: {opcao}</span>
      </nav>
    </header>
  );
}