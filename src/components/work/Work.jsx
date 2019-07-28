import React from 'react'
import Styled from 'styled-components'

// import * as images from '../../images/..'
import Project from '../project/Project'
// import { file } from '@babel/types';


const Work = props => {
  return (
    <WorkContainer>
      {props.images.map(image => (
        <Project 
          image={image} 
          key={image}
        />
      ))}
    </WorkContainer>
  )
}


// TODO: Create global components container to use across sections
const WorkContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* height: 100vh; */
  width: 100%;
  /* padding: 1rem 0; */
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