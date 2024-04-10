import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import { useState } from "react";
import styles from "./Navigation.module.scss";
import { Divider } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChecklistIcon from "@mui/icons-material/Checklist";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { ReactElement } from "react";
import { useLocation, useNavigate, Location } from "react-router-dom";

type NavigationProps = {
  homeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
};

type LocationState = {
  from: string;
};

/**
 * Navigation component used to display the navigation bar.
 * @param props properties containing the refs for navigation
 * @returns Navigation component used to display the navigation bar.
 */
export default function Navigation(props: NavigationProps) {
  const { homeRef, projectsRef, experienceRef } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  /**
   * Handles the click event for the navigation items on the same page. If not on the same page it'll navigate to the home page and then scroll to the element.
   * @param location location to navigate to
   * @param ref reference to the element to scroll to
   */
  const handleNavigationSamePage = (
    location: Location<LocationState>,
    ref: React.RefObject<HTMLElement>
  ) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToElement(ref);
      }, 0);
    } else {
      scrollToElement(ref);
    }

    toggleDrawer();
  };

  /**
   * Scrolls to the element
   * @param ref reference to the element to scroll to
   */
  const scrollToElement = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Handles the click event for the navigation items to external links
   * @param link linke to navigate to
   */
  const handleNavigationExternal = (link: string) => {
    window.open(link, "_blank");
    toggleDrawer();
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
        <section className={`py-4 px-4 d-flex flex-column gap-3 h-100`}>
          <NavigationItem
            icon={<HomeOutlinedIcon />}
            text="Home"
            onClick={() => handleNavigationSamePage(location, homeRef)}
          />
          <Divider />
          <NavigationItem
            icon={<ChecklistIcon />}
            text="Projects"
            onClick={() => handleNavigationSamePage(location, projectsRef)}
          />
          <NavigationItem
            icon={<WorkOutlineOutlinedIcon />}
            text="Experience"
            onClick={() => handleNavigationSamePage(location, experienceRef)}
          />
          <section className="mt-auto"></section>
          <NavigationItem
            icon={<ArticleOutlinedIcon />}
            text="Resume"
            onClick={() =>
              handleNavigationExternal(
                "https://drive.google.com/file/d/1oh-SenQzfQggCx2H306BzVdGYuu7ZDfN/view?usp=sharing"
              )
            }
          ></NavigationItem>

          <NavigationItem
            icon={<GitHubIcon />}
            text="GitHub"
            onClick={() =>
              handleNavigationExternal("https://github.com/oscarzhang228")
            }
          ></NavigationItem>
          <Divider />
          <NavigationItem
            icon={<LinkedInIcon />}
            text="LinkedIn"
            onClick={() =>
              handleNavigationExternal(
                "https://www.linkedin.com/in/oscarzhang228/"
              )
            }
          ></NavigationItem>
          <NavigationItem
            icon={<EmailOutlinedIcon />}
            text="Email"
            onClick={() =>
              handleNavigationExternal("mailto:oscarzhang228@gmail.com")
            }
          />
        </section>
      </Drawer>
    </>
  );
}
type NavigationItemProps = {
  icon: ReactElement;
  text: string;
  onClick?: () => void;
};

/**
 * NavigationItem component used to display a navigation item.
 * @param props properties containing the icon and text for the navigation item as well as the ref to navigate to when clicked.
 * @returns NavigationItem component used to display a navigation item.
 */
const NavigationItem = (props: NavigationItemProps) => {
  const { icon, text, onClick } = props;

  return (
    <section className="d-flex gap-3 align-items-center" onClick={onClick}>
      {icon}
      <h1 className={`${styles["Navigation-Item"]} m-0`}>{text}</h1>
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
