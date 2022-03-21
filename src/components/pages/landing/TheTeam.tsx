import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import { Description, Title } from "../../shared/TextComponents";
import MemberCard from "./TheTeam/MemberCard";

const TheTeam: FunctionComponent<{ id: string }> = ({ id }) => {
  return (
    <FullScreenHeightLayout id={id} gap="36px">
      <Title marginBottom="2.81rem" textAlign="center">
        Meet the team!
      </Title>
      <Description marginBottom={"4.87rem"} textAlign="center">
        Embark on a new adventure, explore the high seas and the open world of
        High Tides
      </Description>
      <Grid
        container
        columns={12}
        sx={{ justifyContent: "center" }}
        columnGap="3.12rem"
        rowGap="4.75rem"
      >
        {new Array(9).fill(1).map((_, index) => (
          <Grid item key={index}>
            <MemberCard key={index} />
          </Grid>
        ))}
      </Grid>
    </FullScreenHeightLayout>
  );
};

const MembersContainer = styled(Box)`
  display: grid;
  align-self: normal;
  row-gap: 4.87rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  } ;
`;

export default TheTeam;
