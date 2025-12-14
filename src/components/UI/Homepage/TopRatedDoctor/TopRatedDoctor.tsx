"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type Doctor = {
  id: string;
  name: string;
  qualification: string;
  designation: string;
  profilePhoto?: string | null;
};

const TopRatedDoctor = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/v1/doctor?page=1&limit=3"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const json = await res.json();
        setDoctors(json.data ?? []);
      } catch (err) {
        console.error(err);
        setError("Unable to load doctors");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" my={10}>
        <Typography variant="h6">Loading doctors...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" my={10}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      {/* Section Header */}
      <Box textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography fontSize={18} mt={2}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography fontSize={18}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>

      {/* Doctors */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {doctors.map((doctor) => (
            <Grid item key={doctor.id} xs={12} md={4}>
              <Card>
                {/* Image */}
                <Box sx={{ height: 280, position: "relative" }}>
                  <Image
                    src={doctor.profilePhoto || "/doctor-placeholder.png"}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Content */}
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {doctor.name}
                  </Typography>
                  <Typography color="text.secondary" mt={0.5}>
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                </CardContent>

                {/* Actions */}
                <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                  <Button size="small">Book Now</Button>
                  <Button size="small" variant="outlined">
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All */}
        <Box textAlign="center" mt={4}>
          <Button variant="outlined">View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctor;
