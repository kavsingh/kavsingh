import React, { ReactNode, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

import { ThemeProps } from '~/style/theme'

const Article: FunctionComponent<{
  id?: string
  title?: ReactNode
  meta?: ReactNode
  print?: boolean
}> = ({ id, title, meta, children, print = true }) => (
  <Container id={id} print={print}>
    {title ? <Title>{title}</Title> : null}
    {meta ? <Meta>{meta}</Meta> : null}
    <Content>{children}</Content>
  </Container>
)

const Container = styled.article<{ print: boolean }>`
  page-break-inside: avoid;

  @media print {
    display: ${({ print }) => (print ? 'initial' : 'none')};
  }
`

const Title = styled.h1<ThemeProps>`
  margin: 0 0 0.2em;
  color: ${({ theme }) => theme.screen.colors.bodyTextEmphasis};
  font-size: 1.1em;

  @media print {
    color: ${({ theme }) => theme.print.colors.bodyTextEmphasis};
  }
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

const Content = styled.div``

export default withTheme(Article)
