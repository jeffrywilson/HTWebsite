import { Stack } from "@mui/material";
import { useUpdateAtom } from "jotai/utils";
import React, { FunctionComponent } from "react";
import { mock_roadmap_steps } from "../../../mocks/roadmap";
import {
  decreaseSelectedRoamapAtom,
  increaseSelectedRoamapAtom,
} from "../../../store/roadmap";
import ArrowButton from "../../shared/ArrowButton";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import { Description, Title } from "../../shared/TextComponents";
import RoadMapContainer from "./roadMap/RoadMapContainer";

const Roadmap: FunctionComponent = () => {
  const increaseSelectedRoamap = useUpdateAtom(increaseSelectedRoamapAtom);
  const decreaseSelectedRoamap = useUpdateAtom(decreaseSelectedRoamapAtom);

  const increaseStep = () => {
    increaseSelectedRoamap(mock_roadmap_steps.length);
  };

  const decreaseStep = () => {
    decreaseSelectedRoamap(mock_roadmap_steps.length);
  };

  return (
    <FullScreenHeightLayout bgcolor="#69696952">
      <Title textAlign="center" marginBottom="1.62rem">
        Roadmap
      </Title>
      <Description
        alignSelf="center"
        textAlign="center"
        marginBottom="8.18rem"
        maxWidth={"40rem"}
      >
        Embark on a new adventure, explore the high seas and the open world of
        High Tides
      </Description>
      <RoadMapContainer />
      <Stack direction="row" gap="6rem" alignSelf="center">
        <ArrowButton direction="left" onClick={decreaseStep} />
        <ArrowButton onClick={increaseStep} />
      </Stack>
    </FullScreenHeightLayout>
  );
};

export default Roadmap;
