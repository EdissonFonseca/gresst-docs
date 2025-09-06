import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/waste-management-platform-docs/__docusaurus/debug',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug', 'c03'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/__docusaurus/debug/config',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug/config', 'fac'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/__docusaurus/debug/content',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug/content', 'f03'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug/globalData', 'd48'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug/metadata', 'd5a'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug/registry', '1ca'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/waste-management-platform-docs/__docusaurus/debug/routes', 'e29'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog',
    component: ComponentCreator('/waste-management-platform-docs/blog', 'dbb'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/archive',
    component: ComponentCreator('/waste-management-platform-docs/blog/archive', '850'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/authors',
    component: ComponentCreator('/waste-management-platform-docs/blog/authors', '9e8'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/tags',
    component: ComponentCreator('/waste-management-platform-docs/blog/tags', '628'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/tags/platform',
    component: ComponentCreator('/waste-management-platform-docs/blog/tags/platform', 'd4b'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/tags/waste-management',
    component: ComponentCreator('/waste-management-platform-docs/blog/tags/waste-management', '6bc'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/tags/welcome',
    component: ComponentCreator('/waste-management-platform-docs/blog/tags/welcome', '6d1'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/blog/welcome',
    component: ComponentCreator('/waste-management-platform-docs/blog/welcome', '4a0'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/search',
    component: ComponentCreator('/waste-management-platform-docs/search', 'cad'),
    exact: true
  },
  {
    path: '/waste-management-platform-docs/docs',
    component: ComponentCreator('/waste-management-platform-docs/docs', 'be0'),
    routes: [
      {
        path: '/waste-management-platform-docs/docs',
        component: ComponentCreator('/waste-management-platform-docs/docs', 'b66'),
        routes: [
          {
            path: '/waste-management-platform-docs/docs',
            component: ComponentCreator('/waste-management-platform-docs/docs', '461'),
            routes: [
              {
                path: '/waste-management-platform-docs/docs/api/autenticacion',
                component: ComponentCreator('/waste-management-platform-docs/docs/api/autenticacion', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/api/endpoints',
                component: ComponentCreator('/waste-management-platform-docs/docs/api/endpoints', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/api/intro',
                component: ComponentCreator('/waste-management-platform-docs/docs/api/intro', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/api/sdk',
                component: ComponentCreator('/waste-management-platform-docs/docs/api/sdk', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/api/webhooks',
                component: ComponentCreator('/waste-management-platform-docs/docs/api/webhooks', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/app-movil/funcionalidades',
                component: ComponentCreator('/waste-management-platform-docs/docs/app-movil/funcionalidades', 'ad9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/app-movil/instalacion',
                component: ComponentCreator('/waste-management-platform-docs/docs/app-movil/instalacion', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/app-movil/intro',
                component: ComponentCreator('/waste-management-platform-docs/docs/app-movil/intro', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/app-movil/recoleccion',
                component: ComponentCreator('/waste-management-platform-docs/docs/app-movil/recoleccion', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/app-movil/tracking',
                component: ComponentCreator('/waste-management-platform-docs/docs/app-movil/tracking', 'af9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/guides/faq',
                component: ComponentCreator('/waste-management-platform-docs/docs/guides/faq', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/guides/getting-started',
                component: ComponentCreator('/waste-management-platform-docs/docs/guides/getting-started', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/guides/primeros-pasos',
                component: ComponentCreator('/waste-management-platform-docs/docs/guides/primeros-pasos', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/guides/troubleshooting',
                component: ComponentCreator('/waste-management-platform-docs/docs/guides/troubleshooting', '6a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/help/centro-ayuda',
                component: ComponentCreator('/waste-management-platform-docs/docs/help/centro-ayuda', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/help/contacto',
                component: ComponentCreator('/waste-management-platform-docs/docs/help/contacto', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/help/estado-sistema',
                component: ComponentCreator('/waste-management-platform-docs/docs/help/estado-sistema', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/intro',
                component: ComponentCreator('/waste-management-platform-docs/docs/intro', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-generadores/facturacion',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-generadores/facturacion', '1c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-generadores/intro',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-generadores/intro', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-generadores/seguimiento',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-generadores/seguimiento', 'f55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-generadores/solicitar-servicio',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-generadores/solicitar-servicio', '836'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-gestores/dashboard',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-gestores/dashboard', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-gestores/gestion-operaciones',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-gestores/gestion-operaciones', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-gestores/intro',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-gestores/intro', '8ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/waste-management-platform-docs/docs/web-gestores/reportes',
                component: ComponentCreator('/waste-management-platform-docs/docs/web-gestores/reportes', '33a'),
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
    path: '/waste-management-platform-docs/',
    component: ComponentCreator('/waste-management-platform-docs/', '2e0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
