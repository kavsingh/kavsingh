import React, { StatelessComponent } from 'react'

import Article from '~/components/Article'
import ArticleTitle from '~/components/ArticleTitle'
import HTMLContent from '~/components/HTMLContent'
import { ExperienceContent } from '~/content/experience'

export interface ExperienceProps extends ExperienceContent {}

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
