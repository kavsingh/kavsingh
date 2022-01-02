import { Children, isValidElement } from 'react'

import {
  containerStyle,
  leftPaneStyle,
  rightPaneStyle,
} from './split-panes.css'

import type { FC } from 'react'

const SplitPanes: FC = ({ children }) => {
  const [first, ...rest] = Children.toArray(children).filter(isValidElement)

  return (
    <div className={containerStyle}>
      <div className={leftPaneStyle}>{first}</div>
      <div className={rightPaneStyle}>{rest}</div>
    </div>
  )
}

export default SplitPanes
