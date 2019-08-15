import React, { Component } from 'react';

// import './index.css'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Work from './components/work/Work'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import projectData from './projectData'

class App extends Component {
  constructor(props){
    super()
  }

  state = {
    menuOpen: false,
    images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'],
    projectData: projectData
  }
  
  componentDidMount = () => {
    // TODO: Import images from separate file, map over images and set them on Work component state
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
      <div id='app' onClick={e => this.handleClick(e)}>
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
        />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
