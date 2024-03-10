import styles from "./ProjectsBar.module.scss";
import Paper from "@mui/material/Paper";
/**
 * ProjectsBar component used to display projects.
 */
export default function ProjectsBar() {
  return (
    <section className={`${styles["ProjectsBar"]}`}>
      <h2>Projects</h2>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </section>
  );
}

type ProjectProps = {
  elevation: number;
  title: string;
  description: string;
  projectLink: string;
};
/**
 * Project component used to display a single project.
 */
const Project = (props: ProjectProps) => {
  return <Paper></Paper>;
};
