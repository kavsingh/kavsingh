export const darkTheme = {
  pageBackground: 'rgba(34, 34, 34, 1)',
  bodyText: 'rgba(222, 222, 222, 1)',
  bodyTextSecondary: 'rgba(136, 136, 136, 1)',
  keyline: 'rgba(53, 54, 58, 1)',
}

export const lightTheme = {
  pageBackground: 'rgba(255, 255, 255, 1)',
  bodyText: 'rgba(51, 51, 51, 1)',
  bodyTextSecondary: 'rgba(102, 102, 102, 1)',
  keyline: 'rgba(255, 238, 238, 1)',
}

export const screenTheme = { ...darkTheme }
export const printTheme = { ...lightTheme, bodyText: 'rgba(17, 17, 17, 1)' }
