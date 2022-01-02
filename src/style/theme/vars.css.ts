import { createThemeContract } from '@vanilla-extract/css'

const mediaVars = {
  layout: {
    spacingVertical: null,
  },
  colors: {
    bodyText: null,
    bodyTextEmphasis: null,
    bodyTextSecondary: null,
    keyline: null,
    pageBackground: null,
  },
}

export const vars = createThemeContract({ print: mediaVars, screen: mediaVars })
