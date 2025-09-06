import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '544'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/platform',
    component: ComponentCreator('/blog/tags/platform', '815'),
    exact: true
  },
  {
    path: '/blog/tags/waste-management',
    component: ComponentCreator('/blog/tags/waste-management', '1d5'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', '622'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '7eb'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b90'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9f9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '73d'),
            routes: [
              {
                path: '/docs/api/autenticacion',
                component: ComponentCreator('/docs/api/autenticacion', 'b7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/endpoints',
                component: ComponentCreator('/docs/api/endpoints', '687'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/intro',
                component: ComponentCreator('/docs/api/intro', '352'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/sdk',
                component: ComponentCreator('/docs/api/sdk', '0f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/webhooks',
                component: ComponentCreator('/docs/api/webhooks', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/app-movil/funcionalidades',
                component: ComponentCreator('/docs/app-movil/funcionalidades', 'f61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/app-movil/instalacion',
                component: ComponentCreator('/docs/app-movil/instalacion', '7e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/app-movil/intro',
                component: ComponentCreator('/docs/app-movil/intro', '58c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/app-movil/recoleccion',
                component: ComponentCreator('/docs/app-movil/recoleccion', '950'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/app-movil/tracking',
                component: ComponentCreator('/docs/app-movil/tracking', '422'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/faq',
                component: ComponentCreator('/docs/guides/faq', '312'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/getting-started',
                component: ComponentCreator('/docs/guides/getting-started', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/primeros-pasos',
                component: ComponentCreator('/docs/guides/primeros-pasos', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/troubleshooting',
                component: ComponentCreator('/docs/guides/troubleshooting', '69b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/help/centro-ayuda',
                component: ComponentCreator('/docs/help/centro-ayuda', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/help/contacto',
                component: ComponentCreator('/docs/help/contacto', '640'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/help/estado-sistema',
                component: ComponentCreator('/docs/help/estado-sistema', '09a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-generadores/facturacion',
                component: ComponentCreator('/docs/web-generadores/facturacion', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-generadores/intro',
                component: ComponentCreator('/docs/web-generadores/intro', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-generadores/seguimiento',
                component: ComponentCreator('/docs/web-generadores/seguimiento', 'ce9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-generadores/solicitar-servicio',
                component: ComponentCreator('/docs/web-generadores/solicitar-servicio', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-gestores/dashboard',
                component: ComponentCreator('/docs/web-gestores/dashboard', '984'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-gestores/gestion-operaciones',
                component: ComponentCreator('/docs/web-gestores/gestion-operaciones', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-gestores/intro',
                component: ComponentCreator('/docs/web-gestores/intro', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-gestores/reportes',
                component: ComponentCreator('/docs/web-gestores/reportes', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
