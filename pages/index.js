import React from 'react'
import Head from 'next/head'
import experience from '../content/experience'
import education from '../content/education'
import Section from '../components/Section'
import Experience from '../components/Experience'
import Education from '../components/Education'

export default () => (
  <div className="root">
    <Head>
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata"
        rel="stylesheet"
      />
    </Head>
    <Section
      title={() => 'Experience'}
      content={() =>
        experience.map(exp => <Experience {...exp} key={exp.employer} />)}
    />
    <Section
      title={() => 'Education'}
      content={() =>
        education.map(edu => <Education {...edu} key={edu.institution} />)}
    />
    <style jsx>{`
      :global(html) {
        box-sizing: border-box;
      }

      :global(html) :global(*),
      :global(html) :global(*::before),
      :global(html) :global(*::after) {
        box-sizing: inherit;
      }

      :global(html) {
        font: 14px/1.24 Inconsolata, monospace;
      }

      :global(html),
      :global(body) {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
      }

      :global(body) {
        color: #222;
      }

      .root {
        width: 100%;
        max-width: 56rem;
        margin: 0 auto;
        padding: 1em;
      }

      .root :global(section) {
        margin-bottom: 4em;
      }
    `}</style>
  </div>
)
