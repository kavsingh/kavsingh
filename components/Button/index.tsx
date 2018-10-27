import React from 'react'

const Button = (props: any) => {
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

export default Button
