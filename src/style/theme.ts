import rgbHex from 'rgb-hex'

import {
  getPreferredColorScheme,
  ColorSchemePreference,
} from '~/lib/color-scheme'

interface ThemeColors {
  bodyText: string
  bodyTextSecondary: string
  keyline: string
  pageBackground: string
}

interface MediaTypeTheme {
  colors: ThemeColors
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
  colors: {
    bodyText: 'rgba(17, 17, 17, 1)',
    bodyTextSecondary: 'rgba(102, 102, 102, 1)',
    keyline: 'rgba(255, 238, 238, 1)',
    pageBackground: 'rgba(255, 255, 255, 1)',
  },
}

export const lightTheme: Theme = {
  print,
  name: 'light',
  screen: {
    colors: {
      bodyText: 'rgba(51, 51, 51, 1)',
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
    colors: {
      bodyText: 'rgba(222, 222, 222, 1)',
      bodyTextSecondary: 'rgba(136, 136, 136, 1)',
      keyline: 'rgba(53, 54, 58, 1)',
      pageBackground: 'rgba(34, 34, 34, 1)',
    },
  },
}

export const defaultTheme = darkTheme

export const getThemeForColorScheme = (colorScheme: ColorSchemePreference) => {
  if (colorScheme === 'no-preference') return defaultTheme

  return colorScheme === 'light' ? lightTheme : darkTheme
}

export const getInitialTheme = () =>
  getThemeForColorScheme(getPreferredColorScheme())

export const extractThemeColor = (theme: Theme) =>
  `#${rgbHex(theme.screen.colors.pageBackground).slice(0, 6)}`
