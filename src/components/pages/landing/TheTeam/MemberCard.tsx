import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

const MemberCard: FunctionComponent = () => {
  const [left, setLeft] = useState<boolean | undefined>(true);
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "140px", md: "347px" },
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <ImageContainer
        sx={{
          height: { xs: "145px", md: "197px" },
          width: { xs: "140px", md: "188px" },
        }}
      >
        <Image
          src="/images/asd.jpg"
          alt="asd"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <Stack sx={{ marginLeft: "18px" }} direction="column">
        <Name>{`Navid`}</Name>
        <Description>{`3D artist, UX/Ui designer and super handome`}</Description>
        {
          left ? 
          <PseduoDetail>
            <Button onClick={()=>{
              setLeft(false);
            }}>
              <ArrowForwardIosIcon sx={{ color: "#1EA1FF" }} />
            </Button>
          </PseduoDetail>
          : 
          <Detail>
            <Description>{`detail`}</Description>
            <Button onClick={()=>{
              setLeft(true);
            }}>
              <ArrowBackIosIcon sx={{ color: "#1EA1FF" }} />
            </Button>
          </Detail>
        }
        
      </Stack>
    </Stack>
  );
};

const PseduoDetail = styled(Box)({
  height: "100px",
  display: "flex",
  padding: "10px 0px",
  alignItems: "flex-end",
});

const Detail = styled(Box)({
  display: "flex",
  background: "#3b3b3b",
  height: "100px",
  borderRadius: "6px",
  padding: "10px",
  flexDirection: "column",
  button: {
    alignSelf: "flex-end",
    svg: {
      marginLeft: "10px",
    }
  }
});

const ImageContainer = styled(Box)({
  flexShrink: "0",
  maskImage: "url(/images/mask.png)",
  maskSize: "100%",
  position: "relative",
});

const Name = styled(Typography)({
  marginBottom: "10px",
  fontSize: "21px",
  fontFamily: "sigmarone",
});

const Description = styled(Typography)({
  fontSize: "13px",
  fontFamily: "mmrtext",
  flex: 1,
});

const Button = styled(ButtonBase)({
  width: "33px",
  height: "33px",
  borderRadius: "10px",
  backgroundColor: "white",
  padding: "10px",
});

export default MemberCard;
