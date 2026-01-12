// import BlogList from './BlogList';
// import useFetch from './useFetch';
import CosmicText from "./CosmicText";


const DevBlog = () => {
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');



  return (
    <div className="dev-blog">
      <CosmicText>
        <h1 className="space-text">Dev Blog</h1>
        <p className="space-text" style={{
          maxWidth: '600px',
          margin: '50px auto 75px auto',
          lineHeight: '1.6',
          fontSize: '1rem',
          color: '#ccc',
          textAlign: 'center'
          }}>Coming soon...</p>
      </CosmicText>
    </div>
  );
}
 
export default DevBlog;