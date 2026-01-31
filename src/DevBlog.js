// import BlogList from './BlogList';
// import useFetch from './useFetch';


const DevBlog = () => {
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');



  return (
    <div className="dev-blog">
      <h1 className="space-text" style={{
        textAlign: 'center',
        marginTop: '100px'
      }}>
        Dev Blog
      </h1>
        <p className="space-text" style={{
          maxWidth: '600px',
          margin: '50px auto 75px auto',
          lineHeight: '1.6',
          fontSize: '1rem',
          color: 'var(--mutedText)',
          textAlign: 'center'
          }}>Coming soon...</p>
    </div>
  );
}
 
export default DevBlog;