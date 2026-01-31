import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export default function Navbar({ theme, setTheme }) {
  const [themeOpen, setThemeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeRef = useRef(null);
  const mobileRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) setThemeOpen(false);
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setMobileOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setThemeOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // If switching to desktop, force-close mobile menu
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAll = () => {
    setThemeOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand">Russell Waring</div>

        {/* Desktop links */}
        <div className="navbar__right">
          <nav className="navbar__links" aria-label="Primary navigation">
            <NavLink exact to="/" activeClassName="isActive" onClick={closeAll}>
              About
            </NavLink>
            <NavLink to="/portfolio" activeClassName="isActive" onClick={closeAll}>
              Portfolio
            </NavLink>
            <NavLink to="/blog" activeClassName="isActive" onClick={closeAll}>
              Dev Blog
            </NavLink>
          </nav>

          {/* Theme dropdown (desktop) */}
          <div className="themeMenu" ref={themeRef}>
            <button
              type="button"
              className="themeMenu__toggle"
              aria-haspopup="menu"
              aria-expanded={themeOpen}
              onClick={() => setThemeOpen((v) => !v)}
            >
              <i className={theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"} aria-hidden="true" />
              <span className="themeMenu__chev" aria-hidden="true">
                ▾
              </span>
            </button>

            {themeOpen && (
              <div className="themeMenu__dropdown" role="menu">
                <button
                  type="button"
                  className="themeMenu__item"
                  role="menuitem"
                  onClick={() => {
                    setTheme("light");
                    setThemeOpen(false);
                  }}
                >
                  <i className="fa-solid fa-sun" aria-hidden="true" />
                  <span>Light</span>
                  {theme === "light" && <span className="themeMenu__check">✓</span>}
                </button>

                <button
                  type="button"
                  className="themeMenu__item"
                  role="menuitem"
                  onClick={() => {
                    setTheme("dark");
                    setThemeOpen(false);
                  }}
                >
                  <i className="fa-solid fa-moon" aria-hidden="true" />
                  <span>Dark</span>
                  {theme === "dark" && <span className="themeMenu__check">✓</span>}
                </button>
              </div>
            )}
          </div>

          {/* Hamburger (mobile) */}
          <div className="mobileMenu" ref={mobileRef}>
            <button
              type="button"
              className="mobileMenu__toggle"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="hamburger" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>

            {mobileOpen && (
              <div className="mobileMenu__dropdown" role="menu">
                <NavLink exact to="/" activeClassName="isActive" onClick={closeAll}>
                  About
                </NavLink>
                <NavLink to="/portfolio" activeClassName="isActive" onClick={closeAll}>
                  Portfolio
                </NavLink>
                <NavLink to="/blog" activeClassName="isActive" onClick={closeAll}>
                  Dev Blog
                </NavLink>

                <div className="mobileMenu__divider" />

                <button
                  type="button"
                  className="mobileMenu__themeRow"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    setMobileOpen(false);
                  }}
                >
                  <i className={theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"} aria-hidden="true" />
                  <span>Theme</span>
                  <span className="mobileMenu__muted">{theme === "dark" ? "Dark" : "Light"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
