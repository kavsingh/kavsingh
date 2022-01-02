import { useContext } from 'react'

import { ThemeContext } from '~/style/theme-context'

import { containerStyle, contentStyle } from './page.css'

import type { FC } from 'react'

const Page: FC = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${containerStyle} ${theme}`}>
      <div className={contentStyle}>{children}</div>
    </div>
  )
}

export default Page
