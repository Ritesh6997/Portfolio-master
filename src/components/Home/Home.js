import React from "react";
// import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  // StyledButtonsContainer,
  StyledHome,
  Title,
  // Line,
  // Greeting,
  // Social,
  // Socials,
  // Quote,
} from "../styles/Home.styled";
import "./style.css";
// import projectIcon from "../../assets/icons/project-icon.svg";
// import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
// import { GrLinkedinOption } from "react-icons/gr";
// import { GoMarkGithub } from "react-icons/go";
// import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  // let today = new Date(),
    // hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Ritesh Mude</Name>
        <Title>Full Stack Web Developer</Title>
        <p>
        Specialization In MERN Stack
        </p>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
