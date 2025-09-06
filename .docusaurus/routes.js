import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gresst-docs/blog',
    component: ComponentCreator('/gresst-docs/blog', '35f'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/archive',
    component: ComponentCreator('/gresst-docs/blog/archive', '373'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/authors',
    component: ComponentCreator('/gresst-docs/blog/authors', '7aa'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/tags',
    component: ComponentCreator('/gresst-docs/blog/tags', 'd7d'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/tags/platform',
    component: ComponentCreator('/gresst-docs/blog/tags/platform', 'ee9'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/tags/waste-management',
    component: ComponentCreator('/gresst-docs/blog/tags/waste-management', '52b'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/tags/welcome',
    component: ComponentCreator('/gresst-docs/blog/tags/welcome', 'cf7'),
    exact: true
  },
  {
    path: '/gresst-docs/blog/welcome',
    component: ComponentCreator('/gresst-docs/blog/welcome', '25c'),
    exact: true
  },
  {
    path: '/gresst-docs/search',
    component: ComponentCreator('/gresst-docs/search', 'ee6'),
    exact: true
  },
  {
    path: '/gresst-docs/docs',
    component: ComponentCreator('/gresst-docs/docs', 'ad2'),
    routes: [
      {
        path: '/gresst-docs/docs',
        component: ComponentCreator('/gresst-docs/docs', 'a36'),
        routes: [
          {
            path: '/gresst-docs/docs',
            component: ComponentCreator('/gresst-docs/docs', '2d1'),
            routes: [
              {
                path: '/gresst-docs/docs/api/autenticacion',
                component: ComponentCreator('/gresst-docs/docs/api/autenticacion', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/api/endpoints',
                component: ComponentCreator('/gresst-docs/docs/api/endpoints', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/api/intro',
                component: ComponentCreator('/gresst-docs/docs/api/intro', '907'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/api/sdk',
                component: ComponentCreator('/gresst-docs/docs/api/sdk', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/api/webhooks',
                component: ComponentCreator('/gresst-docs/docs/api/webhooks', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/app-movil/funcionalidades',
                component: ComponentCreator('/gresst-docs/docs/app-movil/funcionalidades', '507'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/app-movil/instalacion',
                component: ComponentCreator('/gresst-docs/docs/app-movil/instalacion', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/app-movil/intro',
                component: ComponentCreator('/gresst-docs/docs/app-movil/intro', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/app-movil/recoleccion',
                component: ComponentCreator('/gresst-docs/docs/app-movil/recoleccion', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/app-movil/tracking',
                component: ComponentCreator('/gresst-docs/docs/app-movil/tracking', '2e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/guides/faq',
                component: ComponentCreator('/gresst-docs/docs/guides/faq', '82c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/guides/getting-started',
                component: ComponentCreator('/gresst-docs/docs/guides/getting-started', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/guides/primeros-pasos',
                component: ComponentCreator('/gresst-docs/docs/guides/primeros-pasos', '55b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/guides/troubleshooting',
                component: ComponentCreator('/gresst-docs/docs/guides/troubleshooting', 'f47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/help/centro-ayuda',
                component: ComponentCreator('/gresst-docs/docs/help/centro-ayuda', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/help/contacto',
                component: ComponentCreator('/gresst-docs/docs/help/contacto', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/help/estado-sistema',
                component: ComponentCreator('/gresst-docs/docs/help/estado-sistema', '4a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/intro',
                component: ComponentCreator('/gresst-docs/docs/intro', 'd87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-generadores/facturacion',
                component: ComponentCreator('/gresst-docs/docs/web-generadores/facturacion', 'a10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-generadores/intro',
                component: ComponentCreator('/gresst-docs/docs/web-generadores/intro', 'ca6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-generadores/seguimiento',
                component: ComponentCreator('/gresst-docs/docs/web-generadores/seguimiento', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-generadores/solicitar-servicio',
                component: ComponentCreator('/gresst-docs/docs/web-generadores/solicitar-servicio', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-gestores/dashboard',
                component: ComponentCreator('/gresst-docs/docs/web-gestores/dashboard', '26a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-gestores/gestion-operaciones',
                component: ComponentCreator('/gresst-docs/docs/web-gestores/gestion-operaciones', '83d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-gestores/intro',
                component: ComponentCreator('/gresst-docs/docs/web-gestores/intro', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gresst-docs/docs/web-gestores/reportes',
                component: ComponentCreator('/gresst-docs/docs/web-gestores/reportes', '12b'),
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
    path: '/gresst-docs/',
    component: ComponentCreator('/gresst-docs/', 'b51'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
