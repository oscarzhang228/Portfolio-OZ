import Project from "./Project";
import styles from "./ProjectsBar.module.scss";
import oudAppPic from "../../assets/oud-app.png";
import marketSafePic from "../../assets/market-safe.png";
import skyviewPic from "../../assets/skyview-portal.png";
import projects from "../../data/projects.json";
import organizeMePic from "../../assets/organize-me.jpg";
import reactLogo from "../../assets/react-logo.svg";
import phishermanLanding from "../../assets/phishermanLanding.png";

type ProjectsDisplayProps = {
  numProjects?: number;
};

type Project = {
  title: string;
  company: string;
  description: string;
  projectLink: string;
  projectImage: string;
  technologies: string[];
};

const imageMap: Record<string, string> = {
  oudAppPic: oudAppPic,
  marketSafePic: marketSafePic,
  skyviewPic: skyviewPic,
  organizeMePic: organizeMePic,
  reactSetupPic: reactLogo,
  phishermanLanding: phishermanLanding,
};

export default function ProjectsDisplay(props: ProjectsDisplayProps) {
  const { numProjects } = props;
  const projectsToDisplay = projects.slice(
    0,
    isNumProjectsValid(numProjects, projects) ? numProjects : projects.length,
  );

  return (
    <section className="d-flex justify-content-around flex-wrap gap-1">
      {projectsToDisplay.map((project, index) => {
        return (
          <section
            className={`${styles["ProjectsBar-ProjectContainer"]} `}
            key={index}
          >
            <Project
              title={project.title}
              company={project.company}
              description={project.description}
              projectLink={project.projectLink}
              projectImage={imageMap[project.projectImage]}
              technologies={project.technologies}
            />
          </section>
        );
      })}
    </section>
  );
}

/**
 * Checks if the number of projects is valid
 * @param numProjects number of projects
 * @param projects list of projects
 * @returns true if valid and false is not
 */
const isNumProjectsValid = (
  numProjects: number | undefined,
  projects: Project[],
) => {
  return numProjects && numProjects > 0 && numProjects <= projects.length;
};
