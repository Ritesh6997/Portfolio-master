import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
      <SectionTitle dark="true">
          About Me
        </SectionTitle>
      </SectionHeading>
      
      <AboutContent>
          <AboutImage src={myImage} />
        <AboutDetailsContainer>
          <StyledParagraph>
          I am a keen web enthusiast who loves to build complex systems and aspires to be a lead backend developer in the coming years. My journey started when I first wrote "Hello world" for the first time when I was 19 and from there I developed an interest in software development. Apart from that I occasionally learn investing which is my second hobby.
          </StyledParagraph>
          <StyledParagraph>
          I am a team player, a professional and self motivated individual adept at HTML, CSS, JavaScript, MERN Stack and DSA.
          </StyledParagraph>
          <StyledParagraph>
            My leisure interests: Apart from this I like travelling and playing chess. I also like to keep myself updated with current affairs and technology.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Ritesh"
              href="https://drive.google.com/file/d/1mN35rZCbJdhCAIzst2Lf4DQ6OAagXFGG/view?usp=sharing"
              target={'_blank'}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
