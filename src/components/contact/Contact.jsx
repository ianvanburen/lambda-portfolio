import React from 'react';
import Styled from 'styled-components'


const Contact = () => {
  return (
    <Wrapper>
      <ContactContainer id="Contact" >
        <TextContainer>
          <h1>Give me a shout!</h1>
          <p>Thanks for stopping by! If you think I might be someone you'd like to work with, I'd love to hear from you. I promise to get back to you as soon I can.</p>
        </TextContainer>
        <LinkContainer>
          <a 
            href="https://www.linkedin.com/in/laurence-van-buren/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/IVB107" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> 
          </a>
          <a 
            href="mailto:laurence.vanburen@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
        </LinkContainer>
        <a id="rick" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Clap your hands!</a>
      </ContactContainer>
      <Footer>
        <p>{`Design / Build © ${new Date().getFullYear()} Laurence Van Buren`}</p>
      </Footer>
    </Wrapper>
  )
}


const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #386C99;
  height: 100vh;
`

// TODO: Create global Component container to use across sections
const ContactContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex-grow: 1;
  /* padding: 0 3rem; */
  /* margin: 1rem 0; */

  #rick {
    color: white;
    text-decoration: none;
    margin: 1rem 0;
    padding: .5rem;
    border: 2px solid white;
    border-radius: .5rem;
    transition: .2s ease;

    &:hover {
      border: 2px solid rgba(255, 255, 255, 0);
      transition: .2s ease;
    }
  }
`

const TextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 70%;
  /* padding: 0 1rem; */
`

const LinkContainer = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid white; */
  width: 70%;
  padding: 1rem 0;
  margin: 1rem 0;

  a {
    text-decoration: none;
    color: white;
    transition: .2s ease;

    :hover {
      color: #FFCA25;
      transition: .2s ease;
      transform: scale(1.1, 1.1);
    }

    i {
    font-size: 4rem;
    transition: .2s ease;
    }
  }
`

const Footer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  bottom: 0;
  color: white;
  font-size: 12px;
`

export default Contact