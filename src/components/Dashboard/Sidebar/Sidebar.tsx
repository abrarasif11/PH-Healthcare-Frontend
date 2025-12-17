import { Box, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../../../assets/svgs/logo.svg";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItems from "./SidebarItems";
import { getUserInfo } from "@/services/auth.services";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        component={Link}
        href="/"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        sx={{
          py: 1,
          mt: 1,
          textDecoration: "none",
          color: "inherit",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Image src={logo} width={40} height={40} alt="logo" />

        <Typography variant="h6" component="h1" sx={{ cursor: "pointer" }}>
          PH Health Care
        </Typography>
      </Stack>

      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
