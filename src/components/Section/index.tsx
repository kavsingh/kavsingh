import React, { ReactNode, FunctionComponent } from 'react'

import SplitPanes from '~/layouts/SplitPanes'
import { screenTheme, printTheme } from '~/style/color'
import { callIfFn } from '~/util/function'

export interface SectionProps {
  title: ReactNode | (() => ReactNode)
  content: ReactNode | (() => ReactNode)
}

const Section: FunctionComponent<SectionProps> = ({ title, content }) => (
  <section className="section">
    <SplitPanes>
      <div className="section__titleContainer">
        <h1>{callIfFn(title)}</h1>
      </div>
      <div className="section__contentContainer">{callIfFn(content)}</div>
    </SplitPanes>
    <style jsx>{`
      .section {
        width: 100%;
        padding-top: 2.4em;
        border-top: 1px solid ${screenTheme.keyline};
      }

      .section__titleContainer,
      .section__contentContainer {
        position: relative;
      }

      .section__titleContainer h1 {
        font-size: 1.1em;
        font-weight: 600;
        margin: 0 0 1em;
      }

      .section__contentContainer :global(article:not(:last-child)) {
        margin-bottom: 4.2em;
      }

      @media print {
        border-top-color: ${printTheme.keyline};
      }
    `}</style>
  </section>
)

export default Section
