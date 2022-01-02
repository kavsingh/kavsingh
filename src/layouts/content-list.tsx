import { Children, Fragment } from 'react'

import { spacerStyle } from './content-list.css'

import type { FC } from 'react'

const ContentList: FC = ({ children }) => (
  <>
    {Children.toArray(children).map((child, i) =>
      i > 0 ? (
        <Fragment key={`fragment-${i}`}>
          <div className={spacerStyle} />
          {child}
        </Fragment>
      ) : (
        child
      ),
    )}
  </>
)

export default ContentList
