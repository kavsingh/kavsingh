import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
})

globalStyle('html, body', {
  width: '100%',
  minHeight: '100%',
  margin: 0,
  padding: 0,
})

globalStyle('html', {
  'boxSizing': 'border-box',
  'fontSize': '16px',
  '@media': {
    print: {
      fontSize: '10px',
    },
  },
})
