import React from 'react';
// import './sass/_app.sass';
import './index.css'
import Home from './components/home/Home'
import Work from './components/work/Work'
import About from './components/about/About'
import Contact from './components/contact/Contact'

// const sass = require('node-sass')
// const result = sass.renderSync({
//   data: './App.scss'
// })

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
