import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ title, content }) => (
  <div className="Section">
    <div className="Section__titleContainer">
      <h2>{title()}</h2>
    </div>
    <div className="Section__contentContainer">
      {content()}
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

        .Section__titleContainer {
          flex: 0 0 30%;
          max-width: 30rem;
        }

        .Section__contentContainer {
          flex: 1 0 auto;
        }
      }
    `}</style>
  </div>
)

export default Section

Section.propTypes = {
  title: PropTypes.func,
  content: PropTypes.func,
}

Section.defaultProps = {
  title: () => null,
  content: () => null,
}
