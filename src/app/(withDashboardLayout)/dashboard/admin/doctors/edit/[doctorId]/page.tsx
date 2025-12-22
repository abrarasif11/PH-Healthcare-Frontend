"use client";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TParams = {
  params: {
    doctorId: string;
  };
};
const DoctorUpdatePage = ({ params }: TParams) => {
  console.log(params?.doctorId);

  const defaultValues = {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    appointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  };

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);

    try {
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <Box>
      <Typography component="h3" variant="h4">
        Update Doctor
      </Typography>
      <PHForms onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput name="name" label="Name" fullWidth={true} sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="appointmentFee"
              type="number"
              label="AppointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update</Button>
      </PHForms>
    </Box>
  );
};

export default DoctorUpdatePage;
