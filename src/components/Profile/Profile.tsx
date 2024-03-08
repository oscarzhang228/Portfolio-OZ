import profilePic from "../../assets/profile-pic.png";
import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <section className="d-flex flex-column align-items-center">
      <img src={profilePic} className={styles["Profile-Logo"]}></img>
      <section className={`text-center`}>
        <h1 className={`${styles["Profile-Title"]}`}>Software Engineer</h1>
        <p className={`${styles["Profile-Body"]} p-3 px-5`}>
          I build value through creating scalable and easy to read software.
        </p>
      </section>
    </section>
  );
}

// Logo
// Software Engineer
// I build value through creating scalable and easy to read software.
