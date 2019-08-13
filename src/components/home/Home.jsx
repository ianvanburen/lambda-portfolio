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
          <h1>Hi, I'm Laurence. Developing web apps is my jam, but I also love to collect records.</h1>
        </MainText>
      </TitleContainer>
      <LinkContainer>
        {/* <div>
          <a href="#Work">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div> */}
        <DownArrow href="#Work"><i class="fas fa-chevron-down"></i></DownArrow>
      </LinkContainer>
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
  background-color: #ffce38;

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
    transition: .2s ease;

    &:hover {
      /* color: rgb(80, 80, 80); */
      transition: .2s ease;
      transform: scaleX(1.3);
    }
  }
`;

const TitleContainer = Styled.div`
  /* background-color: #FFCA25; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  padding: none;
  margin: none;
  /* border: 2px solid dodgerblue; */

`;

const MainText = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  felx-direction: column;
  /* border: 2px solid black; */
  width: 70%;
  flex-grow: 1;

  h1 {
    margin: 2rem 0;
    color: #386C99;
  }
`;

const LinkContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid black; */
  width: 100%;
  /* height: 100px; */

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

const DownArrow = Styled.a`
  border: none;
  text-decoration: none;
  background: none;
  font-size: 2.2rem;
  cursor: pointer;
  /* margin-top: 20px; */

  i {
    color: #386C99;
    transition: .2s ease;

    &:hover {
      transition: .2s ease;
      transform: scale(1.2, 1.2);
      color: #80a1be;
    }
  }
`;

export default Home