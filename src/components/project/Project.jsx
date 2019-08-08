import React from 'react'
import Styled from 'styled-components'

const Project = props => {
  return (
    <>
      <ProjectContainer > 
        {/* <ProjectItem src={`../../images/${props.image}.jpg`} alt={props.image}/> */}
        {/* <ProjectItem src={`public/images/img1.jpg`} alt={props.image}/> */}
        <ProjectItem style={
          {
            backgroundImage: `url(${require(`../../../public/images/${props.image}.jpg`)})`
          }
        }/>
      </ProjectContainer>
    </>
  )

}

// TODO: Create global components container to use across sections
const ProjectContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin: 0; */
  /* padding: none; */
  /* border: 3px solid red; */
`

const ProjectItem = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  cursor: pointer;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: .2s ease;

  :hover {
    background-size: 120%;
    transition: .2s ease;
    
  }
`

export default Project