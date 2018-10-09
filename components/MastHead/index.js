import React from 'react'
import PropTypes from 'prop-types'
import lifecycle from 'recompose/lifecycle'
import { MdPrint as PrintIcon } from 'react-icons/md'
import SplitPanes from '../../layouts/SplitPanes'
import Button from '../Button'

const MastHead = ({ name, profession, links, onPrintClick }) => {
  const printLinks = links.filter(({ print }) => !!print)
  const webLinks = links.filter(({ web }) => !!web)

  return (
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
            {webLinks.map(({ url, label, type }) => (
              <li
                className="mastHead__link mastHead__link_web"
                key={`${type}-web`}
              >
                <a href={url}>{label}</a>
              </li>
            ))}
            {printLinks.map(({ url, label, type }) => (
              <li
                className="mastHead__link mastHead__link_print"
                key={`${type}-print`}
              >
                <a href={url}>
                  <strong>{label}</strong> {url.replace(/(^\w+:|^)\/\//, '')}
                </a>
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
              <Button onClick={onPrintClick} aria-label="Print CV">
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

        .mastHead__link a {
          color: currentColor;
        }

        .mastHead__link_print {
          margin-bottom: 0.2em;
        }

        .mastHead__link_print a {
          color: currentColor;
          text-decoration: none;
        }

        .mastHead__link_print a strong {
          display: inline-block;
          font-weight: 500;
          margin-right: 0.2em;
        }

        .mastHead__print {
          display: flex;
          align-items: center;
          font-size: 1.2em;
          height: 1.4em;
          margin-bottom: -1.4em;
        }

        .masthead__profilePhoto {
          height: 8em;
          margin-right: 1em;
        }

        .masthead__profilePhoto img {
          height: 100%;
          width: auto;
        }

        @media screen {
          .mastHead__link_print {
            display: none;
          }
        }

        @media print {
          .mastHead__link_web {
            display: none;
          }

          .mastHead__print {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

MastHead.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  onPrintClick: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string,
      print: PropTypes.bool,
      web: PropTypes.bool,
      url: PropTypes.string,
    }),
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
