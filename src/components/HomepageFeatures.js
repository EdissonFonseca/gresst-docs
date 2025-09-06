import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'App Móvil de Recolección',
    Svg: require('@site/static/img/mobile-app.svg').default,
    description: (
      <>
        Aplicación móvil para operadores de recolección con funcionalidades de 
        geolocalización, seguimiento en tiempo real y gestión de rutas optimizadas.
      </>
    ),
  },
  {
    title: 'Plataforma Web para Gestores',
    Svg: require('@site/static/img/manager-dashboard.svg').default,
    description: (
      <>
        Dashboard completo para gestores de residuos con análisis de datos, 
        gestión de operaciones y reportes detallados de rendimiento.
      </>
    ),
  },
  {
    title: 'Portal para Generadores',
    Svg: require('@site/static/img/generator-portal.svg').default,
    description: (
      <>
        Portal web para empresas generadoras de residuos que necesitan 
        solicitar servicios de recolección, tratamiento y disposición.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
