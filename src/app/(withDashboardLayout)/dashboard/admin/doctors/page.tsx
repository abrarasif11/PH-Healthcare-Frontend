"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const DoctorsPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create New Doctor</Button>
        <TextField size="small" placeholder="Search Doctor" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
