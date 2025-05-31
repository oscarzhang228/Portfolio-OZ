import dayjs from "dayjs";
import styles from "./Footer.module.scss";
import SocialBar from "../SocialBar/SocialBar";

export default function Footer() {

  const today = dayjs();
  const year = today.year();
  return (
    <footer
      className={`${styles["Footer"]} d-flex justify-content-between align-items-center p-3`}
    >
      <p className={`${styles["Footer-Content"]} m-0 px-2`}>
        © {year} Oscar Zhang
      </p>
      <SocialBar />
    </footer>
  );
}
