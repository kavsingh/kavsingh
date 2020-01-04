import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import usePreferredColorScheme from '~/lib/use-preferred-color-scheme'
import { Theme, extractThemeColor, getThemeForColorScheme } from '~/style/theme'
import { breakpointLarge } from '~/style/breakpoints'
import about from '~/content/about'
import experience from '~/content/experience'
import education from '~/content/education'
import HTMLContent from '~/components/html-content'
import Section from '~/components/section'
import Article from '~/components/article'
import Masthead from '~/components/masthead'
import Experience from '~/components/experience'
import Education from '~/components/education'

const globalStyles = (theme: Theme) => css`
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
    font: 14px/1.3 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    background-color: ${theme.screen.colors.pageBackground};
  }

  body {
    color: ${theme.screen.colors.bodyText};
  }

  @page {
    size: A4 portrait;
  }

  @media print {
    html {
      font-size: 10px;
      line-height: 1.2;
      background-color: ${theme.print.colors.pageBackground};
    }

    body {
      color: ${theme.print.colors.bodyText};
    }
  }
`

const IndexPage: FunctionComponent = () => {
  const preferredColorScheme = usePreferredColorScheme()
  const theme = getThemeForColorScheme(preferredColorScheme)
  const themeColor = extractThemeColor(theme)

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
    <ThemeProvider theme={theme}>
      <Head>
        <title>CV - Kav Singh</title>
        <meta name="theme-color" content={themeColor} />
      </Head>
      <Global styles={globalStyles} />
      <Root>
        <Masthead {...about} />
        <Section title="Skills" content={skillsContent} />
        <Section title="Experience" content={experienceContent} />
        <Section title="Education" content={educationContent} />
      </Root>
    </ThemeProvider>
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
