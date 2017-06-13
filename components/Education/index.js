import React from 'react'
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
}) => (
  <Article
    title={<ArticleTitle title={subject} subtitle={institution} />}
    meta={`${status}, ${period}, ${location}`}
    body={<HTMLContent>{description}</HTMLContent>}
  />
)

Experience.propTypes = {
  subject: renderable,
  institution: renderable,
  period: renderable,
  status: renderable,
  location: renderable,
  description: renderable,
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
