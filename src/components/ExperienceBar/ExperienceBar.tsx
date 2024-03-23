import styles from "./ExperienceBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import fyvebyLogo from "../../assets/fyveby.png";
/**
 * ExperienceBar component used to display the jobs I've had on the landing page
 * @returns ExperienceBar component
 */
export default function ExperienceBar() {
  return (
    <section
      className={`${styles["ExperienceBar"]} p-2 p-lg-5 d-flex flex-column gap-2`}
    >
      <h1 className={`${styles["ExperienceBar-Header"]} p-2 px-3`}>
        I've worked with:
      </h1>
      <section className="p-3">
        <Experience
          title="Software Engineer Intern"
          company="Fyve By"
          description="An aviation startup in the ground damage prevention space creating a digital clone of hangars. I worked on the backend and front-end of their web application for managers to oversee scheduling, template hangars, and account/billing details. I also worked on the iOS application for crew moving planes to be able to see the created templates as well as for near-collision alarms when moving too close to another plane. I mainly used TypeScript, AWS, React, and C#."
          logo={fyvebyLogo}
        />
      </section>
    </section>
  );
}

type ExperienceProps = {
  title: string;
  company: string;
  description: string;
  logo: string;
};
const Experience = (props: ExperienceProps) => {
  const { title, company, description, logo } = props;
  return (
    <Card className="d-flex gap-2 p-3 flex-wrap flex-md-nowrap justify-content-start">
      <CardMedia
        className={`${styles["Experience-Logo"]} d-flex justify-content-center flex-column align-items-center px-2 py-3`}
      >
        <img src={logo} className="mw-100 mh-100"></img>
      </CardMedia>
      <CardContent className="d-flex flex-wrap align-items-center text-nowrap pb-0">
        <section>
          <h1 className={`${styles["Experience-Title"]}`}>{company}</h1>
          <h2 className={`${styles["Experience-Subtitle"]}`}>{title}</h2>
        </section>
      </CardContent>
      <CardContent className="py-1 d-flex align-items-center">
        <p className={`${styles["Experience-Body"]} text-wrap mb-0`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
