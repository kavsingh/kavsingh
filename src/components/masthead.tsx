import React, { useState, useEffect, useCallback } from 'react'
import { MdPrint as PrintIcon } from 'react-icons/md'
import styled from '@emotion/styled'

import { FunctionComponentWithoutChildren } from '~/typings/component'
import { AboutContent } from '~/content/about'
import SplitPanes from '~/layouts/split-panes'
import { breakpointLarge } from '~/style/breakpoints'
import { ThemeProps } from '~/style/theme'

import Button from './button'

const Masthead: FunctionComponentWithoutChildren<Partial<
  Omit<AboutContent, 'skills'>
>> = ({ name = '', profession = '', links = [] }) => {
  const [printAvailable, setPrintAvailable] = useState(false)

  const handlePrintClick = useCallback(() => {
    if (printAvailable) window.print()
  }, [printAvailable])

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      setPrintAvailable(true)
    }
  }, [])

  const printLinks = links.filter(({ print }) => print)
  const webLinks = links.filter(({ web }) => web)

  return (
    <Container>
      <SplitPanes>
        <Name>{name}</Name>
        <Content>
          <Profession>{profession}</Profession>
          <Links>
            {webLinks.map(({ url, label, type }) => (
              <WebLinkContainer key={`${type}-web`}>
                <a href={url}>{label}</a>
              </WebLinkContainer>
            ))}
            <PrintButtonWrapper key="print" visible={printAvailable}>
              <Button onClick={handlePrintClick} aria-label="Print CV">
                <PrintIcon />
              </Button>
            </PrintButtonWrapper>
            {printLinks.map(({ url, label, type }) => (
              <PrintLinkContainer key={`${type}-print`}>
                <a href={url}>
                  <strong>{label}</strong> {url.replace(/(^\w+:|^)\/\//, '')}
                </a>
              </PrintLinkContainer>
            ))}
          </Links>
        </Content>
      </SplitPanes>
    </Container>
  )
}

export default Masthead

const Container = styled.div<ThemeProps>`
  width: 100%;
  padding-bottom: 2em;

  ${breakpointLarge} {
    padding-bottom: ${({ theme }) => theme.screen.layout.spacingVertical};
  }

  @media print {
    padding-bottom: ${({ theme }) => theme.print.layout.spacingVertical};
  }
`

const Name = styled.h1<ThemeProps>`
  margin: 0 0 0.6em;
  padding: 0;
  color: ${({ theme }) => theme.screen.colors.bodyTextEmphasis};
  font-weight: 600;
  font-size: 1.4em;

  @media print {
    color: ${({ theme }) => theme.print.colors.bodyTextEmphasis};
  }
`

const Profession = styled.h2<ThemeProps>`
  margin: 0 0 0.6em;
  padding: 0;
  color: ${({ theme }) => theme.screen.colors.bodyTextSecondary};
  font-weight: 400;
  font-size: 1.2em;

  @media print {
    color: ${({ theme }) => theme.print.colors.bodyTextSecondary};
  }
`

const Content = styled.div`
  width: 100%;
`

const Links = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    color: currentColor;
  }

  @media print {
    flex-direction: column;
  }
`

const WebLinkContainer = styled.li`
  margin-right: 1.2em;

  @media print {
    display: none;
  }
`

const PrintLinkContainer = styled.li`
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
const PrintButtonWrapper = styled.li<ThemeProps & { visible: boolean }>`
  display: none;
  color: ${({ theme }) => theme.screen.colors.bodyTextSecondary};
  font-size: 1.2em;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 200ms ease-out, color 200ms ease-out;
  pointer-events: ${({ visible }) => (visible ? 'initial' : 'none')};

  :hover {
    color: currentColor;
  }

  ${breakpointLarge} {
    display: block;
  }

  @media print {
    display: none;
  }
`
