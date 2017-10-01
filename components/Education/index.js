import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import ArticleTitle from '../ArticleTitle'
import HTMLContent from '../HTMLContent'
import { renderable } from '../../propTypes'

const Experience = ({
  subject,
  institution,
  period,
  status,
  location,
  description,
  print,
  slug,
}) => (
  <Article
    id={`education-${slug}`}
    title={<ArticleTitle title={subject} subtitle={institution} />}
    meta={`${status}, ${period}, ${location}`}
    body={<HTMLContent>{description}</HTMLContent>}
    print={print}
  />
)

Experience.propTypes = {
  subject: renderable,
  institution: renderable,
  period: renderable,
  status: renderable,
  location: renderable,
  description: renderable,
  print: PropTypes.bool,
  slug: PropTypes.string,
}

Experience.defaultProps = {
  subject: '',
  institution: '',
  period: '',
  status: '',
  location: '',
  description: '',
  print: true,
  slug: '',
}

export default Experience
