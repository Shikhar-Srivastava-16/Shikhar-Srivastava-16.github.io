import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="page projects">
      <div className="container">
        <span className="eyebrow">Projects</span>
        <h1 className="section-title">Some of my Projects...</h1>
        <p className="projects__lede">
          
        </p>

        {/* <div className="projects__list">
          {projects.map((project, i) => (
            <article className="project-panel card" key={project.slug}>
              <div className="project-panel__media">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="project-panel__body">
                <span className="project-panel__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="project-panel__name">{project.name}</h2>
                <p className="project-panel__desc">{project.description}</p>
                <ul className="project-panel__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
}
