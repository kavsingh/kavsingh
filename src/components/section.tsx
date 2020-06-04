import React from 'react'
import styled from '@emotion/styled'
import type { ReactNode } from 'react'

import SplitPanes from '~/layouts/split-panes'
import type { ThemeProps } from '~/style/theme'
import type { FCWithoutChildren } from '~/typings/component'

const Section: FCWithoutChildren<{
  title: ReactNode
  content: ReactNode
  split?: boolean
}> = ({ title, content, split = true }) => (
  <Container>
    {split ? (
      <SplitPanes>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </SplitPanes>
    ) : (
      <>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </>
    )}
  </Container>
)

const Container = styled.section<ThemeProps>`
  width: 100%;
  padding: ${({ theme }) => theme.screen.layout.spacingVertical} 0;

  @media print {
    padding: ${({ theme }) => theme.print.layout.spacingVertical} 0;
    border-top-color: ${({ theme }) => theme.print.colors.keyline};
  }
`

const Title = styled.h1<ThemeProps>`
  margin: 0 0 1em;
  color: ${({ theme }) => theme.screen.colors.bodyTextEmphasis};
  font-weight: 600;
  font-size: 1.1em;

  @media print {
    color: ${({ theme }) => theme.print.colors.bodyTextEmphasis};
  }
`

const Content = styled.div``

export default Section
