import React, { Children, isValidElement } from 'react'
import styled from '@emotion/styled'
import type { FunctionComponent } from 'react'

import { breakpointLarge } from '~/style/breakpoints'

const SplitPanes: FunctionComponent = ({ children }) => {
  const [first, ...rest] = Children.toArray(children).filter(isValidElement)

  return (
    <Container>
      <Left>{first}</Left>
      <Right>{rest}</Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpointLarge} {
    flex-direction: row;
  }
`

const Left = styled.div`
  ${breakpointLarge} {
    flex: 0 0 24%;
    max-width: 30rem;
  }
`

const Right = styled.div`
  ${breakpointLarge} {
    flex: 1 0;
  }
`

export default SplitPanes
