import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import React, { FunctionComponent } from "react";

type IProps = {
  hasbackground?: boolean;
  id?: string;
} & BoxProps;

const FullScreenHeightLayout: FunctionComponent<IProps> = ({
  hasbackground,
  id,
  children,
  ...rest
}) => {
  return (
    <Wrapper id={id} {...rest}>
      {hasbackground && <Background />}
      <Container
        sx={{ display: "flex", flexDirection: "column", zIndex: 1 }}
        maxWidth="xl"
      >
        {children}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 10rem;
  z-index: 1;
`;

const Background = styled(Box)`
  position: absolute;
  width: 0;
  height: 0;
  border-right: 200vw solid #69696952;
  border-top: 50vh solid transparent;
  border-bottom: 50vh solid transparent;
  margin-left: -100vw;
`;

export default FullScreenHeightLayout;
