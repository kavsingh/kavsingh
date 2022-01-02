import { createTheme } from '@vanilla-extract/css'

import { vars } from './vars.css'

export const light = createTheme(vars, {
  print: {
    layout: {
      spacingVertical: '2em',
    },
    colors: {
      bodyText: 'rgba(17, 17, 17, 1)',
      bodyTextEmphasis: 'rgba(0, 0, 0, 1)',
      bodyTextSecondary: 'rgba(102, 102, 102, 1)',
      keyline: 'rgba(255, 238, 238, 1)',
      pageBackground: 'rgba(255, 255, 255, 1)',
    },
  },
  screen: {
    layout: {
      spacingVertical: '4em',
    },
    colors: {
      bodyText: 'rgba(51, 51, 51, 1)',
      bodyTextEmphasis: 'rgba(10, 10, 10, 1)',
      bodyTextSecondary: 'rgba(102, 102, 102, 1)',
      keyline: 'rgba(255, 238, 238, 1)',
      pageBackground: 'rgba(255, 255, 255, 1)',
    },
  },
})
