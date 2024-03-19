import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";

export default function Navigation() {
  return (
    <>
      <Button sx={navigationButtonStyle}>
        <MenuOpenIcon sx={menuIconStyle} />
      </Button>
    </>
  );
}

const menuIconStyle = {
  color: "black",
  fontSize: "2rem",
};
const navigationButtonStyle = {
  backgroundColor: "e9e9e9",
  position: "fixed",
  top: "1rem",
  right: "1rem",
  width: "3rem",
};
