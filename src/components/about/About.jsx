import React from 'react'
import Styled from 'styled-components'

const About = () => {
  return (
    <AboutContainer id="About" >
      <ImageContainer>
        <img src="https://media.licdn.com/dms/image/C4E03AQE8TXApk7qYMw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=KszW7r7LR10hiYzLMkg38dDlS66bzZYaQ0LJW88xPrg" alt="That's Me!"/>
      </ImageContainer>
      <TextContainer>
        <p>I'm a Full Stack Web Developer with a passion for tech and coding ideas to life. Through 2+ years of programming I’ve built several web apps and earned my Front-End Web Development Certificate from freeCodeCamp. I'm now enrolled in Lambda School's Full Stack Web program where I'm building upon my technical foundation, developing new skills and continuing to design applications using the industry's latest technologies.</p>
        <p>Paired with my passion for learning are strong communication skills which have helped me to succeed in previous sales & marketing roles. When I’m not mashing computer keys, I enjoy live music, rock climbing, travel and the company of good friends. My ambition is to become a better software engineer each day by staying current with industry trends, collaborating with others and pursuing new technical interests. Feel free to <a href="https://resume.creddle.io/resume/e1fgpovxad8" target="_blank" rel="noopener noreferrer">check out my résumé</a> to learn more about my skills and experience!</p>
      </TextContainer>
    </AboutContainer>
  )
}

// TODO: Create global components container to use across sections
const AboutContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #5BA077;
  padding: 3rem 0;
  /* margin: 1rem 0; */
`

const TextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* border: 2px solid white; */
  color: white;
  width: 70%;

  a {
    /* text-decoration: none; */
    color: white;
    font-weight: 700;
    transition: .1s ease;
  
    &:hover {
      transition: .1s ease;
      text-decoration: none;
    }
  }
`

const ImageContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 1rem 0;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }
`

export default About