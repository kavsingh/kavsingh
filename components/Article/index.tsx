import React, { StatelessComponent, ReactNode } from 'react'

import { screenTheme, printTheme } from '~/style/color'
import { callIfFn } from '~/util/function'

interface ArticleProps {
  body: ReactNode | (() => ReactNode)
  id?: string
  title?: ReactNode | (() => ReactNode)
  meta?: ReactNode | (() => ReactNode)
  print?: boolean
}

const Article: StatelessComponent<ArticleProps> = ({
  id,
  title,
  meta,
  body,
  print = true,
}) => (
  <article
    id={id}
    className={`article article_print${print ? 'Show' : 'Hide'}`}
  >
    {title ? <h1 className="article__title">{callIfFn(title)}</h1> : null}
    {meta ? <h2 className="article__meta">{callIfFn(meta)}</h2> : null}
    <div className="article__body">{callIfFn(body)}</div>
    <style jsx>{`
      .article {
        page-break-inside: avoid;
      }

      .article__title {
        font-size: 1.1em;
        margin: 0 0 0.2em;
      }

      .article__meta {
        font-size: 0.88em;
        font-weight: 400;
        margin: 0 0 0.8em;
        color: ${screenTheme.bodyTextSecondary};
      }

      @media print {
        .article_printHide {
          display: none;
        }

        .article__meta {
          color: ${printTheme.bodyTextSecondary};
        }
      }
    `}</style>
  </article>
)

export default Article
