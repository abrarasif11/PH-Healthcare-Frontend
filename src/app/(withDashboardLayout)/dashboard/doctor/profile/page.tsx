"use client";

import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import { Box, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import ProfileUpdateModal from "./components/ProfileUpdateModal";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import DoctorInformation from "./components/DoctorInformation";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // image state
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // persistent cache buster (survives re-render, resets only on reload)
  const imageVersionRef = useRef<number>(Date.now());

  const { data, isLoading, refetch } = useGetMYProfileQuery(undefined);

  const [updateMYProfile, { isLoading: uploading }] =
    useUpdateMYProfileMutation();

  /**
   * Sync backend image on load & reload
   */
  useEffect(() => {
    if (data?.profilePhoto) {
      setImageSrc(data.profilePhoto);
      imageVersionRef.current = Date.now(); // bust cache on reload
    }
  }, [data?.profilePhoto]);

  /**
   * Upload handler
   */
  const fileUploadHandler = async (file: File) => {
    // Local preview
    const previewUrl = URL.createObjectURL(file);
    setImageSrc(previewUrl);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    try {
      await updateMYProfile(formData).unwrap();
      await refetch();

      // force new version after upload
      imageVersionRef.current = Date.now();
    } catch (error) {
      console.error("Profile image update failed", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* LEFT */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                borderRadius: 1,
                overflow: "hidden",
                bgcolor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imageSrc ? (
                imageSrc.startsWith("blob:") ? (
                  // Local preview
                  <img
                    src={imageSrc}
                    alt="Profile Photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  // Server image (ALWAYS cache-busted)
                  <Image
                    src={`${imageSrc}?v=${imageVersionRef.current}`}
                    alt="Profile Photo"
                    height={300}
                    width={400}
                    style={{ objectFit: "cover" }}
                  />
                )
              ) : (
                <p>No Image</p>
              )}
            </Box>

            <Box my={3}>
              {uploading ? (
                <p>Uploading...</p>
              ) : (
                <AutoFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="text"
                  accept="image/*"
                />
              )}
            </Box>

            <Button
              fullWidth
              endIcon={<ModeEditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={8}>
            <DoctorInformation data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
