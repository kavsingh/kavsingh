import { createTheme } from '@vanilla-extract/css'

import { vars } from './vars.css'

export const dark = createTheme(vars, {
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
      bodyText: 'rgba(222, 222, 222, 1)',
      bodyTextEmphasis: 'rgba(248, 248, 248, 1)',
      bodyTextSecondary: 'rgba(136, 136, 136, 1)',
      keyline: 'rgba(53, 54, 58, 1)',
      pageBackground: 'rgba(34, 34, 34, 1)',
    },
  },
})
