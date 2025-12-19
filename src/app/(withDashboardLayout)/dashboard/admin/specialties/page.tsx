"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";

import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import SpecialtyModel from "./components/SpecialtyModel";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  // console.log(data);
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    // {
    //   field: "icon",
    //   headerName: "Icon",
    //   flex: 1,
    //   renderCell: ({ row }) => {
    //     return (
    //       <Box>
    //         <Image src={row.icon} width={30} height={30} alt="icon" />
    //       </Box>
    //     );
    //   },
    // },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return <></>;
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModel open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
