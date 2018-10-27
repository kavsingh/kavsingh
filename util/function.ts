import { ReactNode } from 'react'

export const callIfFn = <T = ReactNode>(prop?: any): T =>
  typeof prop === 'function' ? prop() : prop
