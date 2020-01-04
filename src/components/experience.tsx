import React, { FunctionComponent } from 'react'

import { ExperienceContent } from '~/content/experience'

import Article from './article'
import ArticleTitle from './article-title'
import HTMLContent from './html-content'

export type ExperienceProps = ExperienceContent

const Experience: FunctionComponent<ExperienceProps> = ({
  employer,
  position,
  period,
  location,
  description,
  print,
  slug,
}) => (
  <Article
    id={`experience-${slug}`}
    title={<ArticleTitle title={position} subtitle={employer} />}
    meta={`${period}, ${location}`}
    body={<HTMLContent>{description}</HTMLContent>}
    print={print}
  />
)

export default Experience
