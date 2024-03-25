import ExperienceBar from "../components/ExperienceBar/ExperienceBar";
import Profile from "../components/Profile/Profile";
import ProjectsBar from "../components/ProjectsBar/ProjectsBar";
import SocialBar from "../components/SocialBar/SocialBar";

type LandingProps = {
  homeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
};

/**
 * Landing page component
 * @param props LandingProps
 * @returns Landing page component
 */
export default function Landing(props: LandingProps) {
  const { homeRef, projectsRef, experienceRef } = props;

  return (
    <section className="page blue-page d-flex flex-column ">
      <section
        className="pb-5 pt-3 hero d-flex flex-column justify-content-center"
        ref={homeRef}
      >
        <Profile />
        <SocialBar />
      </section>
      <section ref={projectsRef}>
        <ProjectsBar numProjects={3} />
      </section>
      <section ref={experienceRef}>
        <ExperienceBar />
      </section>
    </section>
  );
}
