import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { IFeature } from "../../../../interfaces/general";
import { Bullot } from "../../../shared/Bullot";

interface IProps {
  feature: IFeature;
  isFirstChild: boolean;
}

const MoreFeatureCard: FunctionComponent<IProps> = ({
  feature,
  isFirstChild,
}) => {
  return (
    <Wrapper direction="row">
      <Stack marginRight="3.37rem" alignItems="center">
        {isFirstChild ? <TopTransparentLine /> : <TopLine />}
        <Bullot bgcolor="white" />
        <Line />
      </Stack>

      <LeftSide>
        <Title>{feature.title}</Title>
        <Description>{feature.description}</Description>
      </LeftSide>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  margin-right: 9.56rem;
`;

const TopLine = styled(Box)`
  width: 1px;
  height: 0.8rem;
  background-color: white;
`;

const TopTransparentLine = styled(TopLine)`
  width: 1px;
  height: 0.8rem;
  background-color: transparent;
`;

const Line = styled(Box)`
  width: 1px;
  flex-grow: 1;
  background-color: white;
`;

const LeftSide = styled(Stack)`
  padding-bottom: 1.75rem;
`;

const Title = styled(Typography)`
  font-size: 1.81rem;
  font-family: sigmarone;
  margin-bottom: 2.28rem;
`;

const Description = styled(Typography)`
  font-size: 1.43rem;
  font-family: mmrtext;
`;

export default MoreFeatureCard;
