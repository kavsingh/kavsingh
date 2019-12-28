import React, { StatelessComponent } from 'react'

export interface ArticleTitleProps {
  title: string
  subtitle: string
  seperator?: string
}

const ArticleTitle: StatelessComponent<ArticleTitleProps> = ({
  title,
  subtitle,
  seperator = '@',
}) => (
  <span className="articleTitle">
    <span className="articleTitle__title">{title}</span>
    <span className="articleTitle__seperator">{seperator}</span>
    <span className="articleTitle__subtitle">{subtitle}</span>
    <style jsx>{`
      .articleTitle__title {
        font-weight: 600;
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

export default ArticleTitle
