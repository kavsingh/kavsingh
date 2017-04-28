import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ title, content }) => (
  <section className="Section">
    <div className="Section__titleContainer">
      <h1>{title()}</h1>
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

      .Section__titleContainer,
      .Section__contentContainer {
        position: relative;
        padding-top: 1.4em;
      }

      .Section__titleContainer::before,
      .Section__contentContainer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        background-color: #ddd;
      }

      .Section__contentContainer::before {
        width: 50%;
      }

      .Section__titleContainer h1 {
        font-size: 1.1em;
        margin: 0;
      }

      .Section__contentContainer :global(article:not(:last-child)) {
        margin-bottom: 2em;
      }

      @media (min-width: 30rem) {
        .Section {
          width: 100%;
          flex-direction: row;
        }

        .Section__titleContainer {
          flex: 0 0 20%;
          max-width: 30rem;
          padding-right: 1em;
        }

        .Section__titleContainer::before {
          width: 10%;
        }

        .Section__contentContainer {
          flex: 1 0;
        }
      }
    `}</style>
  </section>
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
