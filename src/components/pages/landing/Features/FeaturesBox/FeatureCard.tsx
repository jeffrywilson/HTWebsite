import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { IFeature } from "../../../../../interfaces/general";

interface IProps {
  feature: IFeature;
}

const FeatureCard: FunctionComponent<IProps> = ({ feature }) => {
  return (
    <Card
      sx={{
        gridTemplateColumns: { md: "1fr", lg: "1fr 2fr" },
        borderRadius: "0 0 13px 13px  ",
        overflow: "hidden",
      }}
    >
      <ImageContainer>
        <Image
          src={feature.image}
          alt={feature.title}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <Description>{feature.description}</Description>
    </Card>
  );
};

const Description = styled(Typography)`
  color: #cfcfcf;
  font-size: 1.43rem;
  font-family: mmrtext;
  padding: 80px;
`;

const Card = styled(Box)`
  width: 100%;
  display: grid;
  background-color: #141414;
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 509px;
  flex-shrink: 0;

  @media (max-width: 1450px) {
    align-self: center;
    width: 100%;
    display: flex;
  }

  @media (max-width: 612px) {
  }
`;

export default FeatureCard;
