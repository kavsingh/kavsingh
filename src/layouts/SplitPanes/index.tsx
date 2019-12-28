import React, {
  Children,
  isValidElement,
  FunctionComponent,
  ReactNode,
} from 'react'
import styled from '@emotion/styled'
import { breakpointLarge } from '~/style/breakpoints'

const SplitPanes: FunctionComponent<{ children: ReactNode }> = ({
  children = [],
}) => {
  const [first, ...rest] = Children.toArray(children).filter(node =>
    isValidElement(node),
  )

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
    flex: 0 0 28%;
    max-width: 30rem;
    padding-right: 2em;
  }
`

const Right = styled.div`
  ${breakpointLarge} {
    flex: 1 0;
  }
`

export default SplitPanes
