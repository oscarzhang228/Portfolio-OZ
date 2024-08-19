import styles from "./ExperienceBar.module.scss";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import fyvebyLogo from "../../assets/fyveby-logo.png";
import socwebLogo from "../../assets/socweb-logo.jpg";
import TechnologyChip from "../TechnologyChip/TechnologyChip";
import experiences from "../../data/experience.json";
import Button from "../Button/Button";
import paypalLogo from "../../assets/paypal-logo.png";

const imageMap: Record<string, string> = {
  fyvebyLogo: fyvebyLogo,
  socwebLogo: socwebLogo,
  paypalLogo: paypalLogo,
};

type ExperienceData = {
  title: string;
  company: string;
  description: string;
  logo: keyof typeof imageMap;
  technologies: string[];
};

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
        I've worked for:
      </h1>
      <section className="p-1 p-sm-3 d-flex flex-column gap-2">
        {experiences.map((experience: ExperienceData, index: number) => {
          return (
            <section
              className={`${styles["ExperienceBar-ExperienceContainer"]} `}
            >
              <Experience
                key={index}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                logo={imageMap[experience.logo]}
                technologies={experience.technologies}
              />
            </section>
          );
        })}
      </section>
      <section className="px-2">
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1oh-SenQzfQggCx2H306BzVdGYuu7ZDfN/view?usp=sharing",
              "_blank"
            )
          }
          label="View Resume"
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
  technologies: string[];
};
/**
 * Experience component used to display a job I've had
 * @param props title, company, description, logo, and tech used
 * @returns Experience component
 */
const Experience = (props: ExperienceProps) => {
  const { title, company, description, logo, technologies } = props;
  return (
    <Card
      className={`${styles["ExperienceBar-Experience"]} container-flex p-3`}
    >
      <section className="row">
        <section className="col-lg-3 d-flex align-items-center gap-4 flex-wrap">
          <CardMedia className={`${styles["Experience-Logo"]}`}>
            <img src={logo} className="mh-100 mw-100"></img>
          </CardMedia>
          <section>
            <h1 className={`${styles["Experience-Title"]}`}>{company}</h1>
            <h2 className={`${styles["Experience-Subtitle"]}`}>{title}</h2>
          </section>
        </section>
        <section className="col-lg-9 py-1 d-flex flex-column justify-content-center gap-lg-2 gap-4">
          <p className={`${styles["Experience-Body"]} text-wrap mb-0`}>
            {description}
          </p>
          <section className="px-4 pb-2 d-lg-flex d-none gap-2 justify-content-end ">
            {technologies?.map((tech, index) => {
              return <TechnologyChip keyProp={index} label={tech} />;
            })}
          </section>
        </section>
      </section>
    </Card>
  );
};
