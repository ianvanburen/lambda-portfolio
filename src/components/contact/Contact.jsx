import React from 'react';
import Styled from 'styled-components'

const Contact = () => {
  return (
    <ComponentContainer>
      <TextContainer>
        <h1>Let's connect!</h1>
        <p>A bunch of words telling you why you should drop me a line! And maybe a few more to say a couple other things, but keep it short.</p>
      </TextContainer>
    </ComponentContainer>
  )
}


// TODO: Create global components container to use across sections
const ComponentContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #386C99;
  color: white;
  padding: 0 3rem;
  /* margin: 1rem 0; */
`

const TextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid white;

  h1 {
    /* border: 2px solid yellow; */
  }
`

export default Contact