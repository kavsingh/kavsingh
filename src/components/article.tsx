import classNames from 'classnames'

import { containerStyle, metaStyle, noPrintStyle } from './article.css'
import { titleStyle } from './article-title.css'

import type { ReactNode, FC } from 'react'

const Article: FC<{
  id?: string
  title?: ReactNode
  meta?: ReactNode
  print?: boolean
}> = ({ id, title, meta, children, print = true }) => (
  <article
    id={id}
    className={classNames([containerStyle, { [noPrintStyle]: !print }])}
  >
    {title ? <h1 className={titleStyle}>{title}</h1> : null}
    {meta ? <h2 className={metaStyle}>{meta}</h2> : null}
    <div>{children}</div>
  </article>
)

export default Article
