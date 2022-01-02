import { style } from '@vanilla-extract/css'

import { breakpointLarge } from '~/style/theme/breakpoints'

export const containerStyle = style({
  'display': 'flex',
  'flexDirection': 'column',
  'width': '100%',
  '@media': {
    [breakpointLarge]: {
      flexDirection: 'row',
    },
  },
})

export const leftPaneStyle = style({
  '@media': {
    [breakpointLarge]: {
      flex: '0 0 24%',
      maxWidth: '30rem',
    },
  },
})

export const rightPaneStyle = style({
  '@media': {
    [breakpointLarge]: {
      flex: '1 0',
    },
  },
})
