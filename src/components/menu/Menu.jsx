import React from 'react'
import Styled from 'styled-components'

const Menu = ({ menuOpen }) => {
  

  return (
    <MenuContainer className={menuOpen ? 'open' : 'closed'}>
      <p>I'm a menu!</p>
    </MenuContainer>
  )
}

// const Navbar = ({ visible }) => (
//   <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
//   </div>
// )

const MenuContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  position: fixed;
  /* max-height: 100%; */
  height: 100vh;
  width: 220px;
  transform: translateX(-220px);
  transition: transform 400ms ease-in;
  background-color: rgba(40, 40, 40, .7);

  &.open {
    /* border: 2px solid cyan; */
    transform: translateX(0);
  }

  &.closed {
    /* border: 2px solid teal; */
    transform: translateX(-220px);
  }
`

export default Menu