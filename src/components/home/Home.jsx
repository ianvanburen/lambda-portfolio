import React from 'react';
import Styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <TitleContainer>
        <MainText >
          <h1>This is some text that will be displayed when you get to my portfolio.</h1>
        </MainText>
        <LinkContainer>
          <div>
            <p>Links</p>
            <p>Go</p>
            <p>Here</p>
          </div>
          <p>Click me to scroll down</p>
        </LinkContainer>
      </TitleContainer>
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #386C99; */
  background-color: #FFCA25;
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

    p {
      border-bottom: 2px solid white;
      color: #386C99;
    }
  }

  p {
    color: #386C99;
  }
`;

export default Home