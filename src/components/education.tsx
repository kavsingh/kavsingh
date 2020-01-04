import React, { FunctionComponent } from 'react'

import { EducationContent } from '~/content/education'

import Article from './article'
import ArticleTitle from './article-title'
import HTMLContent from './html-content'

export type EducationProps = EducationContent

const Education: FunctionComponent<EducationProps> = ({
  subject,
  institution,
  period,
  status,
  location,
  description,
  print,
  slug,
}) => (
  <Article
    id={`education-${slug}`}
    title={<ArticleTitle title={subject} subtitle={institution} />}
    meta={`${status}, ${period}, ${location}`}
    body={<HTMLContent>{description}</HTMLContent>}
    print={print}
  />
)

export default Education
