import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import FullScreenHeightLayout from "../../shared/FullScreenHeightLayout";

interface IProps {
  id: string;
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description?: string;
  link?: {
    title: string;
    url: string;
  };
}

const FullScreenBanner: FunctionComponent<IProps> = ({
  id,
  imageUrl,
  imageAlt = "",
  link,
  title,
  description,
}) => {
  return (
    <FullScreenHeightLayout id={id}>
      <Box
        sx={{
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Box sx={{ width: "100vw", position: "relative" }}>
          {/* <Image
            objectFit="cover"
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
          /> */}
          <video autoPlay muted loop style={{ width: "100vw" }}>
            <source src="/videos/bottom.mp4" type="video/mp4" />
          </video>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          zIndex: 5,
          background:
            "linear-gradient(90deg, rgba(6,6,6,1) 0%, #6E6E6E00 100%)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <BodyContainer zIndex="10">
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {link && (
          <Link href={link.url} passHref>
            <StyledLink
              style={{
                alignSelf: "flex-start",
              }}
            >
              {link.title}
            </StyledLink>
          </Link>
        )}
      </BodyContainer>
    </FullScreenHeightLayout>
  );
};

const StyledLink = styled("a")`
  color: #1ea1ff;
  font-size: 1.456rem;
`;

const BodyContainer = styled(Stack)`
  @media (max-width: 1450px) {
    margin-right: 0px !important;
    margin-left: 0px !important;
    margin-top: 0px !important;
  }
`;

const Title = styled(Typography)`
  margin-bottom: 2.93rem;
  font-size: 3.06rem;
  font-family: sigmarone;
  @media (max-width: 1450px) {
    text-align: center;
  }
`;

const Description = styled(Typography)`
  width: 562px;
  font-size: 1.43rem;
  font-family: mmrtext;
  color: #cfcfcf;
  margin-bottom: 2.56rem;
  @media (max-width: 1450px) {
    text-align: center;
    width: unset;
  }
`;

export default FullScreenBanner;
