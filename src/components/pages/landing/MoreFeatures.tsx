import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { FunctionComponent } from "react";
import { mock_features } from "../../../mocks/features";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import { Title } from "../../shared/TextComponents";
import MoreFeatureCard from "./moreFeatures/MoreFeatureCard";

interface IProps {
  id: string;
}

const MoreFeatures: FunctionComponent<IProps> = ({ id }) => {
  return (
    <FullScreenHeightLayout id={id} marginY="10rem">
      <Title marginBottom="1.81rem">
        More awesome
        <br />
        Features
      </Title>

      <Grid container spacing="0" columns={12} sx={{ order: 0 }}>
        <Grid item xl={6} md={12}>
          {mock_features.map((feature, index) => (
            <MoreFeatureCard
              isFirstChild={index === 0}
              feature={feature}
              key={feature.id}
            />
          ))}
        </Grid>

        <Grid
          item
          xl={6}
          md={12}
          sx={{
            order: { xs: -1, sm: -1, md: -1, xl: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            marginBottom: {
              xs: "0.875rem",
              sm: "1rem",
              md: "1.25rem",
              xl: "0",
            },
            width: "100%",
          }}
        >
          <Box
            sx={{
              boxShadow: "0px 3px 6px #000000EB",
              borderRadius: "21px",
              position: "relative",
              aspectRatio: "738/494",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/more_features.png"
              alt="More Awesome Feature"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </FullScreenHeightLayout>
  );
};

export default MoreFeatures;
