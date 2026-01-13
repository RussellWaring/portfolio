import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      {/* HEADER */}
      <header className="resume-header">
        <h2 className="resume-name">RUSSELL WARING</h2>

        <p className="resume-contact">
          <a href="mailto:russellwaring@outlook.com">russellwaring@outlook.com</a>
          {"  |  "}
          <a
            href="https://www.linkedin.com/in/russell-waring"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/russell-waring
          </a>
        </p>
      </header>

      {/* PROFESSIONAL QUALIFICATIONS */}
      <section className="resume-section">
        <h3 className="resume-section-title">PROFESSIONAL QUALIFICATIONS:</h3>
        <ul className="resume-bullets">
          <li>
            8+ years of combined technical experience in troubleshooting, solution
            design and product delivery.
          </li>
          <li>
            Customer-centric, professional communication skills, constantly
            striving for excellence.
          </li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="resume-section">
        <h3 className="resume-section-title">EXPERIENCE:</h3>

        <div className="resume-role">
          <div className="resume-role-head">
            <div className="resume-role-title">Technical and Systems Analyst</div>
            <div className="resume-role-meta">
              Nevada Learning Series – Toronto, ON | 10/2023 – Present
            </div>
          </div>

          <ul className="resume-bullets">
            <li>
              Designed automation scripts using PowerShell, Outlook and API
              integrations to generate weekly reports, improving project-quoting
              accuracy and turnaround time by 50%.
            </li>
            <li>
              Leading solution design and implementation, including data and
              requirements gathering, communication design (including collaterals
              like video, PowerPoint, email, and others), resulting in powerful
              visual storytelling.
            </li>
            <li>
              Facilitating weekly scrum sessions to align project team, identify
              barriers, and continue goal progression.
            </li>
            <li>
              Delivering professional consultation services to numerous Fortune
              500 clients.
            </li>
            <li>
              Supported securing over $295K in revenue (Q3–Q4 2024) through
              client engagement, gathering requirements, and drafting proposals.
            </li>
          </ul>
        </div>

        <div className="resume-role">
          <div className="resume-role-head">
            <div className="resume-role-title">
              Junior Technical Analyst (Summer co-op)
            </div>
            <div className="resume-role-meta">
              Ontario Ministry of Transportation – Toronto, ON | 05/2022 – 09/2022
            </div>
          </div>

          <ul className="resume-bullets">
            <li>Wrote and maintained JCL jobs for batch processes and regression testing.</li>
            <li>
              Analyzed mainframe code and generated reports linked to impact of
              various proposed modifications to several heavily dated modules in
              the z/OS, ISPF system (COBOL, PL/I, REXX).
            </li>
            <li>
              Formed part of a team responsible for generating a modern solution
              to a legacy system. Team member responsible for reviewing
              undocumented code and supporting solution proposal (C++, SQL).
            </li>
            <li>
              Participated in code-review sessions and weekly scrums, reporting
              to a project manager.
            </li>
          </ul>
        </div>

        <div className="resume-role">
          <div className="resume-role-head">
            <div className="resume-role-title">
              Outbound Sales Representative / Technical Support Associate
            </div>
            <div className="resume-role-meta">
              Nordia Inc. (Bell Canada contract) – Peterborough, ON | 10/2017 – 06/2020
            </div>
          </div>

          <ul className="resume-bullets">
            <li>
              Diagnosed and resolved complex software and network issues in a
              high-volume support environment.
            </li>
            <li>
              Awarded “Bell All-Stars” recognition for ranking in the top 10% of performers.
            </li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="resume-section">
        <h3 className="resume-section-title">EDUCATION:</h3>

        <div className="resume-edu">
          <div className="resume-role-head">
            <div className="resume-role-title">
              Computer Programming and Analysis Advanced Diploma
            </div>
            <div className="resume-role-meta">
              Durham College – Oshawa, ON | 01/2021 – 04/2023
            </div>
          </div>

          <ul className="resume-bullets">
            <li>
              Programming languages: Java, C#, C++, Python, COBOL, Dart,
              JavaScript, Ruby
            </li>
            <li>
              Database systems and frameworks: Firebase, .NET, Angular, Spring
              Boot, Rails, PostgreSQL, Microsoft Server SQL, MySQL, SQLite,
              MongoDB
            </li>
            <li>
              Other tools: Linux, MS Suite (highly proficient), Cloud fundamentals
              (Azure, AWS), GitHub
            </li>
            <li>President’s Honour Roll & Highest-Ranking Graduate.</li>
          </ul>
        </div>

        <div className="resume-edu">
          <div className="resume-role-head">
            <div className="resume-role-title">Urban Forestry Technician Co-op Diploma</div>
            <div className="resume-role-meta">
              Sir Sandford Fleming College – Lindsay, ON | 09/2013 – 04/2016
            </div>
          </div>

          <ul className="resume-bullets">
            <li>
              Collected geospatial data using GPS tools and ArcGIS to analyze and
              map urban tree health, canopy coverage, and species distribution
              for a municipal park.
            </li>
          </ul>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="resume-section">
        <h3 className="resume-section-title">CERTIFICATIONS:</h3>
        <ul className="resume-bullets">
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
          <li>Foundational C# with Microsoft</li>
          <li>Google Analytics 4 Certification</li>
          <li>StackAdapt Basic Programmatic Certification</li>
          <li>Entry Certificate in Business Analysis (ECBA) – In Progress, expected Q1 2026</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="resume-section">
        <h3 className="resume-section-title">PROJECTS:</h3>

        <div className="resume-project">
          <div className="resume-role-title">
            Bird Identification Mobile App – Flutter / Dart / Firebase / Google Maps API
          </div>
          <ul className="resume-bullets">
            <li>
              Implemented image-recognition and geolocation capabilities, managed
              backend data via Firebase.
            </li>
          </ul>
        </div>

        <div className="resume-project">
          <div className="resume-role-title">
            Donation Management System – C#, SQL Server, WPF
          </div>
          <ul className="resume-bullets">
            <li>
              Developed CRUD-based application with integrated data visualization
              and reporting features.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Resume;
