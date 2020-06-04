import React from 'react'

import { ExperienceContent } from '~/content/experience'
import type { FCWithoutChildren } from '~/typings/component'

import Article from './article'
import ArticleTitle from './article-title'
import HTMLContent from './html-content'

const Experience: FCWithoutChildren<ExperienceContent> = ({
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
    print={print}
  >
    <HTMLContent>{description}</HTMLContent>
  </Article>
)

export default Experience
