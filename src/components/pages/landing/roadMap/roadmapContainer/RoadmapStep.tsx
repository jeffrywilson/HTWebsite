import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import React, { FunctionComponent, useMemo } from "react";
import { IRoadmapStep } from "../../../../../interfaces/general";
import { Bullot } from "../../../../shared/Bullot";

interface IProps {
  step: IRoadmapStep;
  isSelected: boolean;
}
const RoadmapStep: FunctionComponent<IProps> = ({ step, isSelected }) => {
  const color = useMemo(() => {
    if (isSelected) {
      return "#1EA1FF";
    }
    return "#E8E8E8";
  }, [isSelected]);

  return (
    <Wrapper>
      <Title color={color}>{step.title}</Title>
      <Description>{step.description}</Description>
      <Step>{step.step}</Step>
      <ButtetContainer>
        <Line />
        <Bullot bgcolor={color} />
      </ButtetContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
  font-family: sigmarone;
  margin-bottom: 1rem;
`;

const Description = styled(Typography)`
  font-size: 1.23rem;
  font-family: mmrtext;
`;

const Step = styled(Typography)`
  font-size: 1.5rem;
  font-family: sigmarone;
  margin-bottom: 1.23rem;
`;

const ButtetContainer = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background-color: white;
`;

export default React.memo(RoadmapStep);
