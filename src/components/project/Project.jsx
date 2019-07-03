import React from 'react'
import Styled from 'styled-components'

const Project = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectItem>
          Project Component  
        </ProjectItem>
      </ProjectContainer>
    </>
  )
}

const ProjectContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 1rem 0; */
  /* padding: 1rem 0; */
  width: 100%;
  /* background-color: teal; */
`

const ProjectItem = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 90%;
  height: auto;
  /* height: 180px; */
`

export default Project