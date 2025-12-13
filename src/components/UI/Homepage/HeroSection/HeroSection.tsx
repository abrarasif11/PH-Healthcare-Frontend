"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bgImg from "../../../../assets/svgs/grid.svg";
import rightImg from "../../../../assets/svgs/arrow.svg";
import doctor1 from "../../../../assets/images/doctor1.png";
import doctor2 from "../../../../assets/images/doctor2.png";
import doctor3 from "../../../../assets/images/doctor3.png";
import Stetoscope from "../../../../assets/images/Stetoscope.png";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={bgImg} alt="grid" />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Smart healthcare for a healthier tomorrow. Book consultations, manage
          health plans, and access care anytime, anywhere. Experience seamless
          digital healthcare with trusted professionals, secure data handling,
          and personalized care tailored to your needs. PH Health Care brings
          convenience, reliability, and innovation together to support your
          well-being at every step.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={rightImg} width={100} height={100} alt="arrow"></Image>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image src={doctor1} alt="doctor1" height={380} width={240}></Image>
          </Box>
          <Box>
            <Image src={doctor2} alt="doctor2" height={350} width={240}></Image>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image src={doctor3} alt="doctor2" height={240} width={240}></Image>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={Stetoscope}
            alt="doctor2"
            height={180}
            width={180}
          ></Image>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
