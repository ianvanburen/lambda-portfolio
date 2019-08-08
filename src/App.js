import React, { Component } from 'react';

// import './index.css'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Work from './components/work/Work'
import About from './components/about/About'
import Contact from './components/contact/Contact'

class App extends Component {
  constructor(props){
    super()
  }

  state = {
    menuOpen: false,
    images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
  }

  componentDidMount = () => {
    // TODO: Import images from separate file, map over images and set them on Work component state
    console.log('IMAGES: ', this.state.images);
  }
  
  handleClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }


  render() {
    return (
      <div onClick={this.handleClick}>
        <Menu
          id="menu"
          ref={node => this.node = node}
          menuOpen={this.state.menuOpen}
          handleClick={this.handleClick}
        />
        <Home 
          handleClick={() => this.handleClick()} 
          menuOpen={this.state.menuOpen}
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
