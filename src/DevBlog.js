import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import BlogList from "./BlogList";
import db from "./data/db.json";
import "./DevBlog.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DevBlog = () => {
  const query = useQuery();
  const activeTag = query.get("tag");

  const blogs = useMemo(() => {
    const all = (db.blogs || []).filter((b) => b.draft !== true);

    const filtered = activeTag
      ? all.filter(
          (b) => Array.isArray(b.tags) && b.tags.includes(activeTag)
        )
      : all;

    return filtered.sort((a, b) => {
      const ap = a.pinned ? 1 : 0;
      const bp = b.pinned ? 1 : 0;
      if (ap !== bp) return bp - ap;
      return (b.date || "").localeCompare(a.date || "");
    });
  }, [activeTag]);

  return (
    <div className="dev-blog">
      <h1 className="space-text dev-blog__title">Dev Blog</h1>

      <div className="dev-blog__container">
        {activeTag && (
          <p className="space-text dev-blog__tag-indicator">
            Tag: <strong>{activeTag}</strong>
          </p>
        )}

        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default DevBlog;