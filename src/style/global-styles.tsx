import React from 'react'
import { Global, css } from '@emotion/core'

import { FunctionComponentWithoutChildren } from '~/typings/component'

import { Theme } from './theme'

const globalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font: 14px/1.3 'Nunito', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.screen.colors.pageBackground};
  }

  body {
    color: ${theme.screen.colors.bodyText};
  }

  @page {
    size: A4 portrait;
  }

  @media print {
    html {
      font-size: 10px;
      line-height: 1.2;
      background-color: ${theme.print.colors.pageBackground};
    }

    body {
      color: ${theme.print.colors.bodyText};
    }
  }
`

const GlobalStyles: FunctionComponentWithoutChildren = () => (
  <Global styles={globalStyles} />
)

export default GlobalStyles
