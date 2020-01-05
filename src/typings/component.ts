import { FunctionComponent } from 'react'

export type ComponentPropsWithoutChildren<P> = P & { children?: never }

export type FunctionComponentWithoutChildren<P = {}> = FunctionComponent<
  ComponentPropsWithoutChildren<P>
>
