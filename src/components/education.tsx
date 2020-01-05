import React from 'react'

import { EducationContent } from '~/content/education'
import { FunctionComponentWithoutChildren } from '~/typings/component'

import Article from './article'
import ArticleTitle from './article-title'
import HTMLContent from './html-content'

const Education: FunctionComponentWithoutChildren<EducationContent> = ({
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
