const Home = () => {
  return (
    <div className="home">
      <h1>
        <CosmicText text="Software Developer, Analyst, Creative"/>

      </h1>
      {/* <h1>Software Developer, Analyst, Creative</h1> */}

      <p className="space-text" style={{
        maxWidth: '600px',
        margin: '50px auto 75px auto',
        lineHeight: '1.6',
        fontSize: '1rem',
        color: '#ccc',
        textAlign: 'center'
      }}>Hello! I'm Russell, a creative developer...</p>
    </div>
    
  );
}
 
export default Home;