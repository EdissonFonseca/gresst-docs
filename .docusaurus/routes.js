import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'c88'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/platform',
    component: ComponentCreator('/en/blog/tags/platform', 'b35'),
    exact: true
  },
  {
    path: '/en/blog/tags/waste-management',
    component: ComponentCreator('/en/blog/tags/waste-management', '16d'),
    exact: true
  },
  {
    path: '/en/blog/tags/welcome',
    component: ComponentCreator('/en/blog/tags/welcome', 'b7e'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '597'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '5d6'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '6bd'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '8f3'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'f2a'),
            routes: [
              {
                path: '/en/docs/api/autenticacion',
                component: ComponentCreator('/en/docs/api/autenticacion', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/api/endpoints',
                component: ComponentCreator('/en/docs/api/endpoints', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/api/intro',
                component: ComponentCreator('/en/docs/api/intro', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/api/sdk',
                component: ComponentCreator('/en/docs/api/sdk', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/api/webhooks',
                component: ComponentCreator('/en/docs/api/webhooks', '97d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/app-movil/funcionalidades',
                component: ComponentCreator('/en/docs/app-movil/funcionalidades', '948'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/app-movil/instalacion',
                component: ComponentCreator('/en/docs/app-movil/instalacion', '958'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/app-movil/intro',
                component: ComponentCreator('/en/docs/app-movil/intro', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/app-movil/recoleccion',
                component: ComponentCreator('/en/docs/app-movil/recoleccion', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/app-movil/tracking',
                component: ComponentCreator('/en/docs/app-movil/tracking', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/guides/faq',
                component: ComponentCreator('/en/docs/guides/faq', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/guides/getting-started',
                component: ComponentCreator('/en/docs/guides/getting-started', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/guides/primeros-pasos',
                component: ComponentCreator('/en/docs/guides/primeros-pasos', 'f00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/guides/troubleshooting',
                component: ComponentCreator('/en/docs/guides/troubleshooting', '568'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/help/centro-ayuda',
                component: ComponentCreator('/en/docs/help/centro-ayuda', '5f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/help/contacto',
                component: ComponentCreator('/en/docs/help/contacto', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/help/estado-sistema',
                component: ComponentCreator('/en/docs/help/estado-sistema', 'b8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-generadores/facturacion',
                component: ComponentCreator('/en/docs/web-generadores/facturacion', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-generadores/intro',
                component: ComponentCreator('/en/docs/web-generadores/intro', '82a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-generadores/seguimiento',
                component: ComponentCreator('/en/docs/web-generadores/seguimiento', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-generadores/solicitar-servicio',
                component: ComponentCreator('/en/docs/web-generadores/solicitar-servicio', '51a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-gestores/dashboard',
                component: ComponentCreator('/en/docs/web-gestores/dashboard', 'c68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-gestores/gestion-operaciones',
                component: ComponentCreator('/en/docs/web-gestores/gestion-operaciones', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-gestores/intro',
                component: ComponentCreator('/en/docs/web-gestores/intro', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/web-gestores/reportes',
                component: ComponentCreator('/en/docs/web-gestores/reportes', 'e82'),
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
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
