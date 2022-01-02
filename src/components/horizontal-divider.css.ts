import { style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'

export const containerStyle = style({
  'alignSelf': 'stretch',
  'width': '100%',
  'height': '1px',
  'backgroundColor': 'transparent',

  '@media': {
    print: {
      backgroundColor: vars.print.colors.keyline,
    },
  },
})
