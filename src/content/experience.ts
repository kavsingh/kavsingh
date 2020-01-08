import { ReactNode } from 'react'
import md from 'markdown-in-js'

export interface ExperienceContent {
  slug: string
  employer: string
  position: string
  period: string
  location: string
  active: boolean
  print: boolean
  description: ReactNode
}

const experience: ExperienceContent[] = [
  {
    slug: '8fit',
    employer: '8fit',
    position: 'Senior Engineer',
    period: 'December 2017 - Present',
    location: 'Berlin, Germany',
    active: true,
    print: true,
    description: md`
[8fit](https://8fit.com) is a health and fitness app based in Berlin.

- React Native + TypeScript app
- Web project with Gatsby + GraphQL against Contentful CMS
    `,
  },
  {
    slug: 'our-home',
    employer: 'OurHome',
    position: 'Front-end Developer (Co-Founder / CDO)',
    period: 'July 2013 - Present',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
[OurHome](http://ourhomeapp.com) is an app to help families organise their households. It is available on iOS, Android, and as a web app.

- Cordova app built on Backbone. Code has evolved over time to incorporate ideas from modern libraries. Slowly transitioning to React.
- Oversight of visual finish with strong say in design decisions, and involvement with responding to user feedback.
- Mobile-first design, dealing with deployment fragmentation and making engineering / design decisions to address device and webview implementation quirks.
- Working in a small team of developers has allowed insight into the implementation of the Python (Django) API.
    `,
  },
  {
    slug: 'che-proximity-2017',
    employer: 'CHE Proximity',
    position: 'Senior Front-end Developer (Freelance)',
    period: 'November 2016 - February 2017',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
In addition to maintenance work on campaign sites across stacks (from PHP to Node, SASS to PostCss, Gulp to Webpack), I worked in a front-end team developing the new Mazda Digital Platform. It serves as the flagship [Mazda Australia site](https://mazda.com.au) and allows dealers and content creators to assemble their own campaign and promotion pages.

- ES2016+ using React and Redux, bundled with Webpack, tested with Jest.
- Server rendered React via EpiServer
- Aside from feature implementation and bug fixes, my major contributions include integrating Redux for state management across multiple React mount points, and implementing higher order components to reuse common behaviours.
    `,
  },
  {
    slug: 'inspire-group',
    employer: 'Inspire Group',
    position: 'Front-end Developer (Freelance)',
    period: '2015 - 2016 (Recurring work)',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Worked on a number of online education modules which required a high degree of interactivity while offering responsive layouts which worked across devices.

- Worked closely with education and UI designers to ensure that designs were technically feasible without compromising on learning outcomes.
- Courses were often hosted on legacy LMS providers which sometimes meant projects had to build to multiple deploy targets.
    `,
  },
  {
    slug: 'agent-select',
    employer: 'AgentSelect.com.au',
    position: 'Front-end Developer (Freelance)',
    period: 'May 2015',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Helped build out front end api communication for exisiting web site. Worked with previously implemented stack - jQuery, Bootstrap et al.
    `,
  },
  {
    slug: 'savi',
    employer: 'Savi',
    position: 'Front-end Developer (Freelance)',
    period: 'June 2014',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Developed an iPad kiosk app running a Backbone SPA on a device-local PHP server. The app ran continuously in a local apartment developer's sales showroom, allowing users to collect a set of images and floorplans which they could then email to any address.
    `,
  },
  {
    slug: 'tundra-interactive',
    employer: 'Tundra Interactive',
    position: 'Front-end Developer (Freelance)',
    period: 'June - July 2013',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
- Built a webpage for well known local bar. Built the front end and server side image manipulation module (PHP + ImageMagick), where Instagram photos tagged with the bar's name were heavily processed for display on the webpage.
- Built Promotional pages for integration with Facebook with custom interactions.
    `,
  },
  {
    slug: 'che-proximity-2013',
    employer: 'CHE Proximity',
    position: 'Front-end Developer (Freelance)',
    period: 'June 2013',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Built an online financial questionnaire (Backbone.js + Sass/Bourbon). Required compatibility with browsers down to IE8 and needed to work across desktop and mobile devices. Worked fairly independently on a quick turnaround.
    `,
  },
  {
    slug: 'clemenger-bbdo',
    employer: 'Clemenger BBDO',
    position: 'Front-end Developer (Freelance)',
    period: 'March - April 2013',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Created an interactive mobile web experience. Users were able to view 3D panoramas of dream holiday locations on their mobile devices, and share these locations (with soundscapes) with their friends. The campaign needed to be accessible and performant across a broad range of mobile devices.
    `,
  },
  {
    slug: 'someones-media-group',
    employer: 'Someones Media Group',
    position: 'Designer / Front-end Developer',
    period: 'March - December 2012',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
UI prototyping and front end build for a large scale web application.

- Involved with re-designing the application's user flows from the ground up.
- Created mockups and functional prototypes for testing and review
- Joined production dev team as a junior.
    `,
  },
  {
    slug: 'sense-advertising',
    employer: 'Sense Advertising',
    position: 'Digital Designer / Animator / Front-end Developer',
    period: 'August 2009 - March 2012',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
- Created a broad range of web-centric digital content to augment advertising campaigns, including CMS (wordpress) powered sites, Flash interactives.
- Headed a small team in the creation of web assets and animations for an iPad based project used internally by a large telco.
    `,
  },
]

export default experience
