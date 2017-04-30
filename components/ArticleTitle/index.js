import React from 'react'
import PropTypes from 'prop-types'

const ArticleTitle = ({ title, subtitle }) => (
  <span className="articleTitle">
    <span className="articleTitle__title">{title}</span>
    <span className="articleTitle__seperator">::</span>
    <span className="articleTitle__subtitle">{subtitle}</span>
    <style jsx>{`
      .articleTitle__title {
        font-weight: 700;
      }
      .articleTitle__seperator {
        font-weight: 400;
        margin: 0 0.4em;
      }
      .articleTitle__subtitle {
        font-weight: 400;
      }
    `}</style>
  </span>
)

ArticleTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

ArticleTitle.defaultProps = {
  title: '',
  subtitle: '',
}

export default ArticleTitle
