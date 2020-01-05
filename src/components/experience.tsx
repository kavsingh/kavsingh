import React, { FunctionComponent } from 'react'

import { ExperienceContent } from '~/content/experience'

import Article from './article'
import ArticleTitle from './article-title'
import HTMLContent from './html-content'

const Experience: FunctionComponent<ExperienceContent> = ({
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
