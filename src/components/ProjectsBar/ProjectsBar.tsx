import styles from "./ProjectsBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardActions, Chip } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import oudAppPic from "../../assets/oud-app.png";
import marketSafePic from "../../assets/market-safe.png";
import skyviewPic from "../../assets/skyview-portal.png";
import projects from "../../data/projects.json";

const imageMap: any = {
  oudAppPic: oudAppPic,
  marketSafePic: marketSafePic,
  skyviewPic: skyviewPic,
};

const firstThreeProjects = projects.slice(0, 3);
/**
 * ProjectsBar component used to display projects.
 */
export default function ProjectsBar() {
  const navigate = useNavigate();
  return (
    <section
      className={`${styles["ProjectsBar"]} p-2 p-lg-5 d-flex flex-column gap-2`}
    >
      <h1 className={`${styles["ProjectsBar-Header"]} p-2 px-3`}>
        I've worked on:
      </h1>
      <section className="d-flex justify-content-around flex-wrap gap-1">
        {firstThreeProjects.map((project, index) => {
          return (
            <section className={`${styles["ProjectsBar-ProjectContainer"]} `}>
              <Project
                key={index}
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
      <section className={`${styles["ProjectsBar-AllProjects"]}`}>
        <Button
          sx={learnMoreButtonStyle}
          onClick={() => {
            navigate("/projects");
          }}
          variant="outlined"
        >
          All Projects
        </Button>
      </section>
    </section>
  );
}

type ProjectProps = {
  title: string;
  company: string;
  description: string;
  projectLink: string;
  projectImage: string;
  technologies: string[];
};

/**
 *
 * @param title Name of the project.
 * @param company Name of the company.
 * @param description Description of the project.
 * @param projectLink Link to the project.
 * @param projectImage Image of the project.
 * @param technologies Technologies used in the project.
 * @returns Project component used to display a project.
 */
const Project = (props: ProjectProps) => {
  const {
    title,
    company,
    description,
    projectLink,
    projectImage,
    technologies,
  } = props;

  return (
    <Card
      className={`${styles["ProjectsBar-Project"]} w-100 h-100 text-center d-flex flex-column`}
    >
      <CardContent>
        <img src={projectImage} className={`mw-100 border rounded `} />
        <h1 className={`${styles["Project-Title"]} pt-2`}>{title}</h1>
        <h2 className={`${styles["Project-Subtitle"]} py-2`}>{company}</h2>
        <p className={`${styles["Project-Body"]} px-3`}>{description}</p>
        <section className="d-flex flex-wrap gap-2 justify-content-center">
          {technologies?.map((tech, index) => {
            return (
              <Chip
                key={index}
                label={tech}
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
          })}
        </section>
      </CardContent>
      <CardActions className="d-flex justify-content-center align-items-end mt-auto ">
        <Button
          sx={learnMoreButtonStyle}
          onClick={() => {
            window.open(projectLink, "_blank");
          }}
          variant="outlined"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const learnMoreButtonStyle = {
  fontFamily: "Poppins, sans-serif",
  color: "black",
  border: "none",
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "500ms",
    border: "none",
  },
};
