import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

import { FunctionComponentWithoutChildren } from '~/typings/component'
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

const IndexPage: FunctionComponentWithoutChildren = () => {
  const { description, links, name, profession } = about

  const descriptionContent = (
    <Article title="">
      <HTMLContent>{description}</HTMLContent>
    </Article>
  )

  const experienceContent = (
    <>
      {experience
        .filter(({ active }) => active)
        .map(exp => (
          <Experience {...exp} key={exp.slug} />
        ))}
    </>
  )

  const educationContent = (
    <>
      {education
        .filter(({ active }) => active)
        .map(edu => (
          <Education {...edu} key={edu.slug} />
        ))}
    </>
  )

  return (
    <>
      <Head>
        <title key="title">CV - Kav Singh</title>
      </Head>
      <Body>
        <Masthead {...{ links, name, profession }} />
        <Section title="" content={descriptionContent} split={false} />
        <Section title="Experience" content={experienceContent} />
        <Section title="Education" content={educationContent} />
      </Body>
    </>
  )
}

const Body = styled.div`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2em;

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

  @media print {
    max-width: 100%;
  }
`

export default IndexPage
