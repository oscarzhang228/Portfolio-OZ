import styles from "./ProjectsBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardActions, Chip } from "@mui/material";
import oudAppPic from "../../assets/oud-app.png";
/**
 * ProjectsBar component used to display projects.
 */
export default function ProjectsBar() {
  return (
    <section className={`${styles["ProjectsBar"]} p-3`}>
      <div className="container-fluid">
        <section className="row gx-3">
          <Project
            title="Opiod Use Disorder App"
            company="Social Dynamics and Well-Being Lab"
            description="A web application that allows participants to read question response pairs related to opioid use disorders and answer questions for an ongoing study. Tracks analytics such as time spent on each question as well as which buttons were clicked."
            projectLink=""
            projectImage={oudAppPic}
            technologies={[
              "React",
              "TypeScript",
              "MongoDB",
              "Vercel Serverless Functions",
              "SASS",
            ]}
          />
        </section>
      </div>
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
  size?: string;
};

/**
 *
 * @param title Name of the project.
 * @param company Name of the company.
 * @param description Description of the project.
 * @param projectLink Link to the project.
 * @param projectImage Image of the project.
 * @param size Size of the project in terms of bootstrap colors. Used to override the default
 * @param technologiesColor Color of the chips for the technologies used.
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
    size,
    technologies,
  } = props;

  const sizeClass = size ? size : "col-12 col-md-6 col-lg-5 col-xl-4";
  return (
    <Card className={`${sizeClass} text-center`}>
      <CardContent>
        <img src={projectImage} className={`mw-100 border rounded `} />
        <h1 className={`${styles["Project-Title"]} py-2`}>{title}</h1>
        <h2 className={`${styles["Project-Subtitle"]}`}>{company}</h2>
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
      <CardActions>hello</CardActions>
    </Card>
  );
};

// image
// name of the project
// name of the company
// description
// stylish buttons for tech used
// button to check out the project
