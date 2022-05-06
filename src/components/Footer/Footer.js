import React from "react";
import {
  // ArrowToTop,
  ContactHeader,
  ContactLink,
  // Copyright,
  // FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  // Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

import {SiLinkedin, SiGithub, SiTwitter} from "react-icons/si"
import {BsFillArrowUpSquareFill} from "react-icons/bs";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  // const year = new Date().getFullYear();
  return (
    <StyledFooter id="contactme">
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:ritesh.mude12345@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:919890608454">+919890608454
            <br />
            +918668722105
          </ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/Ritesh6997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub/>
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/ritesh-mude-a7b047159/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin/>
            </ContactLink>
            <ContactLink
              href="https://twitter.com/RiteshMude1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter/>
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href="tel:8178766470">
            ritesh.mude12345@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      {/* <FooterArrowLine>
        <ArrowToTop  onClick={toTop}></ArrowToTop>
      </FooterArrowLine> */}

      <FooterLine />
      <div onClick={toTop} style={{cursor: "pointer",
      display:"flex", justifyContent:"center", alignItems:"center", textAlign: "center", fontSize: "30px"}}>
      <BsFillArrowUpSquareFill style={{width: "40px",marginTop:"10px", cursor: "pointer", color: "white"}}/>
      <div style={{fontSize: "20px"}} onClick={toTop}>Go to top</div>
      </div>
    </StyledFooter>
  );
};

export default Footer;


