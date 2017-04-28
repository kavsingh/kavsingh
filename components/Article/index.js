import React from 'react'
import PropTypes from 'prop-types'

const constStr = () => ''

const Article = ({ title, meta, body }) => (
  <article className="article">
    <h1 className="article__title">{title()}</h1>
    <h2 className="article__meta">{meta()}</h2>
    <div className="article__body">{body()}</div>
    <style jsx>{`
      .article__title {
        font-size: 1.1em;
        margin: 0 0 0.2em;
      }

      .article__meta {
        font-size: 0.88em;
        text-transform: uppercase;
        margin: 0 0 1.1em;
        color: #666;
      }
    `}</style>
  </article>
)

Article.propTypes = {
  title: PropTypes.func,
  meta: PropTypes.func,
  body: PropTypes.func,
}

Article.defaultProps = {
  title: constStr,
  meta: constStr,
  body: constStr,
}

export default Article
