import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Image from "next/image";
import logo from "../../../assets/svgs/logo.svg";
import Link from "next/link";

const Sidebar = () => {
  const drawer = (
    <div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
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

      {drawer}
    </Box>
  );
};

export default Sidebar;
