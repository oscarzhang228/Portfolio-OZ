import styles from "./ExperienceBar.module.scss";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
/**
 * ExperienceBar component used to display the jobs I've had on the landing page
 * @returns ExperienceBar component
 */
export default function ExperienceBar() {
  return (
    <section
      className={`${styles["ExperienceBar"]} p-2 p-lg-5 d-flex flex-column gap-2`}
    >
      <h1>I've worked with:</h1>
      <section className="mt-5">
        <Experience
          title="Software Engineer Intern"
          company="Fyve By"
          description="placeholder"
          logo="placeholder"
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
    <Card className="d-flex gap-2 p-5">
      <CardMedia>
        <img></img>
      </CardMedia>
      <CardContent className="d-flex">
        <section>
          <h1>{company}</h1>
          <h2>{title}</h2>
        </section>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
