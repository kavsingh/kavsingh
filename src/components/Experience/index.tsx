import React, { StatelessComponent } from 'react'

import { ExperienceContent } from '~/content/experience'

import Article from '../Article'
import ArticleTitle from '../ArticleTitle'
import HTMLContent from '../HTMLContent'

export type ExperienceProps = ExperienceContent

const Experience: StatelessComponent<ExperienceProps> = ({
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
