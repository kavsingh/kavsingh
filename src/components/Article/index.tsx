import React, { ReactNode, FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { screenTheme, printTheme } from '~/style/color'
import { callIfFn } from '~/util/function'

interface ArticleProps {
  body: ReactNode | (() => ReactNode)
  id?: string
  title?: ReactNode | (() => ReactNode)
  meta?: ReactNode | (() => ReactNode)
  print?: boolean
}

const Article: FunctionComponent<ArticleProps> = ({
  id,
  title,
  meta,
  body,
  print = false,
}) => (
  <Container id={id} print={print}>
    {title ? <Title>{callIfFn(title)}</Title> : null}
    {meta ? <Meta>{callIfFn(meta)}</Meta> : null}
    <div>{callIfFn(body)}</div>
  </Container>
)

const Container = styled.article<{ print: boolean }>`
  page-break-inside: avoid;

  @media print {
    display: ${({ print }) => (print ? 'initial' : 'none')};
  }
`

const Title = styled.h1`
  margin: 0 0 0.2em;
  font-size: 1.1em;
`

const Meta = styled.h2`
  margin: 0 0 0.8em;
  color: ${screenTheme.bodyTextSecondary};
  font-weight: 400;
  font-size: 0.88em;

  @media print {
    color: ${printTheme.bodyTextSecondary};
  }
`

export default Article
