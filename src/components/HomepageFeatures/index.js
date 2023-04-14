import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/ray.svg').default,
    description: (
      <>
        This was designed to make easier the behavior understand of our Macros and Functions.
      </>
    ),
  },
  {
    title: 'Easy to Search',
    Svg: require('@site/static/img/search.svg').default,
    description: (
      <>
        This documentation has a helpful method of search to make even easier find information about how use our commands.
      </>
    ),
  },
  {
    title: 'Easy to Edit',
    Svg: require('@site/static/img/edit.svg').default,
    description: (
      <>
        Simple Maintenance using only React and MD text edit. Docusaurus can
        be extended while reusing the same header and footer.
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
