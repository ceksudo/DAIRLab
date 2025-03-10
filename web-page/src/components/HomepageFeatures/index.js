import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Paper Publication 1',
    Svg: require('@site/static/img/event-1.svg').default,
    description: (
      <>
        Coming soon
      </>
    ),
  },
  {
    title: 'Paper Publication 2',
    Svg: require('@site/static/img/event-2.svg').default,
    description: (
      <>
        Coming soon
      </>
    ),
  },
  {
    title: 'Paper Publication 3',
    Svg: require('@site/static/img/event-3.svg').default,
    description: (
      <>
        Coming soon
      </>
    ),
  },
  {
    title: 'Paper Publication 4',
    Svg: require('@site/static/img/event-4.svg').default,
    description: (
      <>
        Coming soon
      </>
    ),
  },
  {
    title: 'Paper Publication 5',
    Svg: require('@site/static/img/event-5.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Paper Publication 6',
    Svg: require('@site/static/img/event-6.svg').default,
    description: (
      <>
        Coming soon
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
        <Heading as="h3">{title}</Heading>
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
