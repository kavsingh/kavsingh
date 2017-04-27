import React from 'react'
import Head from 'next/head'
import Section from '../components/section'
import experience from '../content/experience'

export default () => (
  <div className="root">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata"
        rel="stylesheet"
      />
    </Head>
    {experience.map(exp => (
      <Section>
        <div>{exp.employers[0].name}</div>
        <div>
          <h2>{exp.position}</h2>
          {exp.description}
        </div>
      </Section>
    ))}
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
        font: 16px/1 Inconsolata, monospace;
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
        max-width: 56rem;
        margin: 0 auto;
        padding: 1em;
      }
    `}</style>
  </div>
)
