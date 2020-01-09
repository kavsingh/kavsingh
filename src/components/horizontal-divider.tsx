import styled from '@emotion/styled'

import { ThemeProps } from '~/style/theme'

const HorizontalDivider = styled.div<ThemeProps>`
  align-self: stretch;
  width: 100%;
  height: 1px;
  background-color: transparent;

  @media print {
    background-color: ${({ theme }) => theme.print.colors.keyline};
  }
`

export default HorizontalDivider
