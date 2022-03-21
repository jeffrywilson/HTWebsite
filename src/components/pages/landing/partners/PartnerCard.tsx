import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";

const Wrapper = styled(Box)`
  background-color: #404040;
  border: 1px solid #707070;
  border-radius: 15px;
`;

const PartnerCard: FunctionComponent = () => {
  return (
    <Wrapper
      sx={{
        width: { xs: "11.8rem", sm: "15.43rem" },
        height: { xs: " 9rem", sm: " 8.37rem" },
      }}
    />
  );
};

export default PartnerCard;
