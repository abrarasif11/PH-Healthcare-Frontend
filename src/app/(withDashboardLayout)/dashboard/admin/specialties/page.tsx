"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialistModal from "./components/SpecialtyModel";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignContent="center"
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
