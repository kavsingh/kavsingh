import React from 'react' // eslint-disable-line
import md from 'markdown-in-js'

export default [
  {
    employer: 'OurHome',
    position: 'Co-Founder / CDO / Frontend Developer',
    period: 'July 2013 - Present',
    location: 'Melbourne, Australia',
    description: md`
[OurHome](http://ourhomeapp.com) is an app to help families organise their households and incentivise contribution, available on iOS and Android (via Cordova) as well as in-browser.
* Built on Backbone, code has evolved over time to incorporate ideas from modern libraries (like redux) as well as transitioned to ES2016+.
* My role as CDO includes oversight of visual finish with strong say in design decisions, and involvement with responding to user feedback.
* With our main deployment focus being the iOS and Android app stores, design has always been mobile-first. From a technical view it has also meant dealing with deployment fragmentation, and making engineering / design decisions to address device and webview implementation quirks.
* Working in a small team of developers has had the added benefit of insight into the implementation of the Python (Django) API.
    `,
  },
  {
    employer: 'CHE Proximity',
    position: 'Senior Frontend Developer (Freelance)',
    period: 'November 2016 - February 2017',
    location: 'Melbourne, Australia',
    description: md`
In addition to maintenance work on campaign sites across stacks (from PHP to Node, SASS to PostCss, Gulp to Webpack), I worked in a front-end team developing the new Mazda Digital Platform. It serves as the flagship [Mazda Australia site](https://mazda.com.au) and allows dealers and content creators to assemble their own campaign and promotion pages.
* ES2016+ using React and Redux, bundled with Webpack, tested with Jest.
* Server rendered React via EpiServer
* Aside from feature implementation and bug fixes, my major contributions include integrating Redux for state management across multiple React mount points, and implementing higher order components to reuse common behaviours.

    `,
  },
  {
    employer: 'Inspire Group',
    position: 'Frontend Developer (Freelance)',
    period: '2015 - 2016 (Recurring work)',
    location: 'Melbourne, Australia',
    description: md`
Worked on a number of online education modules which required a high degree of interactivity while offering responsive layouts which worked across devices.
* Worked closely with education and UI designers to ensure that designs were technically feasible without compromising on learning outcomes.
* Courses were often hosted on legacy LMS providers which sometimes meant projects had to build to multiple deploy targets, needing abstractions over LMS apis which helped minimise code divergence.
    `,
  },
  {
    employer: 'Someone’s',
    position: 'Designer / FrontEnd Developer',
    period: 'March 2012 - December 2012',
    location: 'Melbourne, Australia',
    description: md`
UI prototyping and front end build for a large scale web application. Involved with re-designing the application's user flows from the ground up creating wireframes, mockups and functional prototypes for testing and review, after which I was involved in the production build implementation.
    `,
  },
  {
    employer: 'Sense Advertising',
    position: 'Digital Designer / Animator / Front End Developer',
    period: 'August 2009 - March 2012',
    location: 'Melbourne, Australia',
    description: md`
A range of web-centric digital content creation, augmenting broader advertising campaigns. These were largely Flash banners, EDMs, and small-scale websites for a variety of clients. Sites often used Wordpress where clients required a CMS. While in this role I headed a small team in the creation of web assets and animations for an iPad based Sensis project. This involved producing numerous animations to tight deadlines, and ensuring that HTML, CSS, JavaScript and video assets integrated well with Sensis’ iPad application.
    `,
  },
]
