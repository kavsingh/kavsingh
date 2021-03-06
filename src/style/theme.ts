import rgbHex from 'rgb-hex'

import {
  getPreferredColorScheme,
  ColorSchemePreference,
} from '~/lib/color-scheme'

interface ThemeColors {
  bodyText: string
  bodyTextEmphasis: string
  bodyTextSecondary: string
  keyline: string
  pageBackground: string
}

interface ThemeLayout {
  spacingVertical: string
}

interface MediaTypeTheme {
  colors: ThemeColors
  layout: ThemeLayout
}

export interface Theme {
  name: 'dark' | 'light'
  screen: MediaTypeTheme
  print: MediaTypeTheme
}

export interface ThemeProps {
  theme?: Theme
}

const print: MediaTypeTheme = {
  layout: {
    spacingVertical: '2em',
  },
  colors: {
    bodyText: 'rgba(17, 17, 17, 1)',
    bodyTextEmphasis: 'rgba(0, 0, 0, 1)',
    bodyTextSecondary: 'rgba(102, 102, 102, 1)',
    keyline: 'rgba(255, 238, 238, 1)',
    pageBackground: 'rgba(255, 255, 255, 1)',
  },
}

const screenLayout: ThemeLayout = {
  spacingVertical: '4em',
}

export const lightTheme: Theme = {
  print,
  name: 'light',
  screen: {
    layout: screenLayout,
    colors: {
      bodyText: 'rgba(51, 51, 51, 1)',
      bodyTextEmphasis: 'rgba(10, 10, 10, 1)',
      bodyTextSecondary: 'rgba(102, 102, 102, 1)',
      keyline: 'rgba(255, 238, 238, 1)',
      pageBackground: 'rgba(255, 255, 255, 1)',
    },
  },
}

export const darkTheme: Theme = {
  print,
  name: 'dark',
  screen: {
    layout: screenLayout,
    colors: {
      bodyText: 'rgba(222, 222, 222, 1)',
      bodyTextEmphasis: 'rgba(248, 248, 248, 1)',
      bodyTextSecondary: 'rgba(136, 136, 136, 1)',
      keyline: 'rgba(53, 54, 58, 1)',
      pageBackground: 'rgba(34, 34, 34, 1)',
    },
  },
}

export const defaultTheme = darkTheme

/*
TODO: Revert to this once theme initial load shenanigans figured out
export const getThemeForColorScheme = (colorScheme: ColorSchemePreference) => {
  if (colorScheme === 'no-preference') return defaultTheme

  return colorScheme === 'light' ? lightTheme : darkTheme
}
*/

export const getThemeForColorScheme = (_colorScheme: ColorSchemePreference) => {
  return defaultTheme
}

export const getInitialTheme = () =>
  getThemeForColorScheme(getPreferredColorScheme())

export const extractThemeColor = (theme: Theme) =>
  `#${rgbHex(theme.screen.colors.pageBackground).slice(0, 6)}`
