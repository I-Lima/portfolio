# 📦 IL Studio - Portfólio

🇺🇸 This README is available in English. Para a versão em inglês, acesse:
 
👉 [Read in English](README-en.md)

> Portfólio e plataforma de consultoria técnica moderno, responsivo e bilíngue (PT/EN) para Ingrid Bezerra de Lima — Desenvolvedora Full Stack e Mobile especialista em React, TypeScript, React Native e Micro-Frontends.

---

## 🚀 Demonstração

* 🔗 Link online do projeto: [https://www.il-studio.dev/](https://www.il-studio.dev/)
* 📸 Interface com tema escuro de alto contraste voltado para engenharia, terminal interativo, visualizador dinâmico de micro-frontends e formulário de contato direto.

---

## 📋 Sumário

* [Sobre](#-sobre)
* [Tecnologias](#-tecnologias)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Testes e Verificação](#-testes-e-verificação)
* [Roadmap](#-roadmap)
* [Licença](#-licença)
* [Contato](#-contato)

---

## 📖 Sobre

Este projeto é a plataforma de marca pessoal, portfólio de engenharia e vitrine de consultoria técnica de **Ingrid Bezerra de Lima (IL Studio)**.

* **O problema que o projeto resolve:** Oferece a recrutadores, lideranças técnicas e clientes uma visão aprofundada e interativa sobre experiência full stack e mobile, projetos em produção, certificações internacionais (ISTQB® CTFL) e modelos de consultoria técnica.
* **Público-alvo:** Tech leads, gerentes de engenharia, recrutadores e empresas em busca de sólida competência em ecossistemas React, React Native, arquiteturas escaláveis e garantia de qualidade.
* **Diferenciais do projeto:**
  * **Terminal Interativo CLI:** Interface de linha de comando no navegador com comandos interativos (`help`, `bio`, `skills`, `projects`, `contact`, `clear`).
  * **Visualizador de Micro-Frontends:** Diagrama animado que demonstra composição modular e comunicação dirigida a eventos entre aplicações Host e Remotes.
  * **Suporte Bilíngue Nativo:** Alternância fluida entre Português e Inglês com persistência e tradução consistente.
  * **Disparo Direto de Mensagens:** Integração do formulário com `@emailjs/browser` e fallback resiliente via `mailto:`.
  * **Integração Dinâmica com GitHub:** Exibição de métricas públicas de repositórios e visualizador de README em modal.

---

## 🛠 Tecnologias

Principais tecnologias empregadas:

* **Linguagem:** TypeScript 5.8
* **Framework / Core:** React 19, Vite 6
* **Estilização & Animações:** Tailwind CSS v4, Motion (`motion/react`), ícones Lucide React
* **Internacionalização:** i18next, react-i18next
* **Integrações e Utilitários:** `@emailjs/browser`, `react-markdown`

```bash id="tech-stack-pt"
React 19 • TypeScript • Vite • Tailwind CSS v4 • Motion • EmailJS • i18next
```

---

## 📂 Estrutura do Projeto

```bash id="project-tree-pt"
📦 il-studio-portfolio
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components           # Componentes modulares da interface
 ┃ ┃ ┣ 📜 CertificationSection.tsx
 ┃ ┃ ┣ 📜 ConsultancySection.tsx
 ┃ ┃ ┣ 📜 ContactSection.tsx
 ┃ ┃ ┣ 📜 CurriculumModal.tsx
 ┃ ┃ ┣ 📜 ExperienceSection.tsx
 ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┣ 📜 Hero.tsx
 ┃ ┃ ┣ 📜 InteractiveTerminal.tsx
 ┃ ┃ ┣ 📜 MicroFrontendVisualizer.tsx
 ┃ ┃ ┣ 📜 Navbar.tsx
 ┃ ┃ ┣ 📜 ProjectCard.tsx
 ┃ ┃ ┣ 📜 ProjectReadmeModal.tsx
 ┃ ┃ ┣ 📜 ProjectsSection.tsx
 ┃ ┃ ┗ 📜 SkillsSection.tsx
 ┃ ┣ 📂 data                 # Dados estruturados do portfólio (projetos, bio, consultoria)
 ┃ ┣ 📂 i18n                 # Configuração do i18next e dicionários de tradução
 ┃ ┣ 📂 services             # Serviços de integração (API do GitHub)
 ┃ ┣ 📜 App.tsx              # Componente principal e composição de layouts
 ┃ ┣ 📜 main.tsx             # Ponto de entrada da aplicação
 ┃ ┣ 📜 types.ts             # Modelos de domínio e interfaces TypeScript
 ┃ ┗ 📜 index.css            # Folha de estilos raiz com Tailwind CSS
 ┣ 📜 .env.example           # Modelo de variáveis de ambiente
 ┣ 📜 package.json           # Dependências e scripts de execução
 ┣ 📜 tsconfig.json          # Configurações do compilador TypeScript
 ┣ 📜 vite.config.ts         # Configuração do Vite
 ┗ 📜 README.md              # Documentação principal em inglês
```

---

## 🧪 Testes e Verificação

Para validar a integridade de tipos e regras estáticas do TypeScript:

```bash id="lint-check-pt"
npm run lint
```

---

## 🗺 Roadmap

* [x] Componente de Terminal Interativo CLI
* [x] Diagrama interativo de arquitetura Micro-Frontend
* [x] Suporte bilíngue Português / Inglês
* [x] Envio direto de e-mail via EmailJS com fallback resiliente
* [ ] Seção de artigos técnicos e blog integrado
* [ ] Suporte a PWA com funcionamento offline

---

## 📄 Licença

Distribuído sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📬 Contato

* **Nome:** Ingrid Bezerra de Lima
* **E-mail:** [il.sttudio@gmail.com](mailto:il.sttudio@gmail.com)
* **Website:** [https://www.il-studio.dev/](https://www.il-studio.dev/)
* **LinkedIn:** [https://www.linkedin.com/in/ingridlima-js/](https://www.linkedin.com/in/ingridlima-js/)
* **GitHub:** [https://github.com/I-Lima](https://github.com/I-Lima)
* **Medium:** [https://medium.com/@i-lima](https://medium.com/@i-lima)

---

## ⭐ Apoie o projeto

Se este projeto foi útil ou inspirador, considere deixar uma estrela ⭐ no GitHub!
