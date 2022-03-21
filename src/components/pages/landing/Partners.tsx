import { Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import { Title } from "../../shared/TextComponents";
import PartnerCard from "./partners/PartnerCard";

interface IProps {
  id: string;
}

const Partners: FunctionComponent<IProps> = ({ id }) => {
  return (
    <FullScreenHeightLayout bgcolor="#69696952" id={id}>
      <Title textAlign="center" marginBottom="6.43rem">
        Backed by amazing partners
      </Title>
      <Grid
        container
        columns={12}
        sx={{
          columnGap: { sm: "3.12rem", xs: "2.25rem" },
          rowGap: { sm: "4.75rem", xs: "3.12rem" },
        }}
        justifyContent="center"
      >
        {new Array(10).fill(0).map((_, i) => (
          <Grid item key={i}>
            <PartnerCard key={i} />
          </Grid>
        ))}
      </Grid>
    </FullScreenHeightLayout>
  );
};

export default Partners;
