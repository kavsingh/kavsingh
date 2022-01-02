import SplitPanes from '~/layouts/split-panes'

import {
  containerStyle,
  linksStyle,
  nameStyle,
  printLinkStyle,
  professionStyle,
  webLinkStyle,
} from './masthead.css'

import type { VoidFunctionComponent } from 'react'
import type { AboutContent } from '~/content/about'

const Masthead: VoidFunctionComponent<
  Partial<Omit<AboutContent, 'skills'>>
> = ({ name = '', profession = '', links = [] }) => {
  const printLinks = links.filter(({ print }) => print)
  const webLinks = links.filter(({ web }) => web)

  return (
    <div className={containerStyle}>
      <SplitPanes>
        <h1 className={nameStyle}>{name}</h1>
        <div>
          <h2 className={professionStyle}>{profession}</h2>
          <ul className={linksStyle}>
            {webLinks.map(({ url, label, type }) => (
              <li className={webLinkStyle} key={`${type}-web`}>
                <a href={url}>{label}</a>
              </li>
            ))}
            {printLinks.map(({ url, label, type }) => (
              <li className={printLinkStyle} key={`${type}-print`}>
                <a href={url}>
                  <strong>{label}</strong> {url.replace(/(^\w+:|^)\/\//, '')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SplitPanes>
    </div>
  )
}

export default Masthead
