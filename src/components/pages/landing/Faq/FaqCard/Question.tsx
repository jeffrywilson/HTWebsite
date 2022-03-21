import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface IProps {
  title: string;
  isCollapsed: boolean;
}

const QuestionText = styled(Typography)({
  fontSize: "1.5rem",
  fontFamily: "sigmarone",
});

const Question: FunctionComponent<IProps> = ({ title, isCollapsed }) => {
  return (
    <Stack direction="row">
      {isCollapsed ? (
        <RemoveIcon
          sx={{ width: "2.18rem", height: "2.18rem", color: "#FFFFFF" }}
        />
      ) : (
        <AddIcon
          sx={{ width: "2.18rem", height: "2.18rem", color: "#1EA1FF" }}
        />
      )}
      <QuestionText
        sx={{
          marginLeft: "2.09rem",
          color: isCollapsed ? "#FFFFFF" : "#1EA1FF",
        }}
      >
        {title}
      </QuestionText>
    </Stack>
  );
};

export default Question;
