"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": { textDecoration: "none" },
            "&:focus": { textDecoration: "none" },
            "&:active": { textDecoration: "none" },
          }}
        >
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography
            component={Link}
            href="/consultation"
            sx={{
              textDecoration: "none",
              "&:hover, &:active, &:focus, &:visited": {
                textDecoration: "none",
              },
            }}
          >
            Consultation
          </Typography>

          <Typography
            component={Link}
            href="/health-care"
            sx={{
              textDecoration: "none",
              "&:hover, &:active, &:focus, &:visited": {
                textDecoration: "none",
              },
            }}
          >
            Health Plans
          </Typography>

          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
