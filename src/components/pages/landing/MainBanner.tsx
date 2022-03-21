import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { mock_home_segments } from "../../../mocks/homeStructure";
import MenuLinkText from "../../shared/MenuLinkText";

const Container = styled(Box)({
  zIndex: 10,
  minHeight: "100%",
  width: "100%",
  paddingLeft: "6rem",
  paddingRight: "2.43rem",
  paddingTop: "3.25rem",
  background:
    "transparent linear-gradient(179deg, #09090900 0%, #090909C2 51%, #090909 100%) 0% 0% no-repeat padding-box",
});

const ImageBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "100vh",
});

const CustomLayout = styled(Box)({
  minHeight: "100vh !important",
  height: "100vh !important",
  alignItems: "center",
  justifyContents: "center",
  display: "flex",
});

const Title = styled(Typography)({
  fontSize: "3.81rem",
  fontFamily: "sigmarone",
  marginBottom: "0",
});

const Description = styled(Typography)`
  font-size: 1.43rem;
  font-family: ms-sans-serif;
  margin-bottom: 4.62rem;
  width: 514px;
  @media (max-width: 750px) {
    width: 100%;
    padding-right: 24px;
  }
`;

const Button = styled(ButtonBase)({
  fontSize: "1.18rem",
  fontFamily: "sigmarone",
  borderRadius: "2.43rem",
  padding: "0.5rem 3.18rem",
  background:
    " transparent linear-gradient(270deg, #1EA1FF 0%, #47BFDE 100%) 0% 0% no-repeat padding-box",
});

const StyledFacebookIcon = styled(FacebookIcon)`
  @media (max-width: 750px) {
    display: none;
  }
`;

const LinkDivider = styled(Box)({
  width: "5px",
  height: "47px",
  backgroundColor: "#E8E8E8",
  borderRadius: "50px",
  alignSelf: "end",
  marginBottom: "35px",
});

const MenuContainer = styled(Box)`
  position: fixed;
  z-index: 12;
  right: 2.43rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    display: none;
  }
`;

const MainBanner: FunctionComponent = () => {
  return (
    <CustomLayout id="home">
      <ImageBox>
        <ImageContainer>
          <Image
            src="/images/big-banner.png"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </ImageContainer>
      </ImageBox>
      <Container>
        <Link href="/">
          <a>
            <Box
              sx={{ position: "relative", width: "6.12rem", height: "6.12rem" }}
            >
              <Image
                src="/images/logo.png"
                alt=""
                objectFit="contain"
                layout="fill"
              />
            </Box>
          </a>
        </Link>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Title>High Tides</Title>
          <Description>
            Cast your line and earn with friends. I need a little bit more text
            to make this look good.
          </Description>
          <Button>Read More</Button>
        </Box>
      </Container>
      <MenuContainer>
        {mock_home_segments.map((segment, index) => {
          return (
            <>
              <Link href={`/landing/#${segment.link}`} key={index}>
                <a>
                  <MenuLinkText>{segment.title}</MenuLinkText>
                </a>
              </Link>
              {index < mock_home_segments.length - 1 && <LinkDivider />}
            </>
          );
        })}
      </MenuContainer>
    </CustomLayout>
  );
};

export default MainBanner;
