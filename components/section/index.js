import React, { Children, isValidElement } from 'react'
import PropTypes from 'prop-types'

const Section = ({ children }) => {
  const [first, ...rest] = Children.toArray(children)

  return (
    <div className="root">
      <div className="description">
        {isValidElement(first) && first}
      </div>
      <div className="content">
        {(rest || []).filter(el => isValidElement(el))}
      </div>
      <style jsx>{`
        .root {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 28rem) {
          .root {
            flex-direction: row;
          }

          .description {
            flex: 0 0 30%;
            max-width: 30rem;
          }

          .content {
            flex: 1 0 auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Section

Section.propTypes = {
  children: PropTypes.node,
}

Section.defaultProps = {
  children: [],
}
