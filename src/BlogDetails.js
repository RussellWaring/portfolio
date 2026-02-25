import { useParams, useHistory } from "react-router-dom";
import db from "./data/db.json"; // adjust if needed
import "./BlogDetails.css";

const AUTHOR = "Russell Waring";

function formatDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const blog = (db.blogs || []).find(
    (b) => String(b.id) === String(id) && b.draft !== true
  );

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 1) history.goBack();
    else history.push("/blog");
  };

  if (!blog) {
    return (
      <div className="blog-details">
        <div className="blog-details__container">
          <div className="blog-details__titleRow">
            <a href="/blog" onClick={handleBack} className="blog-details__back" aria-label="Back">
              ‹
            </a>
            <h1 className="space-text blog-details__page-title">Post not found</h1>
            <div className="blog-details__titleSpacer" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <div className="blog-details__container">
        {/* TITLE ROW (inside the same 760px boundary as body) */}
        <div className="blog-details__titleRow">
          <a
            href="/blog"
            onClick={handleBack}
            className="blog-details__back"
            aria-label="Back"
          >
            ‹
          </a>

          {/* H2 instead of H1 */}
          <h1 className="space-text blog-details__page-title">{blog.title}</h1>

          {/* spacer keeps title centered */}
          <div className="blog-details__titleSpacer" />
        </div>

        {/* META directly under title (no huge gap) */}
        <div className="blog-details__metaCenter" data-cosmic="ignore">
          <div className="blog-details__dateRow">
            {blog.date && <span>{formatDate(blog.date)}</span>}
            <span className="blog-details__author">{AUTHOR}</span>
          </div>

          {Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <div className="blog-details__tagsCenter">
              {blog.tags.map((tag) => (
                <span key={tag} className="blog-details__tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* BODY */}
        <div className="blog-details__body">
          {String(blog.body || "")
            .split("\n\n")
            .filter(Boolean)
            .map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;