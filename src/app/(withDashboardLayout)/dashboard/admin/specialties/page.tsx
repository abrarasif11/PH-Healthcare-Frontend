"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialistModal from "./components/SpecialtyModel";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  // console.log(data);
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
      <Box>
        <h1>Display Specialties</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
