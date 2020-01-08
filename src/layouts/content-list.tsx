import React, { FunctionComponent, Children, ReactNode } from 'react'
import styled from '@emotion/styled'

import { ThemeProps } from '~/style/theme'

const ContentList: FunctionComponent = ({ children }) => {
  const childCount = Children.count(children)

  return (
    <>
      {Children.toArray(children).reduce(
        (acc: ReactNode[], child, index) =>
          acc.concat(
            index !== childCount - 1 ? [child, <Spacer key={index} />] : child,
          ),
        [],
      )}
    </>
  )
}

const Spacer = styled.div<ThemeProps>`
  height: ${({ theme }) => theme.screen.layout.spacingVertical};

  @media print {
    height: ${({ theme }) => theme.print.layout.spacingVertical};
  }
`

export default ContentList
