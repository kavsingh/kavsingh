import { style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'
import { breakpointLarge } from '~/style/theme/breakpoints'

export const containerStyle = style({
  'width': '100%',
  'minHeight': '100%',
  'font':
    '16px/1.3 "Nunito", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  'color': vars.screen.colors.bodyText,
  'backgroundColor': vars.screen.colors.pageBackground,
  '@media': {
    '@print': {
      fontSize: '10px',
      lineHeight: 1.2,
      color: vars.print.colors.bodyText,
      backgroundColor: vars.print.colors.pageBackground,
    },
  },
})

export const contentStyle = style({
  'width': '100%',
  'maxWidth': '56rem',
  'margin': '0 auto',
  'padding': '2em',
  '@media': {
    [breakpointLarge]: {
      padding: `${vars.screen.layout.spacingVertical} 2em`,
    },
    print: {
      maxWidth: 'none',
    },
  },
})
