import Profile from "../components/Profile/Profile";
import ProjectsBar from "../components/ProjectsBar/ProjectsBar";
import SocialBar from "../components/SocialBar/SocialBar";

/**
 * Landing page for the website
 */
export default function Landing() {
  return (
    <section className="page blue-page d-flex flex-column ">
      <section className="pb-5 pt-3 hero d-flex flex-column justify-content-center">
        <Profile />
        <SocialBar />
      </section>
      <ProjectsBar />
    </section>
  );
}
