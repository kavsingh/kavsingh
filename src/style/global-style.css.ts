import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme'

globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
})

globalStyle('html, body', {
  width: '100%',
  minHeight: '100%',
  margin: 0,
  padding: 0,
})

globalStyle('html', {
  'boxSizing': 'border-box',
  'font':
    '16px/1.3 "Nunito", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  '@media': {
    print: {
      fontSize: '10px',
    },
  },
})

globalStyle('body', {
  'color': vars.screen.colors.bodyText,
  'backgroundColor': vars.screen.colors.pageBackground,
  '@media': {
    print: {
      color: vars.print.colors.bodyText,
      backgroundColor: vars.print.colors.pageBackground,
    },
  },
})
