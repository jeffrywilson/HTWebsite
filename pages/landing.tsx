import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Banner from "../src/components/pages/landing/Banner";
import Faq from "../src/components/pages/landing/Faq";
import Features from "../src/components/pages/landing/Features";
import Footer from "../src/components/pages/landing/Footer";
import FullScreenBanner from "../src/components/pages/landing/FullScreenBanner";
import MainBanner from "../src/components/pages/landing/MainBanner";
import MoreFeatures from "../src/components/pages/landing/MoreFeatures";
import Partners from "../src/components/pages/landing/Partners";
import Roadmap from "../src/components/pages/landing/Roadmap";
import TheTeam from "../src/components/pages/landing/TheTeam";

const Landing: NextPage = () => {
  return (
    <Stack direction="column">
      <MainBanner />
      <Banner
        id="about"
        title="Welcome to High Tides"
        description="Bringing the passion behind gaming, to the blockchain High Tides was
            built to change the way blockchain games operate. Current blockchain
            games revolve around the in game economy, and are more focused on
            ROI than user experience. We have mashed the passion behind web2
            games with a never seen before earnings model, bringing a breath of
            ocean air into the space."
        imageUrl="/images/banner-image.png"
        imageObjectFit="contain"
      />
      <Features id="features" />
      <MoreFeatures id="more_features" />
      <Partners id="partners" />
      <TheTeam id="team" />
      <Roadmap />
      <Banner
        id="about"
        title="Welcome to High Tides"
        description="Bringing the passion behind gaming, to the blockchain High Tides was
            built to change the way blockchain games operate. Current blockchain
            games revolve around the in game economy, and are more focused on
            ROI than user experience. We have mashed the passion behind web2
            games with a never seen before earnings model, bringing a breath of
            ocean air into the space."
        imageUrl="/images/media_sharing.png"
        link={{ title: "Learn more >", url: "/Learn more >" }}
      />
      <Faq id="faq" />
      <FullScreenBanner
        id="about"
        title="Welcome to High Tides"
        description="Embark on a new adventure, explore the high seas and the open world
         of High TidesEmbark on a new adventure, explore the high seas and the open world
          of High TidesEmbark on a"
        imageUrl="/images/big-banner.png"
        link={{ title: "Learn more >", url: "/Learn more >" }}
      />
      <EmptyBox />
      <Footer />
    </Stack>
  );
};

const EmptyBox = styled(Box)`
  height: 20rem;
`;

export default Landing;
