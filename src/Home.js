import "./Home.css";

const Home = () => {
  const openResume = () => {
    window.open("/RussellWaring_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  const contactMe = () => {
    window.location.href = "mailto:russell@waring.dev";
  };

  return (
    <section className="home">
      <div className="container--fluid container--wide home__grid">
        {/* LEFT SIDE */}
        <div className="home__left">
          <div className="home__identity">
            <img className="home__avatar" src="/me.png" alt="Russell Waring" />

            <div className="home__nameBlock">
              <h1 className="home__name">Russell Waring</h1>
              <h2 className="home__title">
                Software Developer
                <br />
                Technical Analyst
              </h2>
            </div>
          </div>

          <p className="home__subtext">
            {/* I build web, desktop, and mobile apps using technologies like C#, Java, SQL, Flutter, and .NET. This website was built using React and Node.js. */}
            Born in the small town of Uxbridge, Ontario, I grew up loving the outdoors,
            playing hockey, attending stay-over summer camps and spending time watching
            movies and playing video games. I attribute my collaborative spirits and
            communication confidence to my upbringing.  20 years later, you can find me
            studying various programming technologies building a career in software
            development. Feel free to look at the projects I’m currently working on,
            and don’t hesitate to reach out!
          </p>

          {/* (Buttons moved to right side per your plan) */}
        </div>

        {/* RIGHT SIDE */}
        <aside className="home__right">
          <div className="home__socialRow" aria-label="Social links">
            <a
              className="home__iconButton"
              href="https://github.com/RussellWaring"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>

            <a
              className="home__iconButton"
              href="https://linkedin.com/in/russell-waring"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>

          <div className="home__contactBlock">
            <h3 className="home__contactHeading">Send me an email!</h3>
            <p className="home__contactText">
              Want to talk about project ideas, tech, programming or great camping locations? Send me an email and let&apos;s connect!
            </p>

            <div className="home__buttonRow">
              <a
                className="home__btn home__btn--secondary"
                href="/Russell_Waring_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

              <button className="home__btn home__btn--primary" onClick={contactMe} type="button">
                Contact Me
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Home;
