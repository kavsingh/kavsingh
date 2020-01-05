import React from 'react'
import styled from '@emotion/styled'

import { FunctionComponentWithoutChildren } from '~/typings/component'

const ArticleTitle: FunctionComponentWithoutChildren<{
  title: string
  subtitle: string
  seperator?: string
}> = ({ title, subtitle, seperator = '@' }) => (
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
