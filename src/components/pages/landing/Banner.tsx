import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Layout from "../../shared/Layout";

interface IProps {
  id: string;
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description?: string;
  isBannerFirst?: boolean;
  imageObjectFit?: "cover" | "contain" | "unset";
  link?: {
    title: string;
    url: string;
  };
}

const Banner: FunctionComponent<IProps> = ({
  id,
  imageUrl,
  imageAlt = "",
  link,
  title,
  description,
  isBannerFirst,
  imageObjectFit = "cover",
}) => {
  return (
    <BannerWrapper id={id}>
      <BannerContainer>
        <ImageContainer
          sx={{
            order: isBannerFirst ? 0 : 1,
            overflow: "hidden",
            boxShadow:
              imageObjectFit === "cover" ? "0px 3px 6px #000000EB" : undefined,
            borderRadius: "21px",
          }}
        >
          <Image
            objectFit={imageObjectFit}
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
          />
        </ImageContainer>
        <BodyContainer
          marginRight={isBannerFirst ? "unset" : "227px"}
          marginLeft={isBannerFirst ? "227px" : "unset"}
        >
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
          {link && (
            <Link href={link.url} passHref>
              <StyledLink
                style={{ alignSelf: isBannerFirst ? "flex-start" : "flex-end" }}
              >
                {link.title}
              </StyledLink>
            </Link>
          )}
        </BodyContainer>
      </BannerContainer>
    </BannerWrapper>
  );
};

const StyledLink = styled("a")`
  color: #1ea1ff;
  font-size: 1.456rem;
`;

const BannerContainer = styled(Stack)`
  position: relative;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 1450px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ImageContainer = styled(Box)`
  position: relative;
  width: 598px;
  height: 623px;
  flex-shrink: 0;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease-out;
  margin-bottom: 3rem;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 1450px) {
    order: 0 !important;
    width: 100%;
    :hover {
      transform: unset;
    }
  }
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
  margin-bottom: 2.56rem;
  @media (max-width: 1450px) {
    text-align: center;
    width: unset;
  }
`;

const BannerWrapper = styled(Layout)`
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  @media (max-width: 1450px) {
    margin-block: 4rem;
    flex-direction: column;
    height: 100%;
  }
`;

export default Banner;
