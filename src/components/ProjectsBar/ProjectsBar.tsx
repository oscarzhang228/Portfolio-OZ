import styles from "./ProjectsBar.module.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import ProjectsDisplay from "./ProjectsDisplay";

type ProjectsBarProps = {
  numProjects: number;
};

/**
 * ProjectsBar component used to display the first three projects in the projects.json file on the landing page
 * @param props properties containing the number of projects to display
 * @returns ProjectsBar component
 */
export default function ProjectsBar(props: ProjectsBarProps) {
  const { numProjects } = props;

  const navigate = useNavigate();
  return (
    <section
      className={`${styles["ProjectsBar"]} p-2 p-lg-5 d-flex flex-column gap-2`}
    >
      <h1 className={`${styles["ProjectsBar-Header"]} p-2 px-3`}>
        I've worked on:
      </h1>
      <ProjectsDisplay numProjects={numProjects} />
      <section className={`${styles["ProjectsBar-AllProjects"]}`}>
        <Button
          onClick={() => {
            navigate("/projects");
          }}
          label="All Projects"
        ></Button>
      </section>
    </section>
  );
}
