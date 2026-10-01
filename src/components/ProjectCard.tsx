
type Project = {
  title: string;
  tags: string[];
  description: string;
  link: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">

      <div className="project-image">
        <div className="project-placeholder">
          Project preview
        </div>
      </div>

      <h2>{project.title}</h2>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span
            className="project-tag"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="project-description">
        {project.description}
      </p>

      <a
        className="project-link"
        href={project.link}
      >
        Read more →
      </a>

    </article>
  );
}

export default ProjectCard;