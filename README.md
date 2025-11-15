# Projeto Front-End com CI/CD (GitHub Pages)

Este projeto foi desenvolvido com foco em demonstrar uma pipeline completa de **CI/CD utilizando GitHub Actions**, incluindo:

- Integração Contínua (**CI**)
- Testes automatizados
- Build da aplicação
- Export estático (**Next.js Export**)
- Deploy Contínuo (**CD**) no GitHub Pages a cada push na branch `main`

O objetivo é entregar uma aplicação funcional, organizada e publicada automaticamente.

---

## 🚀 Tecnologias Utilizadas

- **Next.js**  
- **React**  
- **Node.js**  
- **GitHub Actions (CI/CD)**  
- **GitHub Pages (deploy)**  
- **ESLint**  

---
Pipeline de CI/CD – GitHub Actions

A pipeline executa automaticamente a cada push na branch main:
Checkout do código
Instalação das dependências (npm install)
Verificação do código com ESLint (npm run lint)
Execução dos testes (npm test)
Build da aplicação (npm run build)
Exportação estática (npm run export)
Deploy da pasta /out no GitHub Pages

O workflow está localizado em: .github/workflows/ci-cd.yml

## 🔧 Como rodar localmente

Clone o repositório:

```bash
git clone blog-tech-tawny.vercel.app


