import styles from "./ProjectsBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardActions, Chip } from "@mui/material";
import oudAppPic from "../../assets/oud-app.png";
import marketSafePic from "../../assets/market-safe.png";
/**
 * ProjectsBar component used to display projects.
 */
export default function ProjectsBar() {
  return (
    <section className={`${styles["ProjectsBar"]} p-3`}>
      <div className="d-flex justify-content-around flex-wrap">
        <section className={`${styles["ProjectsBar-ProjectContainer"]}`}>
          <Project
            title="OUD App"
            company="SocWeB Lab"
            description="A web application for an ongoing study surrounding how those with Opiod Use Disorder react to GPT-4 generated responses versus real responses. Features include tracking analytics such as time spent on each page as well as getting GPT-4 and user-generated responses."
            projectLink=""
            projectImage={oudAppPic}
            technologies={[
              "React",
              "TypeScript",
              "MongoDB",
              "SASS",
              "Vercel Serverless Functions",
            ]}
          />
        </section>
        <section className={`${styles["ProjectsBar-ProjectContainer"]}`}>
          <Project
            title="MarketSafe"
            company="HackED 2024"
            description="A hackathon project utilizing LLMs to detect misinformation from Amazon reviews automatically from a link to the product. Features include charts displaying data, an accurate percentage of how possible the review is fake, and a list of the most likely fake reviews."
            projectLink=""
            projectImage={marketSafePic}
            technologies={[
              "React",
              "Flask",
              "SQLite",
              "OpenAI API",
              "Google Cloud BigQuery",
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
};

/**
 *
 * @param title Name of the project.
 * @param company Name of the company.
 * @param description Description of the project.
 * @param projectLink Link to the project.
 * @param projectImage Image of the project.

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
    technologies,
  } = props;

  return (
    <Card className={`${styles["ProjectsBar-Project"]} w-100 text-center`}>
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
