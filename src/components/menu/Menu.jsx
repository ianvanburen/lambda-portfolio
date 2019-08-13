import React from 'react'
import Styled from 'styled-components'

const Menu = ({ menuOpen, handleClick, ref }) => {

  return (
    <MenuContainer id='menu' className={menuOpen ? 'open' : 'closed'}>
      <MenuItems>
        <a href="#Home">Home</a>
        <a href="#Work">Work</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </MenuItems>
    </MenuContainer>
  )
}

const MenuContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: fixed;
  height: 100vh;
  width: 220px;
  transform: translateX(-220px);
  transition: transform 300ms ease-in;
  /* background-color: rgba(40, 40, 40, .7); */
  background-image: linear-gradient(90deg, rgb(20, 20, 20), rgba(20, 20, 20, .75));

  &.open {
    transform: translateX(0);
  }

  &.closed {
    transform: translateX(-220px);
  }
`

const MenuItems = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid white; */
  width: 80%;
  padding: 1.5rem 0;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    margin: .5rem 0;
    padding: 1rem 0;
    transition: .2s ease;

    &:hover {
      transition: .2s ease;
      transform: scale(1.3, 1.3);
    }
  }
`

export default Menu