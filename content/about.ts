import React, { ReactNode } from 'react'
import md from 'markdown-in-js'

export interface AboutLink {
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
  skills: ReactNode
}

const content: AboutContent = {
  name: 'Kanwaljeet Singh',
  profession: 'Frontend Web Developer',
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
  skills: md`
- JavaScript / React Native, React, Redux, MobX, Backbone, jQuery
- CSS / Sass, Less, Stylus, PostCss, CSS in JS
- HTML / HTML5, Pug (Jade)
- experience with Node.js, PHP and Python.

My studies in Animation / Interactive Media have also provided grounding in drawing, design, sound and movement, as well as abilities in tools including Photoshop, Illustrator, After Effects, Maya and Ableton Live.
  `,
}

export default content
