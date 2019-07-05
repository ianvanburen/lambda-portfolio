import React, { Component } from 'react'
import Styled from 'styled-components'

// import * as images from '../../images/..'
import Project from '../project/Project'


class Work extends Component {
  state = {
    images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
  }

  componentDidMount = () => {
    console.log('IMAGES: ', this.state.images);
  }
  render(){
    return (
      <WorkContainer>
        {this.state.images.map(image => (
          <Project image={image} key={image}></Project>
        ))}
        {/* <Project image='../../images/img1.jpg'></Project>
        <Project image='../../images/img2.jpg'></Project>
        <Project image='../../images/img3.jpg'></Project>
  
        <Project image='../../images/img4.jpg'></Project>
        <Project image='../../images/img5.jpg'></Project>
        <Project image='../../images/img6.jpg'></Project> */}
      </WorkContainer>
    )
  }
}

const WorkContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* height: 100vh; */
  width: 100%;
  padding: 1rem 0;
  /* background-color: #FFCA25; */
`

// const ExampleProject = Styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid black;
//   width: 80%;
//   height: auto;
//   /* height: 180px; */
// `

export default Work