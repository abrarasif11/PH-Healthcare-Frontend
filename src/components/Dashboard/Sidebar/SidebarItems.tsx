import Link from "next/link";
import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "@/types";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SidebarItems = ({ item, index }: IProps) => {
  return (
    <Link href="/">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
