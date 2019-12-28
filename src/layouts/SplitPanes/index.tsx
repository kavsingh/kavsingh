import React, {
  Children,
  isValidElement,
  FunctionComponent,
  ReactNode,
} from 'react'

const SplitPanes: FunctionComponent<{ children: ReactNode }> = ({
  children = [],
}) => {
  const [first, ...rest] = Children.toArray(children).filter(node =>
    isValidElement(node),
  )

  return (
    <div className="splitPanes">
      <div className="splitPanes__left">{first}</div>
      <div className="splitPanes__right">{rest}</div>
      <style jsx>{`
        .splitPanes {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 30rem) {
          .splitPanes {
            width: 100%;
            flex-direction: row;
          }

          .splitPanes__left {
            flex: 0 0 28%;
            max-width: 30rem;
            padding-right: 2em;
          }

          .splitPanes__right {
            flex: 1 0;
          }
        }
      `}</style>
    </div>
  )
}

export default SplitPanes
