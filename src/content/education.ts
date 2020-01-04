import { ReactNode } from 'react'
import md from 'markdown-in-js'

export interface EducationContent {
  slug: string
  institution: string
  subject: string
  period: string
  status: 'graduated' | 'attended'
  location: string
  active: boolean
  print: boolean
  description: ReactNode
}

const education: EducationContent[] = [
  {
    slug: 'rmit-university',
    institution: 'RMIT University',
    subject: 'BA (Animation and Interactive Media)',
    period: '2006 - 2008',
    status: 'graduated',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Graduated with distinction. Final project was awarded Best Interactive for the graduating year.
    `,
  },
  {
    slug: 'university-of-melbourne',
    institution: 'University of Melbourne',
    subject: 'BEng. (Software) / BComm.',
    period: '2000 - 2002',
    status: 'attended',
    location: 'Melbourne, Australia',
    active: true,
    print: true,
    description: md`
Completed modules in functional programming, object oriented programming and basic marketing.
    `,
  },
]

export default education
