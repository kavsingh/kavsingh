import React from 'react'
import Head from 'next/head'
import about from '../content/about'
import experience from '../content/experience'
import education from '../content/education'
import HTMLContent from '../components/HTMLContent'
import Section from '../components/Section'
import Article from '../components/Article'
import MastHead from '../components/MastHead'
import Experience from '../components/Experience'
import Education from '../components/Education'
import { screenTheme, printTheme } from '../style/color'
import '../util/offlineInstall'

export default () => (
  <div className="root">
    <Head>
      <title>Resume - Kav Singh</title>
      <meta name="theme-color" content={`${screenTheme.pageBackground}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
        rel="stylesheet"
      />
    </Head>
    <MastHead {...about} />
    <Section
      title="Skills"
      content={() => (
        <Article
          title=""
          body={() => <HTMLContent>{about.skills}</HTMLContent>}
        />
      )}
    />
    <Section
      title="Experience"
      content={() =>
        experience
          .filter(({ active }) => !!active)
          .map(exp => <Experience {...exp} key={exp.slug} />)}
    />
    <Section
      title="Education"
      content={() =>
        education
          .filter(({ active }) => !!active)
          .map(edu => <Education {...edu} key={edu.slug} />)}
    />
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
      }

      html {
        box-sizing: border-box;
        font: 14px/1.24 Inconsolata, monospace;
        background-color: ${screenTheme.pageBackground};
      }

      body {
        color: ${screenTheme.bodyText};
      }

      @page {
        size: A4 portrait;
      }

      @media print {
        html {
          font: 10px/1.2 Inconsolata, monospace;
          background-color: ${printTheme.pageBackground};
        }

        body {
          color: ${printTheme.bodyText};
        }
      }
    `}</style>
    <style jsx>{`
      .root {
        padding: 2em;
        width: 100%;
        max-width: 56rem;
        margin: 0 auto;
        -webkit-font-smoothing: subpixel-antialiased;
      }

      .root :global(.mastHead),
      .root :global(section) {
        margin-bottom: 3em;
      }

      @media (min-width: 30rem) {
        .root {
          padding: 4em 2em;
        }

        .root :global(.mastHead),
        .root :global(section) {
          margin-bottom: 4em;
        }
      }

      @media print {
        .root {
          max-width: 100%;
        }
      }
    `}</style>
  </div>
)
