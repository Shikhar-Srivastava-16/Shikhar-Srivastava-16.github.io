import { cadProjects } from "../data/cad";
import "./Cad.css";

const categories = ["Mechanical", "Product", "Structural"] as const;

export default function Cad() {
  return (
    <section className="page cad">
      <div className="container">
        <span className="eyebrow">3D Design &amp; CAD</span>
        <h1 className="section-title">My work in 3D</h1>
        <p className="cad__lede">
          Under Construction
        </p>

        {categories.map((category) => {
          const items = cadProjects.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div className="cad__category" key={category}>
              <h2 className="cad__category-title">{category}</h2>
              <div className="cad-grid">
                {items.map((project) => (
                  <article className="cad-card card" key={project.slug}>
                    <div className="cad-card__media">
                      <img src={project.image} alt={project.name} loading="lazy" />
                    </div>
                    <div className="cad-card__body">
                      <h3 className="cad-card__name">{project.name}</h3>
                      <span className="cad-card__tool">{project.tool}</span>
                      <p className="cad-card__desc">{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
