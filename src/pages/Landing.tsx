import Profile from "../components/Profile/Profile";
import ProjectsBar from "../components/ProjectsBar/ProjectsBar";
import SocialBar from "../components/SocialBar/SocialBar";

type LandingProps = {
  homeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
};

/**
 * Landing page for the website
 */
export default function Landing(props: LandingProps) {
  const { homeRef, projectsRef } = props;

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
        <ProjectsBar />
      </section>
    </section>
  );
}
