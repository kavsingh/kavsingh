import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { MdPrint as PrintIcon } from 'react-icons/md'
import styled from '@emotion/styled'

import { AboutContent } from '~/content/about'
import SplitPanes from '~/layouts/SplitPanes'

import Button from '../Button'

type MastHeadProps = Partial<Omit<AboutContent, 'skills'>>

const MastHead: FunctionComponent<MastHeadProps> = ({
  name = '',
  profession = '',
  links = [],
}) => {
  const [printAvailable, setPrintAvailable] = useState(false)

  const handlePrintClick = useCallback(() => {
    if (printAvailable) window.print()
  }, [printAvailable])

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      setPrintAvailable(true)
    }
  }, [])

  const printLinks = links.filter(({ print }) => !!print)
  const webLinks = links.filter(({ web }) => !!web)

  return (
    <Container>
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
                printAvailable
                  ? {}
                  : { visibility: 'hidden', pointerEvents: 'none' }
              }
            >
              <Button onClick={handlePrintClick} aria-label="Print CV">
                <PrintIcon />
              </Button>
            </li>
          </ul>
        </div>
      </SplitPanes>
      <style jsx>{`
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
    </Container>
  )
}

export default MastHead

const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  h1,
  h2 {
    margin: 0 0 0.16em;
    padding: 0;
  }

  h1 {
    font-weight: 600;
    font-size: 1.5em;
  }

  h2 {
    color: #666;
    font-weight: 400;
    font-size: 1em;
  }
`
