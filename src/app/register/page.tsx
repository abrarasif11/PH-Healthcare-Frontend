"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../assets/svgs/logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";

interface IPatientData {
  name: string;

  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = (data) =>
    console.log(data);

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} width={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Patient Registered
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3} my={1} ml={5}>
                <Grid item md={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    type="text"
                    size="small"
                    {...register("patient.name")}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    {...register("patient.email")}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    size="small"
                    {...register("password")}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact"
                    variant="outlined"
                    type="tel"
                    size="small"
                    {...register("patient.contactNumber")}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    type="text"
                    size="small"
                    {...register("patient.address")}
                  ></TextField>
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login" underline="none">
                  Login
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
