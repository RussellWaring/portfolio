/**
 * Rather than typical href (relies on server), leverages special, React-specific link tags
 */

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1>Russell Waring</h1> */}
      <div className="links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Dev Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;