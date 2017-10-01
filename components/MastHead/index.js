import React from 'react'
import PropTypes from 'prop-types'
import lifecycle from 'recompose/lifecycle'
import PrintIcon from 'react-icons/lib/md/print'
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
        </ul>
        <div
          style={
            onPrintClick ? {} : { visibility: 'hidden', pointerEvents: 'none' }
          }
        >
          <Button onClick={onPrintClick}>
            <div className="mastHead__print">
              <PrintIcon />
            </div>
          </Button>
        </div>
      </div>
    </SplitPanes>
    <style jsx>{`
      .mastHead {
        width: 100%;
      }

      .mastHead :global(h1),
      .mastHead :global(h2) {
        margin: 0 0 0.16em;
        padding: 0;
      }

      .mastHead :global(h1) {
        font-weight: 600;
        font-size: 1.5em;
      }

      .mastHead :global(h2) {
        font-weight: 400;
        font-size: 1em;
        color: #666;
      }

      .mastHead__content {
        position: relative;
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
        display: flex;
        align-items: center;
        font-size: 1.2em;
        height: 1.6em;
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

const print =
  typeof window !== 'undefined' &&
  typeof window.print === 'function' &&
  window.print

export default lifecycle({
  state: { onPrintClick: null },
  componentDidMount() {
    if (!print) return
    setTimeout(() => this.setState(() => ({ onPrintClick: () => print() })), 0)
  },
})(MastHead)
