import React, { PureComponent } from 'react'
import { MdPrint as PrintIcon } from 'react-icons/md'

import { AboutContent } from '~/content/about'
import SplitPanes from '~/layouts/SplitPanes'

import Button from '../Button'

type MastHeadProps = Partial<Omit<AboutContent, 'skills'>>

interface MastHeadState {
  onPrintClick?(): void
}

export default class MastHead extends PureComponent<
  MastHeadProps,
  MastHeadState
> {
  state: MastHeadState = {}

  static getDerivedStateFromProps(_: never, state: MastHeadState) {
    if (typeof state.onPrintClick === 'function') return null

    const print =
      typeof window !== 'undefined' &&
      typeof window.print === 'function' &&
      window.print

    return typeof print === 'function' ? { onPrintClick: () => print() } : null
  }

  render() {
    const { name = '', profession = '', links = [] } = this.props
    const { onPrintClick } = this.state
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
}
