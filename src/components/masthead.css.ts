import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '~/style/theme'
import { breakpointLarge } from '~/style/theme/breakpoints'

export const containerStyle = style({
  'width': '100%',
  'paddingBottom': '2em',
  '@media': {
    [breakpointLarge]: {
      paddingBottom: vars.screen.layout.spacingVertical,
    },
    print: {
      paddingBottom: vars.print.layout.spacingVertical,
    },
  },
})

export const nameStyle = style({
  'margin': '0 0 0.6em',
  'padding': 0,
  'color': vars.screen.colors.bodyTextEmphasis,
  'fontWeight': 600,
  'fontSize': '1.4em',
  '@media': {
    print: {
      color: vars.print.colors.bodyTextEmphasis,
    },
  },
})

export const professionStyle = style({
  'margin': '0 0 0.6em',
  'padding': 0,
  'color': vars.screen.colors.bodyTextSecondary,
  'fontWeight': 400,
  'fontSize': '1.2em',
  '@media': {
    print: {
      color: vars.print.colors.bodyTextSecondary,
    },
  },
})

export const linksStyle = style({
  'display': 'flex',
  'margin': 0,
  'padding': 0,
  'listStyleType': 'none',
  '@media': {
    print: {
      flexDirection: 'column',
    },
  },
})

export const webLinkStyle = style({
  'marginRight': '1.2em',
  '@media': {
    print: {
      display: 'none',
    },
  },
})

export const printLinkStyle = style({
  '@media': {
    screen: {
      display: 'none',
    },
  },
})

globalStyle(`${linksStyle} a`, {
  color: 'currentColor',
})

globalStyle(`${printLinkStyle} a`, {
  textDecoration: 'none',
})

globalStyle(`${printLinkStyle} a strong`, {
  display: 'inline-block',
  marginRight: '0.2em',
  fontWeight: 500,
})
