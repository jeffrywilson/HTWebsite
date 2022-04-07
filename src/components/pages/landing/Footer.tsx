import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";
import Socials from "./footer/Socials";
import { useMediaQuery } from 'react-responsive';

const Footer: FunctionComponent = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  console.log(isTabletOrMobile, "istabletormobile");
  return (
    <FullScreenHeightLayout
      height="fit-content !important"
      minHeight="fit-content !important"
      bgcolor="#222222"
      paddingY="2rem !important"
    >
      <Stack direction="column">
        <Box position="relative" width="3.81rem" height="2.5rem">
          <Image
            src="/images/logo.png"
            alt="logo"
            objectFit="contain"
            layout="fill"
          />
        </Box>
        <Divider />
        <Stack direction="row" marginBottom="0.875rem">
          <LinksContainer>
            <Link href="/terms-of-service" passHref>
              <StyledLink>Terms of Service</StyledLink>
            </Link>
            <Link href="/terms-of-service" passHref>
              <StyledLink>Privacy Policy</StyledLink>
            </Link>
          </LinksContainer>
          <Text>{"Follow High Tides's socials"}</Text>
        </Stack>
        { isTabletOrMobile && 
          <Box>
            <Text flexGrow={1} textAlign="center" marginBottom="10px" > © Copyright HighTides 2022</Text>
            <Socials />
          </Box>
        }
        {
          !isTabletOrMobile &&
          <Stack direction="row">
            <Text flexGrow={1}>© Copyright HighTides 2022</Text>
            <Socials />
          </Stack>
        }
      </Stack>
    </FullScreenHeightLayout>
  );
};

const Divider = styled(Box)`
  width: 100%;
  height: 2px;
  background-color: #707070;
  margin-bottom: 2.25rem;
  margin-top: 2.5rem;
`;

const LinksContainer = styled(Stack)`
  flex-direction: row;
  flex-grow: 1;
  & :not(:first-child) {
    margin-left: 3.68rem;
  }
`;

const StyledLink = styled("a")`
  font-size: 1.125rem;
  color: #cfcfcf;
  font-family: mmrtext;
  :hover {
    color: #cfefff;
  }
`;

const Text = styled(Typography)`
  font-size: 1.125rem;
  color: #cfcfcf;
  font-family: mmrtext;
`;

export default Footer;
