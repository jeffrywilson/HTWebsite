import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { mock_home_segments } from "../../../mocks/homeStructure";
import { isDrawerOpenAtom } from "../../../store/layoutStore";
import MenuLinkText from "../../shared/MenuLinkText";
const StyledAppBar = styled(AppBar)`
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;

const LayoutContainer = styled(Box)`
  @media (max-width: 750px) {
    padding-top: 64px;
  }

  @media (max-width: 600px) {
    padding-top: 56px;
  } ;
`;

const Layout: FunctionComponent = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <LayoutContainer>
      <StyledAppBar>
        <Toolbar sx={{ backgroundColor: "#222222" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "auto" }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ position: "relative", width: "5rem", height: "5rem" }}>
            <Image
              src="/images/logo.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </Box>
        </Toolbar>
      </StyledAppBar>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            backgroundColor: "#222222",
            paddingTop: { sm: "64px", xs: "56px" },
            width: { sm: "60vw", xs: "80vw" },
            height: "100%",
            "&>*": {
              marginBottom: "16px",
            },
          }}
        >
          {mock_home_segments.map((segment, index) => {
            return (
              <>
                <Link href={`/landing/#${segment.link}`} key={index}>
                  <a onClick={closeDrawer}>
                    <MenuLinkText color="white">{segment.title}</MenuLinkText>
                  </a>
                </Link>
              </>
            );
          })}
        </Container>
      </SwipeableDrawer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
