import React, { ReactNode, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

import { ThemeProps } from '~/style/theme'

interface ArticleProps {
  body: ReactNode
  id?: string
  title?: ReactNode
  meta?: ReactNode
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
    {title ? <Title>{title}</Title> : null}
    {meta ? <Meta>{meta}</Meta> : null}
    <div>{body}</div>
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

const Meta = styled.h2<ThemeProps>`
  margin: 0 0 0.8em;
  color: ${({ theme }) => theme.screen.colors.bodyTextSecondary};
  font-weight: 400;
  font-size: 0.88em;

  @media print {
    color: ${({ theme }) => theme.print.colors.bodyTextSecondary};
  }
`

export default withTheme(Article)
