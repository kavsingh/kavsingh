import { ReactNode } from 'react'

export const callIfFn = <T = ReactNode>(prop?: unknown): T =>
  typeof prop === 'function' ? prop() : prop
