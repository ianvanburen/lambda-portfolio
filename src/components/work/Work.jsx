import React from 'react'
import Styled from 'styled-components'

import Project from '../project/Project'

const Work = () => {
  return (
    <WorkContainer>
      <Project></Project>
      <Project></Project>
      <Project></Project>

      <Project></Project>
      <Project></Project>
      <Project></Project>
    </WorkContainer>
  )
}

const WorkContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* height: 100vh; */
  width: 100%;
  padding: 1rem 0;
  background-color: #FFCA25;
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