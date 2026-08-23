import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAdjacentPosts, getPost } from "../lib/blog";
import "./BlogPost.css";

export default function BlogPost() {
  const { categorySlug = "", postSlug = "" } = useParams();
  const post = getPost(categorySlug, postSlug);

  if (!post) {
    return (
      <section className="page">
        <div className="container container--narrow">
          <span className="eyebrow">Blog</span>
          <h1 className="section-title">Post not found</h1>
          <Link className="button" to="/blog">← Back to blog</Link>
        </div>
      </section>
    );
  }

  const { prev, next } = getAdjacentPosts(post);

  return (
    <article className="page blog-post">
      <div className="container container--narrow">
        <Link className="breadcrumb" to={`/blog/${post.categorySlug}`}>← {post.categoryName}</Link>
        <span className="eyebrow">{post.categoryName}</span>
        <h1 className="blog-post__title">{post.title}</h1>
        <time className="blog-post__date" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </time>

        <div className="blog-post__body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <nav className="blog-post__pager" aria-label="More in this category">
          {prev ? (
            <Link to={prev.path} className="blog-post__pager-link blog-post__pager-link--prev">
              <span>← Previous</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={next.path} className="blog-post__pager-link blog-post__pager-link--next">
              <span>Next →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </article>
  );
}
