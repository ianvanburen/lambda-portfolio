import React, { Component } from 'react'
import Styled from 'styled-components'
import {Transition, animated} from 'react-spring/renderprops'

class Home extends Component {
  state = {
    interests: ['collecting records', 'photography and design', 'being a slave to my cat', 'rock climbing', 'learning new skills', 'camping & backpacking', 'a perfectly ripe avocado', 'live music'],
    index: 0
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.state.index === this.state.interests.length - 1
        ? this.setState({ index: 0 })
        : this.setState({ index: this.state.index + 1 })
    }, 3000)
    clearInterval(this.timeout)
  }

  render(){
    const interest = this.state.interests[this.state.index]
    return (
      <Container id="Home" >
        <button onClick={e => this.props.handleClick(e)}>
          <i id='menuBtn' className="fas fa-bars"></i>
        </button>
        <TitleContainer>
          <MainText >
            <h1>Hi, I'm Laurence.</h1>
            <h1>Developing web apps is my jam, but I also love...</h1>
            <Transition
              items={interest}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}>
              {interest => props => <animated.div style={props}><h1>{`${interest}.`}</h1></animated.div>}
            </Transition>
          </MainText>
        </TitleContainer>
        <LinkContainer>
          <DownArrow href="#Work"><i className="fas fa-chevron-down"></i></DownArrow>
        </LinkContainer>
      </Container>
    )
  }
}

// TODO: Create global components container to use across sections
const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffce38;

  button {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 3;
    border: none;
    margin: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    font-size: 2rem;
    transition: .2s ease;
    color: white;

    &:hover {
      transition: .2s ease;
      transform: scaleX(1.3);
    }
  }
`;

const TitleContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  padding: none;
  margin: none;
`;

const MainText = Styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 70%;
  padding-top: 35vh;
  /* flex-grow: 1; */

  h1:first-child {
    color: rgb(60, 60, 60);
  }

  h1 {
    margin: 0;
    color: white;
    transition: .3s ease;
  }

  div {
    color: white;
    h1 {
      color: white !important;
      position: absolute;
    }
  }
`;

const LinkContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DownArrow = Styled.a`
  border: none;
  text-decoration: none;
  background: none;
  font-size: 2.2rem;
  cursor: pointer;
  padding: 0 0 2rem 0;

  i {
    color: white;
    transition: .2s ease;

    &:hover {
      transition: .2s ease;
      transform: scale(1.2, 1.2);
    }
  }
`;

export default Home