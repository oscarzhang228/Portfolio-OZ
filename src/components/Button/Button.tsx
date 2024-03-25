import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export default function Button(props: ButtonProps) {
  const { onClick, label } = props;

  return (
    <MUIButton sx={defaultButtonStyle} onClick={onClick} variant="outlined">
      {label}
    </MUIButton>
  );
}

const defaultButtonStyle = {
  fontFamily: "Poppins, sans-serif",
  color: "black",
  border: "none",
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "500ms",
    border: "none",
  },
};
