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
        <Header>
          <h1>{name}</h1>
          <h2>{profession}</h2>
        </Header>
        <Content>
          <ProfilePhoto>
            <img src="static/pic.png" alt="Kav Singh" />
          </ProfilePhoto>
          <Links>
            {webLinks.map(({ url, label, type }) => (
              <WebLinkContainer key={`${type}-web`}>
                <a href={url}>{label}</a>
              </WebLinkContainer>
            ))}
            {printLinks.map(({ url, label, type }) => (
              <PrintLinkContainer key={`${type}-print`}>
                <a href={url}>
                  <strong>{label}</strong> {url.replace(/(^\w+:|^)\/\//, '')}
                </a>
              </PrintLinkContainer>
            ))}
            <PrintButtonWrapper key="print" visible={printAvailable}>
              <Button onClick={handlePrintClick} aria-label="Print CV">
                <PrintIcon />
              </Button>
            </PrintButtonWrapper>
          </Links>
        </Content>
      </SplitPanes>
    </Container>
  )
}

export default MastHead

const Container = styled.div`
  width: 100%;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

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

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const ProfilePhoto = styled.div`
  height: 8em;
  margin-right: 1em;

  & > img {
    width: auto;
    height: 100%;
  }
`

const Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    color: currentColor;
  }
`

const WebLinkContainer = styled.li`
  @media print {
    display: none;
  }
`

const PrintLinkContainer = styled.li`
  margin-bottom: 0.2em;

  a {
    text-decoration: none;

    strong {
      display: inline-block;
      margin-right: 0.2em;
      font-weight: 500;
    }
  }

  @media screen {
    display: none;
  }
`
const PrintButtonWrapper = styled.li<{ visible: boolean }>`
  display: flex;
  align-items: center;
  height: 1.4em;
  margin-bottom: -1.4em;
  font-size: 1.2em;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 200ms ease-out;
  pointer-events: ${({ visible }) => (visible ? 'initial' : 'none')};

  @media print {
    display: none;
  }
`