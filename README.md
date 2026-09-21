# 📦 IL Studio - Portfolio

🇧🇷 Este README está disponível em português. Para a versão em inglês, acesse abaixo:
 
👉 [Leia em Português](README.pt.md)

> A modern, high-performance, and bilingual (PT/EN) web portfolio and engineering showcase for Ingrid Bezerra de Lima — Full Stack & Mobile Engineer specializing in React, TypeScript, React Native, and Micro-Frontends.

---

## 🚀 Demo

* 🔗 Live demo link: [https://www.il-studio.dev/](https://www.il-studio.dev/)
* 📸 Preview: High-contrast developer-centric dark mode UI with interactive terminal, dynamic micro-frontend visualizer, and integrated direct messaging.

---

## 📋 Table of Contents

* [About](#-about)
* [Technologies](#-technologies)
* [Project Structure](#-project-structure)
* [Tests](#-tests)
* [Roadmap](#-roadmap)
* [License](#-license)
* [Contact](#-contact)

---

## 📖 About

This project is the personal brand showcase, engineering portfolio, and consulting platform for **Ingrid Bezerra de Lima (IL Studio)**.

* **What problem the project solves:** Provides recruiters, engineering managers, and clients with a comprehensive, interactive view of full-stack and mobile expertise, open-source projects, international certifications (ISTQB® CTFL), and technical advisory services.
* **Who the target audience is:** Tech leads, recruiters, hiring managers, and companies seeking high-level expertise in React, React Native, scalable frontend architectures, and quality engineering.
* **What makes it different:**
  * **Interactive Terminal CLI:** In-browser command-line interface supporting custom commands (`help`, `bio`, `skills`, `projects`, `contact`, `clear`).
  * **Micro-Frontend Architecture Visualizer:** Interactive diagram illustrating host-to-remote module composition and event-driven communication.
  * **Seamless Dual Language (i18n):** Instant switching between Portuguese and English across all data and components.
  * **Integrated Email Delivery:** Direct in-browser email dispatch powered by `@emailjs/browser` with seamless `mailto:` fallback.
  * **Dynamic GitHub Integration:** Real-time repository metrics and README modal viewer.

---

## 🛠 Technologies

List of main technologies used:

* **Language:** TypeScript 5.8
* **Framework / Core:** React 19, Vite 6
* **Styling & Animations:** Tailwind CSS v4, Motion (`motion/react`), Lucide React icons
* **Internationalization:** i18next, react-i18next
* **Integrations & Delivery:** `@emailjs/browser`, `react-markdown`

```bash id="tech-stack"
React 19 • TypeScript • Vite • Tailwind CSS v4 • Motion • EmailJS • i18next
```

---

## 📂 Project Structure

```bash id="project-tree"
📦 il-studio-portfolio
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components           # Modular UI & interactive section components
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
 ┃ ┣ 📂 data                 # Structured portfolio records (projects, bio, consultancy)
 ┃ ┣ 📂 i18n                 # i18next configuration and translations
 ┃ ┣ 📂 services             # GitHub API and helper service integrations
 ┃ ┣ 📜 App.tsx              # Main layout and view composition
 ┃ ┣ 📜 main.tsx             # Application entry point
 ┃ ┣ 📜 types.ts             # Domain models, enums, and TypeScript interfaces
 ┃ ┗ 📜 index.css            # Tailwind CSS root stylesheet
 ┣ 📜 .env.example           # Documented environment variable template
 ┣ 📜 package.json           # Dependencies and build scripts
 ┣ 📜 tsconfig.json          # TypeScript compiler configuration
 ┣ 📜 vite.config.ts         # Vite build and plugin setup
 ┗ 📜 README.md              # Project documentation
```

---

## 🧪 Tests

To validate TypeScript strict typing and ensure zero compile errors:

```bash id="lint-check"
npm run lint
```

---

## 🗺 Roadmap

* [x] Interactive Terminal CLI component
* [x] Micro-Frontend architecture interactive visualizer
* [x] Bilingual Portuguese/English translation support
* [x] Direct email transmission via EmailJS with robust fallback
* [ ] Blog / Technical articles reading section
* [ ] PWA offline capability and caching

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

* **Name:** Ingrid Bezerra de Lima
* **Email:** [il.sttudio@gmail.com](mailto:il.sttudio@gmail.com)
* **Website:** [https://www.il-studio.dev/](https://www.il-studio.dev/)
* **LinkedIn:** [https://www.linkedin.com/in/ingridlima-js/](https://www.linkedin.com/in/ingridlima-js/)
* **GitHub:** [https://github.com/I-Lima](https://github.com/I-Lima)
* **Medium:** [https://medium.com/@i-lima](https://medium.com/@i-lima)

---

## ⭐ Support the project

If this project inspired or helped you, consider giving it a star ⭐ on GitHub!
