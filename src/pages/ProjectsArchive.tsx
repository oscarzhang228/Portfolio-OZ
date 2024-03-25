import ProjectsDisplay from "../components/ProjectsBar/ProjectsDisplay";

export default function ProjectsArchive() {
  return (
    <section className="projectsArchive p-2 p-sm-5 pb-2 page">
      <h1 className="projectsArchive-heading p-4 text-center">
        Projects Archive
      </h1>
      <ProjectsDisplay />
    </section>
  );
}
