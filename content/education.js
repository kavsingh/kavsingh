import React from 'react' // eslint-disable-line
import md from 'markdown-in-js'

export default [
  {
    subject: 'BA (Animation and Interactive Media)',
    institutions: [
      {
        name: 'RMIT University',
        period: '2006 - 2008',
        status: 'graduated',
      },
    ],
    description: md`
Graduated with distinction. Final project, built using ActionScript 3, was awarded Best Interactive for the graduating year. A small group of students and I formed a collective called Projector Obscura which involved itself with VJ performances and projection festivals.
    `,
  },
  {
    subject: 'BEng. (Software) / BComm.',
    institutions: [
      {
        name: 'University of Melbourne',
        period: '2000 - 2002',
        status: 'attended',
      },
    ],
    description: md`
Completed modules in functional programming, object oriented programming and basic marketing.
    `,
  },
]
