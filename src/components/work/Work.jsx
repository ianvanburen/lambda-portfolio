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
  width: 100%;
  height: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
    min-height: 100vh;

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