import React from 'react'
import Styled from 'styled-components'

const About = () => {
  return (
    <AboutContainer>
      <h2>About</h2>
    </AboutContainer>
  )
}

const AboutContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  background-color: #5BA077;
  padding: 0 1rem;

  h2 {
    color: white;
  }
`

export default About