import React, { ReactNode, FunctionComponent } from 'react'
import styled from '@emotion/styled'

import SplitPanes from '~/layouts/SplitPanes'
import { screenTheme, printTheme } from '~/style/color'
import { callIfFn } from '~/util/function'

export interface SectionProps {
  title: ReactNode | (() => ReactNode)
  content: ReactNode | (() => ReactNode)
}

const Section: FunctionComponent<SectionProps> = ({ title, content }) => (
  <Container>
    <SplitPanes>
      <Title>{callIfFn(title)}</Title>
      <Content>{callIfFn(content)}</Content>
    </SplitPanes>
  </Container>
)

const Container = styled.section`
  width: 100%;
  padding-top: 2.4em;
  border-top: 1px solid ${screenTheme.keyline};

  @media print {
    border-top-color: ${printTheme.keyline};
  }
`

const Title = styled.h1`
  margin: 0 0 1em;
  font-weight: 600;
  font-size: 1.1em;
`

const Content = styled.div`
  > *:not(:last-child) {
    margin-bottom: 4.2em;
  }
`

export default Section
