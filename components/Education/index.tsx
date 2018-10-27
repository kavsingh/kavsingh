import React, { StatelessComponent } from 'react'

import Article from '~/components/Article'
import ArticleTitle from '~/components/ArticleTitle'
import HTMLContent from '~/components/HTMLContent'
import { EducationContent } from '~/content/education'

export interface EducationProps extends EducationContent {}

const Education: StatelessComponent<EducationProps> = ({
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
