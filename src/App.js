import React, { Component } from 'react'
import Styled from 'styled-components'

import './index.css'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Work from './components/work/Work'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import projectData from './projectData'

class App extends Component {

  state = {
    menuOpen: false,
    projectData: projectData
  }

  handleClick = e => {
    // console.log('E.TARGET: ', e.target)
    if (e.target.id !== 'menuBtn' && !this.state.menuOpen){
      return
    }
    else if (e.target.id === 'menu' && this.state.menuOpen){
      return
    }
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <AppContainer id='app' onClick={e => this.handleClick(e)}>
        <Menu
          id="menu"
          menuOpen={this.state.menuOpen}
          handleClick={this.handleClick}
        />
        <Home 
          handleClick={e => this.handleClick(e)} 
          />
        <Work 
          images={this.state.images} 
          projects={this.state.projectData}
        />
        <About />
        <Contact />
      </AppContainer>
    );
  }
}

const AppContainer = Styled.div`
  background-image: URL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYstaCQKnjRMfYX8ulF4bqNrNIxgHplKoT4oawrkLQWrfFl_xLA");
  background-repeat: repeat;
  background-attachment: fixed;
`

export default App;
