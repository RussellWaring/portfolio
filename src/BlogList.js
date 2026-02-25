import React from "react";
import { Link } from "react-router-dom";
import "./BlogList.css";

function formatDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const BlogListItem = ({ blog }) => {
  const Wrapper = blog ? Link : "div";

  return (
    <Wrapper
      className="blog-card"
      to={blog ? `/blog/${blog.id}` : undefined}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="blog-card__content">
        <div className="blog-card__header">
          {/* H2 so CosmicText sees it */}
          <h2 className="space-text blog-card__title">{blog.title}</h2>
          {blog.date && (
            <span className="blog-card__date">{formatDate(blog.date)}</span>
          )}
        </div>

        {blog.excerpt && (
          <p className="blog-card__excerpt">{blog.excerpt}</p>
        )}

        <div className="blog-card__footer" data-cosmic="ignore">
          <div className="blog-card__tags">
            {Array.isArray(blog.tags) &&
              blog.tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </div>

          <span className="blog-card__cta">
            View Post <span className="blog-card__ctaArrow">›</span>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const BlogList = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <p className="space-text blog-list__empty">
        No posts yet.
      </p>
    );
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogListItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;