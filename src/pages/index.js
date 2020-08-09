import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`A Node.js Microservice Boilerplate Framework writtne in Typescript  ${siteConfig.title}`}
      description="Kook.js is a framework for building efficient, scalable Node.js server-side applications. It uses modern JavaScript, is built with TypeScript. It uses lego like blocks approach so everything is distributed as plugins whatever you need to use just add the plugin which makes it the most flexible framework for building the applications.">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header> */}

      <section className="lg:flex justify-between container mx-auto py-6 md:py-20 px-6">
      <div className="lg:w-1/2 max-w-xl pr-6 mx-auto flex flex-col justify-center mb-16 lg:mb-0 items-center lg:items-start">
        <h1 className="text-3xl sm:text-4xl font-title font-semibold leading-tight mb-6">A Microservice Boilerplate Framework</h1>
        <p className="text-xl leading-relaxed text-gray-700 mb-8 text-center lg:text-left">
          A progressive lego like Node.js Microservice written in Typescript framework for building efficient and scalable server-side applications.
        </p>
        <div className="flex flex-row justify-start">
          <a
            className="inline-block py-2 px-6 btn bg-accent hover:bg-accent-700 hover:shadow-xl text-white font-semibold rounded-full text-center mr-6"
            href="/docs"
            >Get started</a
          >
          <a
            className="inline-block py-2 px-6 btn border border-2 border-accent-600 hover:shadow-xl text-accent-700 font-semibold rounded-full text-center"
            href="https://www.khanakia.com/contact"
            target="_blank"
            >Contact Us</a
          >
        </div>
      </div>
      <div className="lg:w-1/2 max-w-2xl px-8 mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <img src={useBaseUrl('/img/home-right.png')} alt="Kook.js" />
        </div>
      </div>
    </section>


      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
