import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const MenuLinkText = styled(Typography)({
  fontSize: "1.18rem",
  fontFamily: "sigmarone",
  borderRadius: "8px",
  alignSelf: "end",
  lineHeight: "2rem",
  textAlign: "right",

  ":select:target ": {
    fontSize: "1.56rem",
  },
});

export default MenuLinkText;
