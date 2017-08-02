import React from 'react'
import SplitPanes from '../../layouts/SplitPanes'
import { screenTheme, printTheme } from '../../style/color'
import { callIfFn } from '../../util/function'
import { renderable } from '../../propTypes'

const Section = ({ title, content }) => (
  <section className="section">
    <SplitPanes>
      <div className="section__titleContainer">
        <h1>{callIfFn(title)}</h1>
      </div>
      <div className="section__contentContainer">
        {callIfFn(content)}
      </div>
    </SplitPanes>
    <style jsx>{`
      .section {
        width: 100%;
      }

      .section__titleContainer,
      .section__contentContainer {
        position: relative;
        padding-top: 1.4em;
      }

      .section__titleContainer::before,
      .section__contentContainer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 0px;
        border-top: 1px dashed ${screenTheme.keyline};
      }

      .section__contentContainer::before {
        width: 50%;
      }

      .section__titleContainer h1 {
        font-size: 1.1em;
        font-weight: 700;
        margin: 0;
      }

      .section__contentContainer :global(article:not(:last-child)) {
        margin-bottom: 4.2em;
      }

      @media (min-width: 30rem) {
        .section__titleContainer::before {
          width: 10%;
        }
      }

      @media print {
        .section__titleContainer::before,
        .section__contentContainer::before {
          border-top: 1px dashed ${printTheme.keyline};
        }
      }
    `}</style>
  </section>
)

export default Section

Section.propTypes = {
  title: renderable,
  content: renderable,
}

Section.defaultProps = {
  title: () => null,
  content: () => null,
}
