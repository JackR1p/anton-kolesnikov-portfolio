# Anton Kolesnikov — Developer Portfolio

Personal developer portfolio built with **Vue 3**, **TypeScript**, and **Vite**.

The site presents my professional software development experience, technical skills, and personal projects. It also serves as a practical Vue project for implementing reusable components, routing, state management, internationalization, testing, and automated deployment.

**Live site:** [antonkolesnikov.com](https://antonkolesnikov.com)

---

## Tech Stack

### Frontend

- Vue 3
- TypeScript
- Vue Router
- Pinia
- Vue I18n
- HTML5
- CSS3

### Tooling

- Vite
- ESLint
- Prettier
- Oxlint
- npm

### Testing

- Vitest
- Vue Test Utils
- Cypress

### Hosting & Deployment

- GitHub
- Cloudflare Pages
- Cloudflare DNS

---

## Features

- Responsive portfolio layout
- Multi-page SPA navigation with Vue Router
- English and German localization
- Persistent dark/light theme
- Reusable Vue components
- Type-safe project data with TypeScript
- Dynamic project rendering
- Responsive mobile navigation
- Project showcase with technology tags
- Cloudflare Pages deployment
- Automatic production deployments from GitHub

---

## Architecture

The application is organized by responsibility rather than placing all components into a single directory.

```text
src/
├── assets/
│   └── styles/
│
├── components/
│   ├── home/
│   ├── layout/
│   ├── projects/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   └── skills.ts
│
├── i18n/
│   ├── locales/
│   └── index.ts
│
├── router/
│   └── index.ts
│
├── stores/
│   ├── language.ts
│   └── theme.ts
│
├── types/
│   └── Project.ts
│
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── ProjectsView.vue
│   └── ContactView.vue
│
├── App.vue
└── main.ts
```

### Views

Files inside `views/` represent route-level pages.

For example:

```text
/           → HomeView.vue
/about      → AboutView.vue
/projects   → ProjectsView.vue
/contact    → ContactView.vue
```

### Components

Reusable UI is separated by responsibility.

For example:

```text
components/layout/
```

contains global layout components such as the navigation bar and footer.

```text
components/projects/
```

contains project-specific components such as project cards and technology lists.

```text
components/ui/
```

contains generic reusable UI components.

### Data

Static portfolio information is kept separately from presentation logic.

For example:

```text
data/projects.ts
```

contains the project information that is rendered dynamically by Vue components.

Project data follows a TypeScript interface defined in:

```text
types/Project.ts
```

This keeps the project structure consistent and type-safe.

---

## Routing

The portfolio uses **Vue Router** for client-side navigation.

Vue Router maps URLs to individual page components while keeping the application as a single-page application.

For example:

```text
/projects
```

renders:

```text
ProjectsView.vue
```

inside the application's `RouterView`.

Secondary routes are lazy-loaded so that they are only requested when needed.

---

## State Management

The project uses **Pinia** for shared application state.

Currently, the main global preferences are:

- Color theme
- Selected language

Local component state remains inside the component where possible.

For example, the mobile navigation state is local to the navigation component, while the selected color theme is stored globally because multiple parts of the application can depend on it.

User preferences are persisted with `localStorage`.

---

## Internationalization

The site supports multiple languages using **Vue I18n**.

Translation files are separated by language:

```text
i18n/
└── locales/
    ├── en.ts
    └── de.ts
```

UI components use translation keys rather than hard-coded language-specific text.

The selected language is managed through the application state and persisted between visits.

---

## Styling

The global styles are separated into reusable layers.

```text
assets/styles/
├── variables.css
├── base.css
└── main.css
```

`variables.css` contains shared design values such as:

- colors
- borders
- spacing-related values
- theme variables

Dark and light mode are implemented primarily through CSS custom properties.

This allows components to use variables such as:

```css
var(--color-background)
var(--color-text)
var(--color-primary)
```

without containing separate theme-specific styling logic.

---

## Development

### Requirements

A compatible Node.js version and npm are required.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will start the local development environment, usually at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build with:

```bash
npm run build
```

Vite generates the production files inside:

```text
dist/
```

The production build includes TypeScript validation and optimized frontend assets.

To preview the production build locally:

```bash
npm run preview
```

---

## Code Quality

Run the configured linting tools with:

```bash
npm run lint
```

Format the source code with:

```bash
npm run format
```

The project uses ESLint, Oxlint, and Prettier to maintain consistent code quality and formatting.

---

## Testing

### Unit Tests

Run the Vitest unit tests with:

```bash
npm run test:unit
```

### End-to-End Tests

Run Cypress in development mode with:

```bash
npm run test:e2e:dev
```

For testing against the production build:

```bash
npm run build
npm run test:e2e
```

---

## Deployment

The project is hosted on **Cloudflare Pages**.

Cloudflare Pages is connected directly to the GitHub repository.

The deployment workflow is:

```text
Local development
        ↓
Git commit
        ↓
GitHub
        ↓
Push to main
        ↓
Cloudflare Pages
        ↓
npm install
        ↓
npm run build
        ↓
Production deployment
        ↓
antonkolesnikov.com
```

Every successful push to the production branch automatically triggers a new Cloudflare deployment.

This means production deployments do not require manually uploading generated files.

---

## Purpose

This project serves two purposes:

1. Present my professional experience and software projects in a clear and accessible format.
2. Demonstrate practical use of modern Vue development concepts such as component architecture, TypeScript, routing, state management, localization, testing, and continuous deployment.

---

## Contact

**Anton Kolesnikov**

Full Stack Software Developer

- Website: [antonkolesnikov.com](https://antonkolesnikov.com)
- GitHub: [github.com/JackR1p](https://github.com/JackR1p)

Additional contact information is available through the portfolio website.

---

## License

This repository contains the source code for my personal portfolio website.

The source code may be viewed for reference and educational purposes. Personal information, branding, text, images, and portfolio content are not intended for redistribution without permission.
