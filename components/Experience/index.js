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
}) => (
  <Article
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
}

Experience.defaultProps = {
  employer: '',
  position: '',
  period: '',
  location: '',
  description: '',
  print: true,
}

export default Experience
