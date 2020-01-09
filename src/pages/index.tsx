import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

import { FunctionComponentWithoutChildren } from '~/typings/component'
import { breakpointLarge } from '~/style/breakpoints'
import { ThemeProps } from '~/style/theme'
import about from '~/content/about'
import experience from '~/content/experience'
import education from '~/content/education'
import ContentList from '~/layouts/content-list'
import HTMLContent from '~/components/html-content'
import Section from '~/components/section'
import Article from '~/components/article'
import Masthead from '~/components/masthead'
import Experience from '~/components/experience'
import Education from '~/components/education'
import HorizontalDivider from '~/components/horizontal-divider'

const IndexPage: FunctionComponentWithoutChildren = () => {
  const { profile, links, name, profession } = about

  const profileContent = (
    <Article title="">
      <HTMLContent>{profile}</HTMLContent>
    </Article>
  )

  const experienceContent = (
    <ContentList>
      {experience
        .filter(({ active }) => active)
        .map(exp => (
          <Experience {...exp} key={exp.slug} />
        ))}
    </ContentList>
  )

  const educationContent = (
    <ContentList>
      {education
        .filter(({ active }) => active)
        .map(edu => (
          <Education {...edu} key={edu.slug} />
        ))}
    </ContentList>
  )

  return (
    <>
      <Head>
        <title key="title">CV - Kav Singh</title>
      </Head>
      <Body>
        <Masthead {...{ name, profession, links }} />
        <HorizontalDivider />
        <Section
          title={<ProfileTitle>👋</ProfileTitle>}
          content={profileContent}
        />
        <HorizontalDivider />
        <Section title="Work" content={experienceContent} />
        <HorizontalDivider />
        <Section title="Study" content={educationContent} />
      </Body>
    </>
  )
}

const Body = styled.div<ThemeProps>`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2em;

  ${breakpointLarge} {
    padding: ${({ theme }) => theme.screen.layout.spacingVertical} 2em;
  }

  @media print {
    max-width: 100%;
  }
`

const ProfileTitle = styled.div`
  font-size: 3.4em;
`

export default IndexPage
