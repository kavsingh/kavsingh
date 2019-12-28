import React, { FunctionComponent } from 'react'

import { EducationContent } from '~/content/education'

import Article from '../Article'
import ArticleTitle from '../ArticleTitle'
import HTMLContent from '../HTMLContent'

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
