import styles from "./ProjectsBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardActions, Chip } from "@mui/material";
import oudAppPic from "../../assets/oud-app.png";
import marketSafePic from "../../assets/market-safe.png";
import skyviewPic from "../../assets/skyview-portal.png";
import Button from "@mui/material/Button";
/**
 * ProjectsBar component used to display projects.
 */
export default function ProjectsBar() {
  return (
    <section className={`${styles["ProjectsBar"]} p-3`}>
      <div className="d-flex justify-content-around flex-wrap p-5">
        <section className={`${styles["ProjectsBar-ProjectContainer"]}`}>
          <Project
            title="OUD App"
            company="SocWeB Lab"
            description="A web application for an ongoing study surrounding how those with Opioid Use Disorder react to GPT-4 responses versus user responses. Features include tracking analytics such as time spent on each page, getting the responses to show, as well as an automatic glossary feature."
            projectLink="https://github.com/oscarzhang228/SocWeB-Opioid-Study"
            projectImage={oudAppPic}
            technologies={[
              "React",
              "TypeScript",
              "MongoDB",

              "Vercel Serverless Functions",
            ]}
          />
        </section>
        <section className={`${styles["ProjectsBar-ProjectContainer"]}`}>
          <Project
            title="MarketSafe"
            company="HackED 2024"
            description="A hackathon project utilizing LLMs to detect misinformation from Amazon reviews automatically from a link to the product. Features include data analysis and display through charts, an accurate percentage of the confidence level, and a list of the most likely fake reviews."
            projectLink="https://devpost.com/software/marketsafe"
            projectImage={marketSafePic}
            technologies={[
              "React",
              "Flask",
              "SQLite",
              "GPT API",
              "Google Cloud BigQuery",
            ]}
          />
        </section>
        <section className={`${styles["ProjectsBar-ProjectContainer"]}`}>
          <Project
            title="Skyview Portal"
            company="Fyve By"
            description="An application for hangar managers in order to schedule plane arrivals and departures, view security footage of their hangar, and view their account and billing information. Features include a login system through AWS Cognito, a scheduling system, and a billing system."
            projectLink="https://fyvebyhub.com"
            projectImage={skyviewPic}
            technologies={[
              "React",
              "AWS DynamoDB",
              "AWS Lambda",
              "AWS Cognito",
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
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const learnMoreButtonStyle = {
  fontFamily: "Poppins, sans-serif",
};
