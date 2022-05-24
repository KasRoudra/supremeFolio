import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.css";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;
const SocialMedia = (props) => {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            key={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
