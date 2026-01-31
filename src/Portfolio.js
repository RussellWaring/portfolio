import Project from './Project';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="space-text" style={{
        textAlign: 'center',
        marginTop: '100px'
      }}>
        Portfolio
      </h1>
        <p className="space-text" style={{
          maxWidth: '600px',
          margin: '50px auto 75px auto',
          lineHeight: '1.6',
          fontSize: '1rem',
          color: 'var(--mutedText)',
          textAlign: 'center'
        }}>
          A few recent projects I have worked on. Each project features a series of tags identifying technologies and practices used in the development process.
        </p>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Project
            image="https://raw.githubusercontent.com/RussellWaring/GIFS/refs/heads/main/mobile.PNG"
            title="BirdNerd"
            description="A camera-first mobile application that leverages an image processing API and the Google Maps API to create an engaging experience for identifying birds in the wild."
            year="2022-2023"
            tags={['flutter', 'dart', 'api', 'firebase', 'json', 'authentication', 'ai', 'mobile']}
            link="https://github.com/Tsukiyomi-Inari/BirdNerd"
          />
          <Project
            image="https://raw.githubusercontent.com/RussellWaring/GIFS/refs/heads/main/start-it.png"
            title="start-it"
            description="A job board web app that helps users browse and explore entry-level opportunities."
            year="     2026"
            tags={['react.js', 'node.js', 'vite', 'firebase', 'authentication', 'api', 'ai']}
            link="https://russellwaring.github.io/start-it/#/"
          />
          <Project
            image="https://raw.githubusercontent.com/RussellWaring/GIFS/refs/heads/main/Java%20Game.png"
            title="Java Game"
            description="A pure Java coded desktop game leveraging OOP principles and an MVC approach to managing structural logic. Features complex use of the A* algorithm."
            year="2021-2025"
            tags={['java', 'mvc', 'object-orientated', 'desktop', 'algorithms']}
          />
          <Project
            image="https://raw.githubusercontent.com/RussellWaring/GIFS/refs/heads/main/website.png"
            title="Pizzamymind"
            description="Unofficial pie ranking website of the Greater Toronto Area. Uses ReactJS, AGI API, and user authentication to create an interactable experience for seeking the best pizza in Toronto."
            year="2024-2025"
            tags={['reactjs', 'ai', 'api', 'agi', 'sql', 'website', 'comingsoon']}
          />
        </div>
    </div>
  );
};

export default Portfolio;