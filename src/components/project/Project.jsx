import React from 'react'
import Styled from 'styled-components'

const Project = ({ title, description, imageUrl, codeUrl }) => {
  return (
    <>
      <ProjectContainer className="project" href={codeUrl}> 
        <ProjectItem 
          href={codeUrl} 
          target="_blank"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <ProjectInfo>
            <h2>{title}</h2>
            <p>{description}</p>
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
  border-top: 1px solid rgb(40, 40, 40);
  border-bottom: 1px solid rgb(40, 40, 40);

  @media (min-width: 800px) {
    border: none;
  }
`

const ProjectItem = Styled.a`
  text-decoration: none;
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
    background-color: rgba(40, 40, 40, .8);
  }

  h2, p {
    color: white;
    padding: 0 10px;
    text-align: center;
  }

  @media (max-width: 800px) {
    opacity: 1;
    background-color: rgba(40, 40, 40, .8);
  }
`;

export default Project