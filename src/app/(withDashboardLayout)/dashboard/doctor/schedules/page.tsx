"use client";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import DoctorSchedulesModal from "./components/DoctorSchedulesModal";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorSchedulesModal open={isModalOpen} setOpen={setIsModalOpen} />
    </Box>
  );
};

export default DoctorSchedulePage;
