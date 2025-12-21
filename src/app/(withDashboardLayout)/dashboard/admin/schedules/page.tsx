"use client";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display Schedule</Box>
    </Box>
  );
};

export default SchedulesPage;
