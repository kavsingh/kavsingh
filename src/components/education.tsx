import Article from './article'
import ArticleTitle from './article-title'
import HTMLContent from './html-content'

import type { VoidFunctionComponent } from 'react'
import type { EducationContent } from '~/content/education'

const Education: VoidFunctionComponent<EducationContent> = ({
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
    print={print}
  >
    <HTMLContent>{description}</HTMLContent>
  </Article>
)

export default Education
