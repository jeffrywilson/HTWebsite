import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import React, { FunctionComponent } from "react";
import { mock_features } from "../../../../../mocks/features";
import { selectedFeatureAtom } from "../../../../../store/features";

const FeatureTitle = styled(Box)`
  position: relative;

  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SelectedTriangle = styled(Box)`
  position: absolute;
  top: 100%;
  right: 80%;
  width: 0;
  height: 0;
  border-top: 30px solid #2dacf3;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  z-index: 5 !important;
`;

const Title = styled(Typography)`
  font-size: 1.75rem;
  font-family: sigmarone;
`;

const FeaturesTitles: FunctionComponent = () => {
  const [selectedFeature, setSelectedFeature] = useAtom(selectedFeatureAtom);

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${mock_features.length}, 1fr)`,
      }}
    >
      {mock_features.map((feature) => (
        <>
          <FeatureTitle
            onClick={() => setSelectedFeature(feature)}
            key={feature.id}
            sx={{
              backgroundColor:
                selectedFeature?.id === feature.id ? "#2DACF3" : "#ffffff",
            }}
          >
            <Title
              sx={{
                color:
                  selectedFeature?.id === feature.id ? "#E8E8E8" : "#373737",
              }}
            >
              {feature.title}
            </Title>
            {selectedFeature?.id === feature.id && <SelectedTriangle />}
          </FeatureTitle>
        </>
      ))}
    </Stack>
  );
};

export default FeaturesTitles;
