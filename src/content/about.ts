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
  profile: string
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
  profile: `
Developer building for web and mobile in Berlin. I'm enthusiastic about learning new web technologies and using them to build rich user experiences.

Over the years I have developed skills in:

- JavaScript | TypeScript: Vanilla and frameworks, especially React (Native), Redux, MobX, Backbone
- CSS: CSS in JS, PostCss, pre-processors
- Some server side (non Production): Node.js, PHP
  `,
}

export default about
