import { style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'

export const containerStyle = style({
  'width': '100%',
  'padding': `${vars.screen.layout.spacingVertical} 0`,
  '@media': {
    print: {
      padding: `${vars.print.layout.spacingVertical} 0`,
      borderTopColor: vars.print.colors.keyline,
    },
  },
})

export const titleStyle = style({
  'margin': '0 0 1em',
  'color': vars.screen.colors.bodyTextEmphasis,
  'fontWeight': '600',
  'fontSize': ' 1.1em',

  '@media': {
    print: {
      color: vars.print.colors.bodyTextEmphasis,
    },
  },
})
