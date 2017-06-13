import React from 'react'
import { screenTheme, printTheme } from '../../style/color'
import { callIfFn } from '../../util/function'
import { renderable } from '../../propTypes'

const Article = ({ title, meta, body }) => {
  return (
    <article className="article">
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
          text-transform: uppercase;
          margin: 0 0 1.1em;
          color: ${screenTheme.bodyTextSecondary};
        }

        @media print {
          .article__meta {
            color: ${printTheme.bodyTextSecondary};
          }
        }
      `}</style>
    </article>
  )
}

Article.propTypes = {
  title: renderable,
  meta: renderable,
  body: renderable,
}

Article.defaultProps = {
  title: '',
  meta: '',
  body: '',
}

export default Article
