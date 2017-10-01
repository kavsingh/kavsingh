import React from 'react'
import PropTypes from 'prop-types'
import lifecycle from 'recompose/lifecycle'
import PrintIcon from 'react-icons/lib/md/print'
import { screenTheme } from '../../style/color'
import SplitPanes from '../../layouts/SplitPanes'
import HTMLContent from '../HTMLContent'
import Button from '../Button'

const MastHead = ({ name, profession, links, onPrintClick }) => (
  <div className="mastHead">
    <SplitPanes>
      <header>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </header>
      <div className="mastHead__content">
        <div className="masthead__profilePhoto">
          <img src="static/pic.png" alt="Kav Singh" />
        </div>
        <ul className="mastHead__links">
          {links.map((link, i) => (
            // links are react nodes so there's nothing reliable we can use
            // here. use index for the time being.
            // @todo: Some other thing
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <HTMLContent>{link}</HTMLContent>
            </li>
          ))}
          <li
            key="print"
            className="mastHead__print"
            style={
              onPrintClick
                ? {}
                : { visibility: 'hidden', pointerEvents: 'none' }
            }
          >
            <Button onClick={onPrintClick}>
              <PrintIcon />
            </Button>
          </li>
        </ul>
      </div>
    </SplitPanes>
    <style jsx>{`
      .mastHead {
        width: 100%;
      }

      .mastHead header {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .mastHead h1,
      .mastHead h2 {
        margin: 0 0 0.16em;
        padding: 0;
      }

      .mastHead h1 {
        font-weight: 600;
        font-size: 1.5em;
      }

      .mastHead h2 {
        font-weight: 400;
        font-size: 1em;
        color: #666;
      }

      .mastHead__content {
        display: flex;
        width: 100%;
        align-items: center;
      }

      .mastHead__links {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .mastHead__links :global(li),
      .mastHead__links :global(p) {
        margin: 0 !important;
        padding: 0;
      }

      .mastHead__print {
        {/* display: flex; */}
        display: none;
        align-items: center;
        font-size: 1.2em;
        height: 1.6em;
      }

      {/* .mastHead__print :global(svg) {
        fill: transparent;
        stroke: ${screenTheme.bodyText};
        stroke-width: 0.5;
        transition: fill 0.2s ease-out;
      }

      .mastHead__print :global(svg):hover {
        fill: ${screenTheme.bodyText};
        stroke: ${screenTheme.bodyText};
      } */}

      .masthead__profilePhoto {
        height: 8em;
        margin-right: 1em;
      }

      .masthead__profilePhoto img {
        height: 100%;
        width: auto;
      }

      @media print {
        .mastHead__print {
          display: none;
        }
      }
    `}</style>
  </div>
)

MastHead.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  onPrintClick: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ),
}

MastHead.defaultProps = {
  name: '',
  profession: '',
  onPrintClick: null,
  links: [],
}

export default lifecycle({
  state: { onPrintClick: null },
  componentDidMount() {
    const print =
      typeof window !== 'undefined' &&
      typeof window.print === 'function' &&
      window.print

    if (!print) return

    setTimeout(() => this.setState(() => ({ onPrintClick: () => print() })), 0)
  },
})(MastHead)
