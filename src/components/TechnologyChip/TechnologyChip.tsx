import Chip from "@mui/material/Chip";

type TechnologyChipProps = {
  keyProp: number;
  label: string;
};

/**
 * TechnologyChip component used to display a technology used
 * @param props index and tech
 * @returns TechnologyChip component
 */
export default function TechnologyChip(props: TechnologyChipProps) {
  const { keyProp, label } = props;
  return (
    <Chip
      key={keyProp}
      label={label}
      sx={{
        fontWeight: "400",
        fontFamily: "Poppins, sans-serif",
        transition: "500ms",
        "&:hover": {
          backgroundColor: "rgb(155, 184, 205)",
          transform: "translateY(-5px)",
          transition: "500ms",
        },
      }}
    />
  );
}
