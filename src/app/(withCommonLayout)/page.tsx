"use client";
import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/Homepage/HowItWorks/HowItWorks";
import Specialist from "@/components/UI/Homepage/Specialtist/Specialist";
import Stats from "@/components/UI/Homepage/Stats/Stats";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </>
  );
};

export default HomePage;
