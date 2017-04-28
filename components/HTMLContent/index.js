import React from 'react'
import PropTypes from 'prop-types'

const HTMLContent = ({ children }) => (
  <div className="htmlContent">
    {children}
    <style jsx>{`
      .htmlContent :global(ul),
      .htmlContent :global(p) {
        margin: 0 0 0.6em;
      }

      .htmlContent :global(ul) {
        padding: 0;
      }

      .htmlContent :global(li) {
        list-style-type: none;
        margin: 0 0 0.2em;
        display: flex;
      }

      .htmlContent :global(li)::before {
        display: block;
        content: '\\2013';
        margin-right: 0.8em;
      }

      .htmlContent :global(a) {
        color: inherit;
      }

      @media print {
        .htmlContent :global(a) {
          text-decoration: none;
        }

        .htmlContent :global(a::after) {
          content: '[' attr(href) ']';
          margin-left: 0.4em;
        }
      }
    `}</style>
  </div>
)

HTMLContent.propTypes = {
  children: PropTypes.node,
}

HTMLContent.defaultProps = {
  children: '',
}

export default HTMLContent
