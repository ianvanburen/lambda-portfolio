import React from 'react'
import Styled from 'styled-components'

import Project from '../project/Project'

const Work = ({ projects }) => {
  return (
    <WorkContainer id="Work" > 
      {projects.map(project => (
        <Project 
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl} 
          codeUrl={project.codeUrl}
          key={project.imageUrl}
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
  width: 100%;
  height: 100%;
  border-top: 1px solid rgb(40, 40, 40);
  border-bottom: 1px solid rgb(40, 40, 40);

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
    min-height: 100vh;
    border: none;

    div.project {
      width: 26%;
      max-width: 300px;
      transition: .2s ease;
      box-shadow: 0px 0px 20px 2px rgb(40, 40, 40);
      margin: 1rem;

      :hover {
        transition: .2s ease;
        transform: scale(1.1, 1.1);
        box-shadow: 0px 0px 22px 4px rgb(40, 40, 40);
      }
    }
  }
`

export default Work