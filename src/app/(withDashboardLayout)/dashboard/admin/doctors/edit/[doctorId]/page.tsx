"use client";

import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  const router = useRouter();
  const id = params.doctorId;
  const { data, isLoading } = useGetDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!data) {
    return <Typography>No doctor found</Typography>;
  }

  const defaultValues = {
    email: data.email ?? "",
    name: data.name ?? "",
    contactNumber: data.contactNumber ?? "",
    address: data.address ?? "",
    registrationNumber: data.registrationNumber ?? "",
    gender: data.gender ?? "",
    experience: data.experience ?? 0,
    appointmentFee: data.appointmentFee ?? 0,
    qualification: data.qualification ?? "",
    currentWorkingPlace: data.currentWorkingPlace ?? "",
    designation: data.designation ?? "",
    profilePhoto: data.profilePhoto ?? "",
  };

  const handleFormSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.appointmentFee = Number(values.appointmentFee);
    values.id = id;
    // console.log("Updated Values:", values);
    try {
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully");
        router.push("/dashboard/admin/doctors");
      }
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Box>
      <Typography component="h3" variant="h4">
        Update Doctor
      </Typography>

      <PHForms
        onSubmit={handleFormSubmit}
        defaultValues={data && defaultValues}
      >
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} md={4}>
            <PHInput name="name" label="Name" fullWidth sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="email"
              type="email"
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="contactNumber"
              label="Contact Number"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput name="address" label="Address" fullWidth sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHSelectField
              name="gender"
              label="Gender"
              items={Gender}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="appointmentFee"
              type="number"
              label="Appointment Fee"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained">
          Update
        </Button>
      </PHForms>
    </Box>
  );
};

export default DoctorUpdatePage;
