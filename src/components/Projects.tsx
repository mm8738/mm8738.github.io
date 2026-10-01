
import ProjectCard from "./ProjectCard";
import "../assets/styles/Projects.scss";

/*
  PROJECT DATA

  For now we're not using real project images.
  We'll add those once the layout is working.
*/

const projects = [
  {
    title: "North & Pine performance analysis",
    tags: ["Power BI", "Excel", "Data modelling"],
    description:
      "A management dashboard built from messy retail data to examine growth, profitability, discounting, product performance and customer behaviour.",
    link: "#"
  },

  {
    title: "Exploring biological signals",
    tags: ["Python", "Signal processing", "Statistics"],
    description:
      "A technical playground for analysing time series and biomedical signals, testing filters, visualizing patterns and documenting what the data is doing.",
    link: "#"
  }
];


/*
  PROJECTS COMPONENT
*/

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="projects-heading">
        Selected Works
      </h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;