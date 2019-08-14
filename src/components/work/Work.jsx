import React from 'react'
import Styled from 'styled-components'

import Project from '../project/Project'


const Work = props => {
  return (
    <WorkContainer id="Work" > 
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
  height: 100%;
  /* padding: 1rem 0; */
  /* background-color: #FFCA25; */
`

export default Work