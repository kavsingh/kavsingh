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
  description: ReactNode
}

const about: AboutContent = {
  name: 'Kanwaljeet Singh',
  profession: 'Frontend Developer',
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
  description: md`
Developer from Australia building for web and mobile in Berlin. Over the years I have learnt:

- JavaScript: React (Native), Redux, MobX, Backbone
- CSS: CSS in JS, PostCss, Pre-processors
- Experience with Node.js, PHP and Python.
  `,
}

export default about
