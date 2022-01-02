import SplitPanes from '~/layouts/split-panes'

import { containerStyle, titleStyle } from './section.css'

import type { ReactNode, VoidFunctionComponent } from 'react'

const Section: VoidFunctionComponent<{
  title: ReactNode
  content: ReactNode
  split?: boolean
}> = ({ title, content, split = true }) => (
  <section className={containerStyle}>
    {split ? (
      <SplitPanes>
        <h2 className={titleStyle}>{title}</h2>
        <div>{content}</div>
      </SplitPanes>
    ) : (
      <>
        <h2 className={titleStyle}>{title}</h2>
        <div>{content}</div>
      </>
    )}
  </section>
)

export default Section
