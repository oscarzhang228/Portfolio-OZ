import { CardContent, CardActions, Card } from "@mui/material";
import TechnologyChip from "../TechnologyChip/TechnologyChip";
import Button from "../Button/Button";
import styles from "./ProjectsBar.module.scss";
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
export default function Project(props: ProjectProps) {
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
            return <TechnologyChip keyProp={index} label={tech} />;
          })}
        </section>
      </CardContent>
      <CardActions className="d-flex justify-content-center align-items-end mt-auto ">
        <Button
          onClick={() => {
            window.open(projectLink, "_blank");
          }}
          label={"Learn More"}
        ></Button>
      </CardActions>
    </Card>
  );
}
