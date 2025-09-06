/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Aplicaciones',
      items: [
        'app-movil/intro',
        'app-movil/instalacion',
        'app-movil/funcionalidades',
        'app-movil/recoleccion',
        'app-movil/tracking',
        'web-gestores/intro',
        'web-gestores/dashboard',
        'web-gestores/gestion-operaciones',
        'web-gestores/reportes',
        'web-generadores/intro',
        'web-generadores/solicitar-servicio',
        'web-generadores/seguimiento',
        'web-generadores/facturacion',
      ],
    },
    {
      type: 'category',
      label: 'API y Integraciones',
      items: [
        'api/intro',
        'api/autenticacion',
        'api/endpoints',
        'api/webhooks',
        'api/sdk',
      ],
    },
    {
      type: 'category',
      label: 'Guías de Usuario',
      items: [
        'guides/getting-started',
        'guides/primeros-pasos',
        'guides/troubleshooting',
        'guides/faq',
      ],
    },
    {
      type: 'category',
      label: 'Soporte',
      items: [
        'help/centro-ayuda',
        'help/contacto',
        'help/estado-sistema',
      ],
    },
  ],
};

export default sidebars;
