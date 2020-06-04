import type { FunctionComponent } from 'react'

export type ComponentPropsWithoutChildren<P = Record<string, unknown>> = P & {
  children?: never
}

export type FCWithoutChildren<P = Record<string, unknown>> = FunctionComponent<
  ComponentPropsWithoutChildren<P>
>
