import { useEffect, useRef, useState } from "react";
import CosmicText from "./CosmicText";
import Chevron from "./Chevron";
import Resume from "./Resume";

const Home = () => {
  const resumeRef = useRef(null);
  const chevronDelay = 1000;
  const TOP_THRESHOLD = 60; // px from top where chevron is allowed to show

  const [showChevron, setShowChevron] = useState(false);
  const [delayDone, setDelayDone] = useState(false);

  // Delay once on initial load
  useEffect(() => {
    const timer = setTimeout(() => setDelayDone(true), chevronDelay);
    return () => clearTimeout(timer);
  }, [chevronDelay]);

  // Show/hide based on scroll position (and delay)
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < TOP_THRESHOLD;

      // Only show when at top AND initial delay has completed
      if (atTop && delayDone) {
        setShowChevron(true);
      } else {
        setShowChevron(false);
      }
    };

    handleScroll(); // set correct state on load/refresh
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [delayDone]);

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // no need to setShowChevron(false); scroll handler will hide it
  };

  return (
    <>
      <div className="home">
        <CosmicText>
          <h1>Software Developer, Analyst, Creative</h1>

          <p
            className="space-text"
            style={{
              maxWidth: "600px",
              margin: "50px auto 75px auto",
              lineHeight: "1.6",
              fontSize: "1rem",
              color: "#ccc",
              textAlign: "center",
            }}
          >
            Thank you for visiting my website.<br />
            Find my resume by scrolling down or clicking the arrow.
          </p>
        </CosmicText>

        {showChevron && (
          <div className="chevron-slot">
            <Chevron onClick={scrollToResume} />
          </div>
        )}
      </div>

      <div ref={resumeRef} className="resume-anchor">
        <CosmicText>
          <Resume />
        </CosmicText>
      </div>
    </>
  );
};

export default Home;
