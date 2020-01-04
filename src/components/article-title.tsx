import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export interface ArticleTitleProps {
  title: string
  subtitle: string
  seperator?: string
}

const ArticleTitle: FunctionComponent<ArticleTitleProps> = ({
  title,
  subtitle,
  seperator = '@',
}) => (
  <>
    <Title>{title}</Title>
    <Seperator>{seperator}</Seperator>
    <Subtitle>{subtitle}</Subtitle>
  </>
)

const Title = styled.span`
  font-weight: 600;
`

const Seperator = styled.span`
  margin: 0 0.4em;
  font-weight: 400;
`

const Subtitle = styled.span`
  font-weight: 400;
`

export default ArticleTitle
