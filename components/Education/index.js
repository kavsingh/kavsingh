import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import ArticleTitle from '../ArticleTitle'
import HTMLContent from '../HTMLContent'

const Experience = ({
  subject,
  institution,
  period,
  status,
  location,
  description,
}) => (
  <Article
    title={() => <ArticleTitle title={subject} subtitle={institution} />}
    meta={() => `${status}, ${period}, ${location}`}
    body={() => <HTMLContent>{description}</HTMLContent>}
  />
)

Experience.propTypes = {
  subject: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  institution: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  period: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Experience.defaultProps = {
  subject: '',
  institution: '',
  period: '',
  status: '',
  location: '',
  description: '',
}

export default Experience
