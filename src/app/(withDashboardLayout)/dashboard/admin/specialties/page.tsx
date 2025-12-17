"use client";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const SpecialtiesPage = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignContent="center"
      >
        <Button>Create Specialty</Button>
        <PHModal />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
