import React from 'react'
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
}) => (
  <Article
    title={<ArticleTitle title={position} subtitle={employer} />}
    meta={`${period}, ${location}`}
    body={<HTMLContent>{description}</HTMLContent>}
  />
)

Experience.propTypes = {
  employer: renderable,
  position: renderable,
  period: renderable,
  location: renderable,
  description: renderable,
}

Experience.defaultProps = {
  employer: '',
  position: '',
  period: '',
  location: '',
  description: '',
}

export default Experience
