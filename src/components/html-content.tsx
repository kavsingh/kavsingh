import { containerStyle } from './html-content.css'

import type { FC } from 'react'

const HTMLContent: FC = ({ children }) => (
  <div className={containerStyle}>{children}</div>
)

export default HTMLContent
