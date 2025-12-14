import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Grid from "@mui/material/Grid";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:3000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  //   console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {doctors.map((doctor: any) => (
            <Grid item key={doctor.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: 280,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={doctor.profilePhoto || "/doctor-placeholder.png"}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {doctor.name}
                  </Typography>

                  <Typography color="text.secondary" mt={0.5}>
                    {doctor.qualification}, {doctor.designation}
                  </Typography>

                  {/* Address */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <LocationOnIcon fontSize="small" />
                    {doctor.address}
                  </Typography>
                </CardContent>

                {/* Actions */}
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    pb: 2,
                  }}
                >
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
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

export default TopRatedDoctors;
