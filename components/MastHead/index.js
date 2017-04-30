import React from 'react'
import PropTypes from 'prop-types'
import SplitPanes from '../../layouts/SplitPanes'
import HTMLContent from '../HTMLContent'

const MastHead = ({ name, profession, links }) => (
  <div className="mastHead">
    <SplitPanes>
      <header>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </header>
      <ul className="mastHead__links">
        {links.map((link, i) =>
          // links are react nodes so there's nothing reliable we can use
          // here. use index for the time being.
          // @todo: Some other thing
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}><HTMLContent>{link}</HTMLContent></li>)}
      </ul>
    </SplitPanes>
    <style jsx>{`
      .mastHead {
        width: 100%;
      }

      .mastHead :global(h1),
      .mastHead :global(h2) {
        margin: 0 0 0.2em;
        padding: 0;
      }

      .mastHead :global(h1) {
        font-size: 1.5em;
      }

      .mastHead :global(h2) {
        font-size: 1.1em;
        color: #666;
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
    `}</style>
  </div>
)

MastHead.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ),
}

MastHead.defaultProps = {
  name: '',
  profession: '',
  links: [],
}

export default MastHead
