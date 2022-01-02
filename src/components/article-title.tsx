import { seperatorStyle, subtitleStyle, titleStyle } from './article-title.css'

import type { VoidFunctionComponent } from 'react'

const ArticleTitle: VoidFunctionComponent<{
  title: string
  subtitle: string
  seperator?: string
}> = ({ title, subtitle, seperator = '@' }) => (
  <>
    <span className={titleStyle}>{title}</span>
    <span className={seperatorStyle}>{seperator}</span>
    <span className={subtitleStyle}>{subtitle}</span>
  </>
)

export default ArticleTitle
