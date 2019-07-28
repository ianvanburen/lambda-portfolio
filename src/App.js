import React, { Component } from 'react';
import './index.css'
import Home from './components/home/Home'
import Work from './components/work/Work'
import About from './components/about/About'
import Contact from './components/contact/Contact'

class App extends Component {
  constructor(props){
    super()
  }

  state = {
    images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
  }

  componentDidMount = () => {
    // TODO: Import images from separate file, map over images and set them on Work component state
    console.log('IMAGES: ', this.state.images);
  }

  render() {
    return (
      <div className="App">
        <Home />
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
