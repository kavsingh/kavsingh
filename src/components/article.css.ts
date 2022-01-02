import { style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'

export const containerStyle = style({
  pageBreakInside: 'avoid',
})

export const noPrintStyle = style({
  '@media': {
    print: {
      display: 'none',
    },
  },
})

export const titleStyle = style({
  'margin': '0 0 0.2em',
  'fontSize': '1.1em',
  'color': vars.screen.colors.bodyTextEmphasis,
  '@media': {
    print: {
      color: vars.print.colors.bodyTextEmphasis,
    },
  },
})

export const metaStyle = style({
  'margin': '0 0 0.8em',
  'fontSize': '0.88em',
  'color': vars.screen.colors.bodyTextSecondary,
  'fontWeight': 400,
  '@media': {
    print: {
      color: vars.print.colors.bodyTextSecondary,
    },
  },
})
