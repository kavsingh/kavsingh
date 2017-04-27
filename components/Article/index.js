import React from 'react'
import PropTypes from 'prop-types'

const constStr = () => ''

const Article = ({ title, meta, body }) => (
  <div className="article">
    <h3 className="article__title">{title()}</h3>
    <h4 className="article__meta">{meta()}</h4>
    <div className="article__body">{body()}</div>
    <style jsx>{`
      .article :global(ul),
      .article :global(p) {
        margin-bottom: 1em;
      }

      .article :global(ul) {
        padding: 0 0 0 1em;
      }
    `}</style>
  </div>
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
