import React from 'react'
import Styled from 'styled-components'

const Project = props => {
  return (
    <>
      <ProjectContainer className="project"> 
        <ProjectItem style={
          {
            backgroundImage: `url(${require(`../../../public/images/${props.image}.jpg`)})`
          }
        }>
          <ProjectInfo>
            <h2>Name of Project</h2>
            <p>Something to say about the project and how it was made. Adding a bunch more words to see what it looks like on multiple rows</p>
          </ProjectInfo>
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
  width: 100%;
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

  @media (min-width: 800px) {
    background-size: auto 120%;

    :hover {
      background-size: auto 130%;
      transition: .2s ease;
    }
  }
`

const ProjectInfo = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(40, 40, 40, 0);
  transition: .2s ease;
  opacity: 0;

  &:hover {
    transition: .2s ease;
    opacity: 1;
    background-color: rgba(40, 40, 40, .7);
  }

  h2, p {
    color: white;
    padding: 0 10%;
    text-align: center;
  }
`;

export default Project