import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'App Móvil de Recolección',
    emoji: '📱',
    description: (
      <>
        Aplicación móvil para operadores de recolección con funcionalidades de 
        geolocalización, seguimiento en tiempo real y gestión de rutas optimizadas.
      </>
    ),
  },
  {
    title: 'Plataforma Web para Gestores',
    emoji: '💻',
    description: (
      <>
        Dashboard completo para gestores de residuos con análisis de datos, 
        gestión de operaciones y reportes detallados de rendimiento.
      </>
    ),
  },
  {
    title: 'Portal para Generadores',
    emoji: '🏢',
    description: (
      <>
        Portal web para empresas generadoras de residuos que necesitan 
        solicitar servicios de recolección, tratamiento y disposición.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
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
