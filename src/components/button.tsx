import classNames from 'classnames'

import { containerStyle } from './button.css'

import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => (
  <button className={classNames(containerStyle, className)} {...props}>
    {children}
  </button>
)

export default Button
