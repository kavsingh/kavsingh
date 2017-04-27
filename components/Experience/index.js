import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import ArticleTitle from '../ArticleTitle'

const Experience = ({
  employer,
  position,
  period,
  location,
  description,
}) => (
  <Article
    title={() => <ArticleTitle title={position} subtitle={employer} />}
    meta={() => `${period}, ${location}`}
    body={() => description}
  />
)

Experience.propTypes = {
  employer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  period: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Experience.defaultProps = {
  employer: '',
  position: '',
  period: '',
  location: '',
  description: '',
}

export default Experience
