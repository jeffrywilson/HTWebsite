import styled from "@emotion/styled";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import React, { FunctionComponent } from "react";
import SocialLinkIcon from "../../../shared/SocialLinkIcon";

const Socials: FunctionComponent = () => {
  return (
    <Wrapper direction="row" alignItems="center" justifyContent="center">
      <SocialLinkIcon icon={<Instagram />} url="https://www.instagram.com" />
      <SocialLinkIcon icon={<LinkedIn />} url="https://www.linkedin" />
      <SocialLinkIcon icon={<Facebook />} url="https://www.facebook.com" />
      <SocialLinkIcon icon={<Twitter />} url="https://twitter.com" />
      <SocialLinkIcon icon={<YouTube />} url="https://www.youtube.com" />
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  & :not(:first-child) {
    margin-left: 1rem;
  }
`;

export default Socials;
