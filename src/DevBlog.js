import { useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import BlogList from "./BlogList";
import db from "./data/db.json";
import "./DevBlog.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DevBlog = () => {
  const location = useLocation();
  const history = useHistory();
  const query = useQuery();
  const activeTag = query.get("tag");

  // Collect unique tags from non-draft posts
  const allTags = useMemo(() => {
    const set = new Set();

    (db.blogs || [])
      .filter((b) => b.draft !== true)
      .forEach((b) => {
        (b.tags || []).forEach((t) => set.add(t));
      });

    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  // Filtered + sorted blogs
  const blogs = useMemo(() => {
    const all = (db.blogs || []).filter((b) => b.draft !== true);

    const filtered =
      activeTag && activeTag !== "All"
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

  const setTag = (tag) => {
    const next = new URLSearchParams(location.search);

    if (!tag || tag === "All") {
      next.delete("tag");
    } else {
      next.set("tag", tag);
    }

    history.push({
      pathname: location.pathname,
      search: next.toString(),
    });
  };

  return (
    <div className="dev-blog">
      <h1 className="space-text dev-blog__title">Dev Blog</h1>

      <p className="space-text dev-blog__subtitle">
        Development updates, creative writing or general reflections about life
        and the industry. Select a tag below to filter the posts.
      </p>

      {/* TAG PILLS */}
      <div className="dev-blog__tags" data-cosmic="ignore">
        {allTags.map((tag) => {
          const isActive =
            (tag === "All" && !activeTag) || activeTag === tag;

          return (
            <button
              key={tag}
              type="button"
              className={`dev-blog__tagPill ${isActive ? "isActive" : ""}`}
              onClick={() => setTag(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="dev-blog__container">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default DevBlog;