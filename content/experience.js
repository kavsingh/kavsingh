import React from 'react' // eslint-disable-line
import md from 'markdown-in-js'

export default [
  {
    position: 'Front End Developer',
    employers: [
      {
        name: 'Cape Horizon',
        period: 'July 2013 - Present',
      },
    ],
    description: md`
Working with a startup building apps for families. [OurHome](http://ourhomeapp.com) for families.
  * Responsible for front end architecture and build, occasionally tasked with designing UI components and animations.
  * Both apps are built on the same codebase and deployed across iOS and Android via Cordova. This has meant dealing with deployment fragmentation and making engineering decisions to address device/webview implementation quirks.
  * Both apps are available in 6 languages (English, Chinese, Japanese, French, German and Spanish) requiring internationalisation and translation management strategies.
  * BackboneJS / RequireJS modules / SASS with Bourbon / Underscore HTML templates
  * Grunt build system along with Fab to automate builds / deployment
  * Working with a small team of developers has had the added benefit of insight into the implementation of the Python (via Django) API.
  * Websites implemented using Coffeescript / RequireJS / Stylus, built using Gulp, served via Node on AWS
    `,
  },
  {
    position: 'Web Developer (Contract)',
    employers: [
      {
        name: 'Tundra Interactive',
        period: 'June 2013 - July 2013',
      },
      {
        name: 'CHE Proximity',
        period: 'June 2013',
      },
      {
        name: 'Clemenger BBDO',
        period: 'March 2013',
      },
    ],
    description: md`
Worked on a range of projects including small, mobile-centric pages, HTML/JS iPad kiosk UIs, Facebook page integrations and full websites. Generally contracted for work on the front end but occasionally implemented functionality in PHP backends. My time in contracting was invaluable, having exposed me to a variety of tech stacks, workflows and cultures.
    `,
  },
  {
    position: 'Front End Developer',
    employers: [
      {
        name: 'Someone\'s',
        period: 'Mar 2012 - Dec 2012',
      },
    ],
    description: md`
UI prototyping and front end build for a large scale web application, for use in desktop browsers.
* Involved with redesigning UX flows and creating functional prototypes for testing and review, before moving to the front end production team.
* Client facing app was built around BackboneJS and styled using vanilla CSS.
* Tested using Selenium
* Development process was conducted in line with agile methodologies and involved close communication with the back end team to spec out API requirements.
    `,
  },
  {
    position: 'Web Developer / Animator',
    employers: [
      {
        name: 'Sense Advertising',
        period: 'Aug 2009 - Mar 2012',
      },
    ],
    description: md`
Created a range of digital content augmenting broader advertising campaigns - largely Flash banners and micro-sites, EDMs, and HTML / JS websites for a variety of clients.
* Having started as the sole web developer, the role involved close collaboration with creative and design teams in order to best meet client needs and expectations.
* Extensive work with Wordpress along with managing some custom client CMSs.
* While in the role I headed a small team in creating animations and web assets for an iPad based Sensis application, requiring the production of animations to tight deadlines and ensuring that HTML, CSS, JavaScript and video assets integrated with Sensis' application.
    `,
  },
]
