import { Stack } from "@mui/material";
import { useAtomValue } from "jotai";
import React, { FunctionComponent } from "react";
import { mock_roadmap_steps } from "../../../../mocks/roadmap";
import { selectedRoadmapAtom } from "../../../../store/roadmap";
import RoadmapStep from "./roadmapContainer/RoadmapStep";

const RoadMapContainer: FunctionComponent = () => {
  const selectedRoadmap = useAtomValue(selectedRoadmapAtom);

  return (
    <Stack direction="row" sx={{ width: "100%", marginBottom: "4.5rem" }}>
      {mock_roadmap_steps.map((step, index) => (
        <RoadmapStep
          isSelected={selectedRoadmap === index}
          key={step.id}
          step={step}
        />
      ))}
    </Stack>
  );
};

export default RoadMapContainer;
