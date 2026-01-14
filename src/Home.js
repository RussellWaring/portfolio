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
  };

  const goToPortfolio = () => {
  window.location.hash = "#/portfolio";
};

// const downloadResume = () => {
//   // Option A: scroll to resume section
//   scrollToResume();

//   // Option B: download PDF (recommended)
//   // window.open("/Russell_Waring_Resume.pdf", "_blank");
// };

  return (
    <>
      <div className="home">
        <CosmicText>
          <h1>Software Developer, Analyst, Creative</h1>

          <p
            className="space-text"
            style={{
              maxWidth: "600px",
              margin: "50px auto 30px auto",
              lineHeight: "1.6",
              fontSize: "1rem",
              color: "#ccc",
              textAlign: "center",
            }}
          >
            I build web, desktop, and mobile apps using technologies like C#, Java, SQL,<br/>
            Flutter, and .NET. This website was built using React and Node.js.
          </p>

        </CosmicText>

        <div className="cta-row">
            <button className="cta primary" onClick={goToPortfolio}>
              View Portfolio
            </button>

          <a className="cta secondary" href="/Russell_Waring_Resume.pdf" download>
              Download Resume
            </a>
          </div>

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
