// import ProjectList from './ProjectList';
// import useFetch from './useFetch';

// const Portfolio = () => {


//   return (
//     <div className="portfolio">
//       <h1>Portfolio</h1>
//     </div>
//   );
// }
 
// export default Portfolio;

// import Project from './Project';

// const Portfolio = () => {
//   return (
//     <div className="portfolio">
//       <h1>Portfolio</h1>
//       <p>This page highlights a few projects I have worked on. Each project features a series of tags identifying technologies and practices used in the development process.
// </p>
//       <div className="portfolio-wrapper">
//         <Project
//           image="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt5f18c2119ce26485/6668df65db90945e0caf9be6/beautiful-flowers-lotus.jpg?q=70&width=3840&auto=webp"
//           title="React + Tailwind + Shortened"
//           description="A brief description of what this project is about."
//           year="2023"
//           tags={['react', 'tailwind', 'frontend']}
//           link="https://example.com/project"
//         />
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import CosmicText from "./CosmicText";
import Project from './Project';

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* <CosmicText> */}
        <h1 className="space-text">Portfolio</h1>
        <p className="space-text" style={{
          maxWidth: '600px',
          margin: '50px auto 75px auto',
          lineHeight: '1.6',
          fontSize: '1rem',
          color: '#ccc',
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
      {/* </CosmicText> */}
    </div>
  );
};

export default Portfolio;