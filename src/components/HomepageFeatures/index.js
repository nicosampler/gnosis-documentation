import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [  
  {
    id: 0,
    title: 'Build on Gnosis Chain',
    subtitle: 'Get to know how to build and interact with Gnosis Chain',
    link: '/developers/overview',
    Svg: require('@site/static/img/features/build.svg').default,
  },
  {
    id: 1,
    title: 'Bridge with Gnosis',
    subtitle: 'Use Gnosis Bridge to bridge tokens from different chains and vice versa',
    link: '/bridges',
    Svg: require('@site/static/img/features/bridge.svg').default,
  },
  {
    id: 2,
    title: 'Run your own node',
    subtitle: 'Join our network of over 200k nodes',
    link: '/node',
    Svg: require('@site/static/img/features/node.svg').default,
  },
  {
    id: 3,
    title : 'Tools for Builders',
    link : '/tools',
    subtitle: 'RPC Providers, Faucets, etc. Everything you need to to develop on Gnosis.',
    Svg: require('@site/static/img/features/tools.svg').default,
  },
  {
    id: 4,
    title: 'Technical guide for Developer integrations',
    subtitle: 'Learn how to build interactive dApps on Gnosis chain with different developer integration, SDKs and APIs',
    link: '/technicalguides',
    Svg: require('@site/static/img/features/guide.svg').default,
  },
  {
    id: 5,
    title : 'Contribute to Gnosis developer ecosystem',
    subtitle: '',
    link : '/',
    Svg: require('@site/static/img/features/ecosystem.svg').default,
  }
];

function Feature({Svg, title, subtitle, link}) {
  return (
    <div className={clsx(styles.featureCardContainer)}>
      <a href={link}>
        <div className={clsx(styles.featureCard)}>
          <div className={clsx(styles.featureImg)}>
            <Svg className={styles.featureSvg} role='img' />
          </div>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>

          <p>Learn more</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container margin-bottom--xl'>
        <div className={clsx('row', styles.featureRow)} >
          {FeatureList.map(({ id, ...props}) => (
            <Feature key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
