import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import about from '~/content/about'
import experience from '~/content/experience'
import education from '~/content/education'
import HTMLContent from '~/components/HTMLContent'
import Section from '~/components/Section'
import Article from '~/components/Article'
import MastHead from '~/components/MastHead'
import Experience from '~/components/Experience'
import Education from '~/components/Education'
import { screenTheme, printTheme } from '~/style/color'
import { breakpointLarge } from '~/style/breakpoints'

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font: 14px/1.3 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
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
      font: 10px/1.2 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      background-color: ${printTheme.pageBackground};
    }

    body {
      color: ${printTheme.bodyText};
    }
  }
`

const IndexPage: FunctionComponent = () => {
  const skillsContent = (
    <Article title="" body={<HTMLContent>{about.skills}</HTMLContent>} />
  )

  const experienceContent = (
    <>
      {experience
        .filter(({ active }) => !!active)
        .map(exp => (
          <Experience {...exp} key={exp.slug} />
        ))}
    </>
  )

  const educationContent = (
    <>
      {education
        .filter(({ active }) => !!active)
        .map(edu => (
          <Education {...edu} key={edu.slug} />
        ))}
    </>
  )

  return (
    <>
      <Head>
        <title>CV - Kav Singh</title>
      </Head>
      <Global styles={globalStyles} />
      <Root>
        <MastHead {...about} />
        <Section title="Skills" content={skillsContent} />
        <Section title="Experience" content={experienceContent} />
        <Section title="Education" content={educationContent} />
      </Root>
    </>
  )
}

const Root = styled.div`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2em;
  -webkit-font-smoothing: subpixel-antialiased;

  section {
    margin-bottom: 3em;

    &:first-of-type {
      margin-top: 3em;
    }
  }

  ${breakpointLarge} {
    padding: 4em 2em;

    section {
      margin-bottom: 4em;

      &:first-of-type {
        margin-top: 4em;
      }
    }
  }

  @media screen {
    -webkit-font-smoothing: antialiased;
  }

  @media print {
    max-width: 100%;
  }
`

export default IndexPage
