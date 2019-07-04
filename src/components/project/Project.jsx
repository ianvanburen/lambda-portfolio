import React from 'react'
import Styled from 'styled-components'

const Project = props => {
  return (
    <>
      <ProjectContainer>
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

const ProjectContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 1rem 0; */
  /* padding: 1rem 0; */
  width: 100%;
`

const ProjectItem = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 200px;
  /* height: 180px; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 2s ease-in;

  :hover {
    background-size: 120%;
    /* transition: .2 ease-in; */
  }
`

export default Project