import about from '~/content/about'
import experience from '~/content/experience'
import education from '~/content/education'
import Page from '~/layouts/page'
import ContentList from '~/layouts/content-list'
import HTMLContent from '~/components/html-content'
import Section from '~/components/section'
import Article from '~/components/article'
import Masthead from '~/components/masthead'
import Experience from '~/components/experience'
import Education from '~/components/education'
import HorizontalDivider from '~/components/horizontal-divider'

import type { VoidFunctionComponent } from 'react'

const Home: VoidFunctionComponent = () => {
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
        .map((exp) => (
          <Experience {...exp} key={exp.slug} />
        ))}
    </ContentList>
  )

  const educationContent = (
    <ContentList>
      {education
        .filter(({ active }) => active)
        .map((edu) => (
          <Education {...edu} key={edu.slug} />
        ))}
    </ContentList>
  )

  return (
    <Page>
      <Masthead {...{ name, profession, links }} />
      <HorizontalDivider />
      <Section
        title={<span style={{ fontSize: '3.4em' }}>👋</span>}
        content={profileContent}
      />
      <HorizontalDivider />
      <Section title="Work" content={experienceContent} />
      <HorizontalDivider />
      <Section title="Study" content={educationContent} />
    </Page>
  )
}

export default Home
