import React from 'react'
import PropTypes from 'prop-types'
import { screenTheme, printTheme } from '../../style/color'
import { callIfFn } from '../../util/function'
import { renderable } from '../../propTypes'

const Article = ({ title, meta, body, print }) => (
  <article className={`article article_print${print ? 'Show' : 'Hide'}`}>
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

Article.propTypes = {
  title: renderable,
  meta: renderable,
  body: renderable,
  print: PropTypes.bool,
}

Article.defaultProps = {
  title: '',
  meta: '',
  body: '',
  print: true,
}

export default Article
