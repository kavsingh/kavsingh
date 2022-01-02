import type { ReactNode } from 'react'

declare module 'markdown-in-js' {
  const mdInJs: (input: StringLiteral) => ReactNode

  export default mdInJs
}
