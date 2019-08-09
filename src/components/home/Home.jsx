import React from 'react'
import Styled from 'styled-components'

const Home = ({ handleClick, menuOpen }) => {
  return (
    <Container id="Home" >
      <button onClick={e => handleClick(e)}>
        <i id='menuBtn' className="fas fa-bars"></i>
      </button>
      <TitleContainer>
        <MainText >
          <h1>This is some text that will be displayed when you get to my portfolio.</h1>
        </MainText>
        <LinkContainer>
          <div>
            <a href="#Work">Projects</a>
            <a href="#About">About</a>
            <a href="#Contact">Contact</a>
          </div>
          {/* <p>Click me to scroll down</p> */}
        </LinkContainer>
      </TitleContainer>
    </Container>
  )
}

// TODO: Create global components container to use across sections
const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #386C99; */
  /* background-color: #FFCA25; */

  button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    border: none;
    margin: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    font-size: 2rem;
    transition: .3s ease;

    &:hover {
      color: #5BA077;
      transition: .2s ease;
    }
  }
`;
const TitleContainer = Styled.div`
  /* background-color: #FFCA25; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 80%;
  padding: none;
  margin: none;

`;
const MainText = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  felx-direction: column;
  /* border: 2px solid black; */
  width: 100%;
  flex-grow: 1;

  h1 {
    margin: 2rem 1rem;
    color: #386C99;
  }
`;
const LinkContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid black; */
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px solid rgba(255, 255, 255, 0);
      color: #386C99;
      transition: .2s;
      font-weight: 700;

      &:hover {
        transiton: .1s;
        border-bottom: 2px solid #386C99;
      }
    }
  }

  p {
    color: #386C99;
  }
`;

export default Home