import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import { useState } from "react";
import styles from "./Navigation.module.scss";
import { Divider } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChecklistIcon from "@mui/icons-material/Checklist";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { ReactElement } from "react";

type NavigationProps = {
  homeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
};

/**
 * Navigation component used to display the navigation bar.
 * @param props properties containing the refs for navigation
 * @returns Navigation component used to display the navigation bar.
 */
export default function Navigation(props: NavigationProps) {
  const { homeRef, projectsRef } = props;

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
        <section className={`py-3 px-4 d-flex flex-column gap-3`}>
          <NavigationItem
            icon={<HomeOutlinedIcon />}
            text="Home"
            navRef={homeRef}
            toggleDrawer={toggleDrawer}
          />
          <Divider />
          <NavigationItem
            icon={<ChecklistIcon />}
            text="Projects"
            navRef={projectsRef}
            toggleDrawer={toggleDrawer}
          />
          <NavigationItem
            icon={<WorkOutlineOutlinedIcon />}
            text="Experience"
            toggleDrawer={toggleDrawer}
          />
          <Divider />
          <NavigationItem
            icon={<PersonOutlinedIcon />}
            text="About"
            toggleDrawer={toggleDrawer}
          />
          <NavigationItem
            icon={<LocalPhoneOutlinedIcon />}
            text="Contact"
            toggleDrawer={toggleDrawer}
          />
        </section>
      </Drawer>
    </>
  );
}
type NavigationItemProps = {
  icon: ReactElement;
  text: string;
  navRef?: React.RefObject<HTMLElement>;
  toggleDrawer?: () => void;
};

/**
 * NavigationItem component used to display a navigation item.
 * @param props properties containing the icon and text for the navigation item as well as the ref to navigate to when clicked.
 * @returns NavigationItem component used to display a navigation item.
 */
const NavigationItem = (props: NavigationItemProps) => {
  const { icon, text, navRef, toggleDrawer } = props;

  return (
    <section
      className="d-flex gap-3 align-items-center"
      onClick={() => {
        // scroll and then close the drawer
        navRef?.current?.scrollIntoView();
        toggleDrawer?.();
      }}
    >
      {icon}
      <h1 className={`${styles["Navigation-Item"]} m-0 pt-1`}>{text}</h1>
    </section>
  );
};

const drawerStyle = {
  "& .MuiDrawer-paper": {
    minWidth: "15rem",
    backgroundColor: "e9e9e9",
  },
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
