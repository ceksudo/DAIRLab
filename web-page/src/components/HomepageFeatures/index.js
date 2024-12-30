import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Team Work',
    Svg: require('@site/static/img/event-1.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Research Collabration',
    Svg: require('@site/static/img/event-2.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Interview preparation',
    Svg: require('@site/static/img/event-3.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Mentorship Training',
    Svg: require('@site/static/img/event-4.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Research Software Engineering',
    Svg: require('@site/static/img/event-5.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Social Recreation Activities',
    Svg: require('@site/static/img/event-6.svg').default,
    description: (
      <>
        
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
