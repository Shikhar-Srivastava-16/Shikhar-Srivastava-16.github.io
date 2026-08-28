import { Link } from "react-router-dom";
import { blogCategories } from "../lib/blog";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="page blog">
      <div className="container">
        <span className="eyebrow">Blog</span>
        <h1 className="section-title">A look inside my train of thought</h1>
        <p className="blog__lede">
          
        </p>

        {blogCategories.length === 0 && (
          <p className="blog__empty">No posts yet - Under Construction.</p>
        )}

        <div className="blog-categories">
          {blogCategories.map((category) => (
            <div className="blog-category card" key={category.slug}>
              <div className="blog-category__header">
                <h2 className="blog-category__title">
                  <Link to={`/blog/${category.slug}`}>{category.name}</Link>
                </h2>
                {category.description && <p className="blog-category__desc">{category.description}</p>}
              </div>
              <ol className="blog-category__posts">
                {category.posts.map((post) => (
                  <li key={post.slug}>
                    <Link to={post.path} className="blog-post-link">
                      <span className="blog-post-link__date">
                        {new Date(post.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                      <span className="blog-post-link__title">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
