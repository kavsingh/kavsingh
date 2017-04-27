import React from 'react'
import Section from '../Section'


const Experience = ({ employers, description, position }) => (
  <Section>
    <ul>{
      employers.map(({ name, period }) => (
        <li>
          <h3>{name}</h3>
          {period}
        </li>
      ))
    }</ul>
    <div>
      <h2>{position}</h2>
      {description}
    </div>
  </Section>
)

export default Experience
