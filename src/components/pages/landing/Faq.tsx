import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import FaqCard from "./Faq/FaqCard";

interface IProps {
  id: string;
}

const FaqContainer = styled(Stack)`
  width: 100%;
  & > * {
    margin-bottom: 1.81rem;
  }
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
  font-family: sigmarone;
  margin-bottom: 2.43rem;
`;

const FAQ_MOCK = new Array(8).fill(1);

const Faq: FunctionComponent<IProps> = ({ id }) => {
  const [collapsedItemId, setCollapsedItemId] = useState<number>(0);
  return (
    <FullScreenHeightLayout bgcolor="#69696952">
      <Title>{"FAQ'S"}</Title>
      <Stack
        id={id}
        sx={{
          flexDirection: {
            md: "column",
            lg: "row",
          },
        }}
      >
        <FaqContainer>
          {FAQ_MOCK.slice(0, FAQ_MOCK.length / 2).map((_, index) => (
            <FaqCard
              quastion="Why Is nathan so sexy?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              isCollapsed={collapsedItemId === index}
              handleClick={() => setCollapsedItemId(index)}
              key={`faq-card-${index}`}
            />
          ))}
        </FaqContainer>
        <FaqContainer sx={{ marginLeft: { md: "unset", lg: "3.31rem" } }}>
          {FAQ_MOCK.slice(FAQ_MOCK.length / 2, FAQ_MOCK.length).map(
            (_, index) => (
              <FaqCard
                quastion="Why Is nathan so sexy?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                isCollapsed={collapsedItemId === index + 4}
                handleClick={() => setCollapsedItemId(index + 4)}
                key={`faq-card-${index + 4}`}
              />
            )
          )}
        </FaqContainer>
      </Stack>
    </FullScreenHeightLayout>
  );
};

export default Faq;
