import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import ArticleTitle from '../ArticleTitle'
import HTMLContent from '../HTMLContent'
import { renderable } from '../../propTypes'

const Experience = ({
  employer,
  position,
  period,
  location,
  description,
  print,
  slug,
}) => (
  <Article
    id={`experience-${slug}`}
    title={<ArticleTitle title={position} subtitle={employer} />}
    meta={`${period}, ${location}`}
    body={<HTMLContent>{description}</HTMLContent>}
    print={print}
  />
)

Experience.propTypes = {
  employer: renderable,
  position: renderable,
  period: renderable,
  location: renderable,
  description: renderable,
  print: PropTypes.bool,
  slug: PropTypes.string,
}

Experience.defaultProps = {
  employer: '',
  position: '',
  period: '',
  location: '',
  description: '',
  print: true,
  slug: '',
}

export default Experience
