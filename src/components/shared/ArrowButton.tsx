import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, ButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";

type IProps = {
  direction?: "left" | "right";
} & ButtonProps;

const ArrowButton: FunctionComponent<IProps> = ({
  direction = "right",
  ...rest
}) => {
  return (
    <StyledButton {...rest}>
      <ArrowForwardIosIcon
        sx={{ transform: direction === "left" ? "scale(-1)" : undefined }}
      />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  border: 1px solid #707070;
  border-radius: 9px;
  width: 3.37rem;
  height: 3.37rem;
  padding: 0;
  max-width: 3.37rem;
  min-width: unset;
`;

export default ArrowButton;
