import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plataforma de Gestión de Residuos',
  tagline: 'Solución integral para la gestión eficiente de residuos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://EdissonFonseca.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/gresst-docs/',

  // GitHub pages deployment config.
  organizationName: 'EdissonFonseca',
  projectName: 'gresst-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {
        label: 'Español',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Config} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/waste-management/waste-management-platform-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/waste-management/waste-management-platform-docs/tree/main/',
          authorsMapPath: 'authors.yml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/waste-management-social-card.jpg',
      navbar: {
        title: 'Gestión de Residuos',
        logo: {
          alt: 'Waste Management Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Aplicaciones',
            position: 'left',
            items: [
              {
                label: 'App Móvil - Recolección',
                to: '/docs/app-movil/intro',
              },
              {
                label: 'Web - Gestores',
                to: '/docs/web-gestores/intro',
              },
              {
                label: 'Web - Generadores',
                to: '/docs/web-generadores/intro',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/waste-management/waste-management-platform',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/api/intro',
              },
              {
                label: 'Guías de Usuario',
                to: '/docs/guides/getting-started',
              },
            ],
          },
          {
            title: 'Aplicaciones',
            items: [
              {
                label: 'App Móvil',
                to: '/docs/app-movil/intro',
              },
              {
                label: 'Web Gestores',
                to: '/docs/web-gestores/intro',
              },
              {
                label: 'Web Generadores',
                to: '/docs/web-generadores/intro',
              },
            ],
          },
          {
            title: 'Soporte',
            items: [
              {
                label: 'Centro de Ayuda',
                to: '/docs/help/centro-ayuda',
              },
              {
                label: 'Contacto',
                to: '/docs/help/contacto',
              },
              {
                label: 'Estado del Sistema',
                href: 'https://status.waste-management-platform.com',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/waste-management/waste-management-platform',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plataforma de Gestión de Residuos. Construido con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json', 'bash', 'yaml'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'waste-management-docs',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `replace` method.
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

export default config;
