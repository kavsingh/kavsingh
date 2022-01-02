import { style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'

export const spacerStyle = style({
  'height': vars.screen.layout.spacingVertical,
  '@media': {
    print: {
      height: vars.print.layout.spacingVertical,
    },
  },
})
