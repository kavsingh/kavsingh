import React, { Children, isValidElement } from 'react'
import PropTypes from 'prop-types'

const Section = ({ children }) => {
  const [first, ...rest] = Children.toArray(children)

  return (
    <div className="Section">
      <div className="Section__leftPanel">
        {isValidElement(first) && first}
      </div>
      <div className="Section__rightPanel">
        {(rest || []).filter(el => isValidElement(el))}
      </div>
      <style jsx>{`
        .Section {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 28rem) {
          .Section {
            flex-direction: row;
          }

          .Section__leftPanel {
            flex: 0 0 30%;
            max-width: 30rem;
          }

          .Section__rightPanel {
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
