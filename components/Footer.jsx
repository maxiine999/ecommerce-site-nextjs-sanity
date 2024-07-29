
   "use client"
import React from 'react'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxFigmaLogo,
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="innerContainer">
        <div className="sectionContainer">

          <div className="section">
            <div className="sectionTitle">Community</div>

            <p className="sectionItem">
              <a
                href="https://github.com/maxiine999"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxGithubLogo />
                <span className="sectionText">Github</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="https://www.figma.com/@madhav7"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxFigmaLogo />
                <span className="sectionText">Figma</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="https://discord.com/user/zypherxx999"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxDiscordLogo />
                <span className="sectionText">Discord</span>
              </a>
            </p>
          </div>

          <div className="section">
            <div className="sectionTitle">Social Media</div>
            <p className="sectionItem">
              <a
                href="https://www.instagram.com/_madhav_mishra_/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxInstagramLogo />
                <span className="sectionText">Instagram</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="https://x.com/M4xi999"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxTwitterLogo />
                <span className="sectionText">Twitter</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="https://www.linkedin.com/in/madhav-mishra-98a8a1282/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxLinkedinLogo />
                <span className="sectionText">Linkedin</span>
              </a>
            </p>
          </div>

          <div className="section">
            <div className="sectionTitle">Learn About Me</div>
            <p className="sectionItem">
              <a href="#Contact" className="sectionLink">
                <span className="sectionText">Contact</span>
              </a>
            </p>
            <p className="sectionItem">
              <a href="#" className="sectionLink">
                <span className="sectionText">About me</span>
              </a>
            </p>
            <p className="sectionItem">
              <a href="#projects" className="sectionLink">
                <span className="sectionText">Projects</span>
              </a>
            </p>
          </div>

        </div>
        <div className="footerText">
          &copy; Madhav Mishra, 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
