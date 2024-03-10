import styles from "./ProjectsBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardActions } from "@mui/material";
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
            description="A mobile app for the Social Dynamics and Well-Being Lab at the University of Oklahoma."
            projectLink=""
            projectImage={oudAppPic}
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
  size?: number;
};
/**
 * Project component used to display a single project.
 */
const Project = (props: ProjectProps) => {
  const { title, company, description, projectLink, projectImage, size } =
    props;

  const sizeClass = size ? `col-${size}` : "col-3";
  return (
    <Card className={`${sizeClass} text-center`}>
      <CardContent>
        <img src={projectImage} className={`mw-100 border rounded `} />
        <h1 className={`${styles["Project-Title"]} py-2`}>{title}</h1>
        <h2 className={`${styles["Project-Subtitle"]}`}>{company}</h2>
        <p className={`${styles["Project-Body"]}`}>{description}</p>
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
