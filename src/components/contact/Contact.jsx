import React from 'react';
import Styled from 'styled-components'

const Contact = () => {
  return (
    <ComponentContainer>
      <TextContainer>
        <h1>Let's connect!</h1>
        <p>A bunch of words telling you why you should drop me a line! And maybe a few more to say a couple other things, but keep it short.</p>
      </TextContainer>
      <LinkContainer>
        <a href="https://www.linkedin.com">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i class="fab fa-github"></i> 
        </a>
        <a href="https://www.linkedin.com">
          <i class="far fa-envelope"></i>
        </a>
      </LinkContainer>
    </ComponentContainer>
  )
}


// TODO: Create global components container to use across sections
const ComponentContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 0 1rem;

  h1 {
    /* border: 2px solid yellow; */
  }
`

const LinkContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid white; */
  width: 100%;
  padding: 1rem 0;
  /* margin-top: 2rem; */

  a {
    text-decoration: none;
    color: white;

    :hover {
      color: #FFCA25;
      transition: .2s ease;
      /* border: 2px solid red; */
    }

    i {
    font-size: 5rem;
    margin: 1rem;
    transition: .2s ease;
    }
  }
`

export default Contact