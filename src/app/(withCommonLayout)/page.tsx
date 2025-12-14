"use client";
import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import Specialist from "@/components/UI/Homepage/Specialtist/Specialist";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
    </>
  );
};

export default HomePage;
