import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { children, ...passProps } = props

  return (
    <button {...passProps} className="button" type="button">
      {children}
      <style jsx>{`
        .button {
          border: none;
          background: transparent;
          font: inherit;
          color: inherit;
          cursor: pointer;
          text-align: inherit;
          padding: 0;
          margin: 0;
          outline: none;
        }

        .button:focus,
        .button:active {
          outline: none;
        }
      `}</style>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: [],
}

export default Button
