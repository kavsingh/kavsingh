import { style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'

export const containerStyle = style({
  'margin': '0',
  'padding': '0',
  'border': 'none',
  'color': 'inherit',
  'font': 'inherit',
  'textAlign': 'inherit',
  'background': 'transparent',
  'outline': 'none',
  'appearance': 'none',
  'cursor': 'pointer',
  ':focus': {
    outline: `1px solid ${vars.screen.colors.keyline}`,
  },
  ':active': {
    outline: `1px solid ${vars.screen.colors.keyline}`,
  },
})
