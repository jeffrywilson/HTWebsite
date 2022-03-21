import React, { FunctionComponent } from "react";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import { Title } from "../../shared/TextComponents";
import FeaturesBox from "./Features/FeaturesBox";

interface IProps {
  id: string;
}

const Features: FunctionComponent<IProps> = ({ id }) => {
  return (
    <FullScreenHeightLayout hasbackground id={id}>
      <Title marginBottom="1.43rem" textAlign="center">
        Features
      </Title>
      <FeaturesBox />
    </FullScreenHeightLayout>
  );
};

export default Features;
