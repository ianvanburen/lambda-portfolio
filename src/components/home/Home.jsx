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
          <p>Links</p>
          <p>Go</p>
          <p>Here</p>
        </LinkContainer>
        <ScrollArrow>
          <p>Click me to scroll down</p>
        </ScrollArrow>
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
  background-color: #386C99;
`;
const TitleContainer = Styled.div`
  background-color: #FFCA25;
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
  border: 2px solid black;
  width: 100%;

  h1 {
    margin: 1rem;
    color: #fff;
  }
`;
const LinkContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid black;
  width: 100%;

  p {
    border-bottom: 2px solid white;
  }
`;
const ScrollArrow = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 100%;
`;

export default Home