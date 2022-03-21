import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { FunctionComponent, useMemo } from "react";
import Answer from "./FaqCard/Answer";
import Question from "./FaqCard/Question";

interface IProps {
  quastion: string;
  answer: string;
  isCollapsed: boolean;
  handleClick: () => void;
}

const Container = styled(Box)`
  /* background: transparent linear-gradient(270deg, #fbfbfb 0%, #f5f5f5 100%) 0%
    0% no-repeat padding-box; */
  border-radius: 14px;
  width: 100%;
  padding-block: 17px;
  padding-inline: 27px;
  cursor: pointer;
`;

const FaqCard: FunctionComponent<IProps> = ({
  quastion,
  answer,
  isCollapsed,
  handleClick,
}) => {
  const background = useMemo(() => {
    return isCollapsed
      ? `transparent linear-gradient(270deg, #1EA1FF 0%, #47BFDE 100%) 0% 0% no-repeat padding-box;`
      : `transparent linear-gradient(270deg, #fbfbfb 0%, #f5f5f5 100%) 0% 0% no-repeat padding-box`;
  }, [isCollapsed]);
  console.log("backg", background);
  return (
    <Container
      sx={{
        background,
        overflow: "hidden",
      }}
      // expanded={id === collapsedId}
      onClick={() => handleClick()}
    >
      <Question isCollapsed={isCollapsed} title={quastion} />
      <Box
        sx={{
          transition: "max-height 1s ease-in-out",
          maxHeight: isCollapsed ? "300px" : "0px",
        }}
      >
        <Answer
          sx={{
            transition: "all 1s ease-in-out",
            marginTop: isCollapsed ? "15.5px" : 0,
            opacity: isCollapsed ? 1 : 0,
          }}
        >
          {answer}
        </Answer>
      </Box>
    </Container>
  );
};

export default FaqCard;
