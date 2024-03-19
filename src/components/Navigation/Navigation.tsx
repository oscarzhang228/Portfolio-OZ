import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={toggleDrawer} sx={navigationButtonStyle}>
        <MenuOpenIcon sx={menuIconStyle} />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        sx={drawerStyle}
      >
        <section>Navigation</section>
      </Drawer>
    </>
  );
}

const drawerStyle = {
  maxWidth: "100vw",
};

const menuIconStyle = {
  color: "black",
  fontSize: "1.7rem",
};
const navigationButtonStyle = {
  backgroundColor: "e9e9e9",
  position: "fixed",
  top: "1rem",
  right: "1rem",
  width: "3rem",
};
