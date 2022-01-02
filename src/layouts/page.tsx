import { containerStyle, contentStyle } from './page.css'

import type { FC } from 'react'

const Page: FC = ({ children }) => (
  <div className={containerStyle}>
    <div className={contentStyle}>{children}</div>
  </div>
)

export default Page
