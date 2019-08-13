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