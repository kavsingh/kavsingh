import { ReactNode } from 'react'
import md from 'markdown-in-js'

interface AboutLink {
  type: string
  label: string
  print: boolean
  web: boolean
  url: string
}

export interface AboutContent {
  name: string
  profession: string
  links: AboutLink[]
  profile: ReactNode
}

const about: AboutContent = {
  name: 'Kanwaljeet Singh',
  profession: 'Front-end Developer',
  links: [
    {
      type: 'email',
      label: 'Email',
      print: true,
      web: true,
      url: 'mailto://flakisms@gmail.com',
    },
    {
      type: 'github',
      label: 'Github',
      print: true,
      web: true,
      url: 'https://github.com/kavsingh',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      print: true,
      web: true,
      url: 'https://linkedin.com/in/kav-singh',
    },
    {
      type: 'website',
      label: 'Website',
      print: true,
      web: false,
      url: '//kavsingh.com',
    },
  ],
  profile: md`
Developer from Australia building for web and mobile in Berlin. I'm enthusiastic about learning new web technologies and using them to build rich user experiences.

Over the years I have developed skills in:

- JavaScript | TypeScript: React (Native), Redux, MobX, Backbone
- CSS: CSS in JS, PostCss, pre-processors
- Server side: Node.js, PHP, some Python

I've dabbled in:

- Coding for interactive installations (OpenFrameworks, Arduino)
- Animation and sound design

And would like to learn more about:

- WebVR, WebAudio, and 3d apis
- Functional-friendly languages (Elm, ReasonML, Rust)
  `,
}

export default about
