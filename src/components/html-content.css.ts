import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'

export const containerStyle = style({})

globalStyle(`${containerStyle} ul, ${containerStyle} p`, {
  margin: '0 0 0.6em',
})

globalStyle(`${containerStyle} ul`, {
  padding: 0,
})

globalStyle(`${containerStyle} li`, {
  display: 'flex',
  margin: '0 0 0.3em',
  listStyleType: 'none',
})

globalStyle(`${containerStyle} li::before`, {
  'display': 'block',
  'marginRight': '0.8em',
  'color': vars.screen.colors.bodyTextSecondary,
  'content': '\\2022',
  '@media': {
    print: {
      color: vars.print.colors.bodyTextSecondary,
    },
  },
})

globalStyle(`${containerStyle} a`, {
  'color': 'currentcolor',
  '@media': {
    print: {
      textDecoration: 'none',
    },
  },
})

globalStyle(`${containerStyle} a::after`, {
  '@media': {
    print: {
      marginLeft: '0.4em',
      content: '[" attr(href) "]',
    },
  },
})
