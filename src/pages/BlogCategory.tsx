import { Link, useParams } from "react-router-dom";
import { getCategory } from "../lib/blog";
import "./BlogCategory.css";

export default function BlogCategory() {
  const { categorySlug = "" } = useParams();
  const category = getCategory(categorySlug);

  if (!category) {
    return (
      <section className="page">
        <div className="container container--narrow">
          <span className="eyebrow">Blog</span>
          <h1 className="section-title">Category not found</h1>
          <Link className="button" to="/blog">← Back to all categories</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page blog-category-page">
      <div className="container container--narrow">
        <Link className="breadcrumb" to="/blog">← All categories</Link>
        <span className="eyebrow">Category</span>
        <h1 className="section-title">{category.name}</h1>
        {category.description && <p className="blog-category-page__desc">{category.description}</p>}

        <ol className="post-timeline">
          {category.posts.map((post, i) => (
            <li key={post.slug} className="post-timeline__item">
              <span className="post-timeline__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <Link to={post.path} className="post-timeline__title">{post.title}</Link>
                <div className="post-timeline__meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </div>
                {post.summary && <p className="post-timeline__summary">{post.summary}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
