import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";

interface IProps {
  icon: JSX.Element;
  url: string;
}

const SocialLinkIcon: FunctionComponent<IProps> = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <StyledButton>{icon}</StyledButton>
    </a>
  );
};

const StyledButton = styled(Button)`
  min-width: unset;
  padding: 11;
  width: fit-content;
  height: fit-content;
  border-radius: 9px;
  background-color: #515151;
  & > * {
    color: white;
    font-size: 30px;
  }
  :hover {
    background-color: #2e2e2e;
  }
`;

export default SocialLinkIcon;
