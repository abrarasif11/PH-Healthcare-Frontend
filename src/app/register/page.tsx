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

const RegisterPage = () => {
  return (
    <Container
      sx={{
        padding: "50px",
      }}
    >
      <Stack
        sx={{
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
            <form>
              <Grid container spacing={3} my={1} ml={5}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact"
                    variant="outlined"
                    type="tel"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    type="text"
                    size="small"
                    fullWidth={true}
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
