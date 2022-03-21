import { Stack } from "@mui/material";
import { useAtomValue } from "jotai";
import React, { FunctionComponent } from "react";
import { selectedFeatureAtom } from "../../../../store/features";
import FeatureCard from "./FeaturesBox/FeatureCard";
import FeaturesTitles from "./FeaturesBox/FeaturesTitles";

const FeaturesBox: FunctionComponent = () => {
  const selectedFeature = useAtomValue(selectedFeatureAtom);
  return (
    <Stack direction="column">
      <FeaturesTitles />
      {selectedFeature && <FeatureCard feature={selectedFeature} />}
    </Stack>
  );
};

export default FeaturesBox;
