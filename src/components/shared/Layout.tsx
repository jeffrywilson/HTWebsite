import styled from "@emotion/styled";
import { Box } from "@mui/system";

const Layout = styled(Box)({
  width: "100%",
  height: "100%",
  maxWidth: "1450px",
  marginInline: "auto",
  paddingInline: "36px",
  "@media (max-width: 1024px)": {
    paddingInline: "24px",
  },
});

export default Layout;
