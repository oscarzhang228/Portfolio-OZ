import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./SocialBar.module.scss";

/**
 * SocialBar component used to display social media links and icons.
 */
export default function SocialBar() {
  return (
    <section className={`d-flex align-items-center justify-content-center`}>
      <a
        href="https://www.linkedin.com/in/oscarzhang228"
        target="_blank"
        className={`${styles["SocialBar-Icon"]}`}
      >
        <LinkedInIcon sx={linkedInStyle} />
      </a>
      <a
        href="https://www.github.com/oscarzhang228"
        target="_blank"
        className={`pe-1 ${styles["SocialBar-Icon"]}`}
      >
        <GitHubIcon sx={iconStyle} />
      </a>
      <a
        href="mailto:oscarzhang228@gmail.com"
        target="_blank"
        className={`${styles["SocialBar-Icon"]}`}
      >
        <EmailIcon sx={iconStyle} />
      </a>
    </section>
  );
}

const linkedInStyle = {
  width: "3.25rem",
  height: "3.25rem",
  padding: "0",
  color: "black",
};

const iconStyle = {
  width: "2.8rem",
  height: "2.8rem",
  color: "black",
};
